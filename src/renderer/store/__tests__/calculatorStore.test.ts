import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useCalculatorStore } from '../calculatorStore';
import { HistoryService } from '@services/history';

// Mock Services
vi.mock('@services/arithmetic', () => ({
  calculate: vi.fn((op1: string, op2: string, op: string) => {
    if (op === 'DIVIDERE' && op2 === 'I') return 'X';
    if (op === 'ADDERE') return 'XVII';
    if (op === 'SUBTRAHERE') return 'VII';
    if (op === 'MULTIPLICARE') return 'XXV';
    return 'X';
  }),
}));

vi.mock('@services/history', () => ({
  HistoryService: {
    add: vi.fn(),
    getAll: vi.fn(() => []),
  },
}));

vi.mock('@services/logging', () => ({
  Logger: {
    logInfo: vi.fn(),
    logWarn: vi.fn(),
    logError: vi.fn(),
  },
}));

describe('Calculator Store', () => {
  beforeEach(() => {
    // Store zurücksetzen
    useCalculatorStore.setState({
      operand1: null,
      operand2: null,
      operation: null,
      result: null,
      error: null,
      history: [],
      showHistory: false,
    });
  });

  describe('setOperand1', () => {
    it('should set operand1 and clear error/result', () => {
      const { setOperand1 } = useCalculatorStore.getState();
      setOperand1('XII');

      const state = useCalculatorStore.getState();
      expect(state.operand1).toBe('XII');
      expect(state.error).toBeNull();
      expect(state.result).toBeNull();
    });
  });

  describe('setOperand2', () => {
    it('should set operand2 and clear error/result', () => {
      const { setOperand2 } = useCalculatorStore.getState();
      setOperand2('V');

      const state = useCalculatorStore.getState();
      expect(state.operand2).toBe('V');
      expect(state.error).toBeNull();
      expect(state.result).toBeNull();
    });
  });

  describe('setOperation', () => {
    it('should set operation and clear error', () => {
      const { setOperation } = useCalculatorStore.getState();
      setOperation('ADDERE');

      const state = useCalculatorStore.getState();
      expect(state.operation).toBe('ADDERE');
      expect(state.error).toBeNull();
    });
  });

  describe('clearAll', () => {
    it('should reset all state to initial values', () => {
      const { setOperand1, setOperand2, setOperation, clearAll } = useCalculatorStore.getState();
      setOperand1('XII');
      setOperand2('V');
      setOperation('ADDERE');

      clearAll();

      const state = useCalculatorStore.getState();
      expect(state.operand1).toBeNull();
      expect(state.operand2).toBeNull();
      expect(state.operation).toBeNull();
      expect(state.result).toBeNull();
      expect(state.error).toBeNull();
    });
  });

  describe('clearEntry', () => {
    it('should clear operand1 when no operation is selected', () => {
      const { setOperand1, clearEntry } = useCalculatorStore.getState();
      setOperand1('XII');

      clearEntry();

      const state = useCalculatorStore.getState();
      expect(state.operand1).toBeNull();
    });

    it('should clear operand2 when operation is selected', () => {
      const { setOperand1, setOperand2, setOperation, clearEntry } = useCalculatorStore.getState();
      setOperand1('XII');
      setOperation('ADDERE');
      setOperand2('V');

      clearEntry();

      const state = useCalculatorStore.getState();
      expect(state.operand2).toBeNull();
      expect(state.operand1).toBe('XII');
    });
  });

  describe('performCalculation', () => {
    it('should calculate and set result when all data is present', () => {
      const { setOperand1, setOperand2, setOperation, performCalculation } = useCalculatorStore.getState();
      setOperand1('XII');
      setOperand2('V');
      setOperation('ADDERE');

      performCalculation();

      const state = useCalculatorStore.getState();
      expect(state.result).toBe('XVII');
      expect(state.error).toBeNull();
      expect(HistoryService.add).toHaveBeenCalledWith('XII', 'ADDERE', 'V', 'XVII');
    });

    it('should set error when data is missing', () => {
      const { performCalculation } = useCalculatorStore.getState();
      performCalculation();

      const state = useCalculatorStore.getState();
      expect(state.error).toBe('INVALID_INPUT');
      expect(state.result).toBeNull();
    });

    it('should handle division by zero error', () => {
      const { setOperand1, setOperand2, setOperation, performCalculation } = useCalculatorStore.getState();
      setOperand1('X');
      setOperand2('I');
      setOperation('DIVIDERE');

      // Mock calculate to throw error for division by zero
      vi.mocked(useCalculatorStore.getState().performCalculation).mockImplementation(() => {
        throw new Error('DIVISIO PER ZERO');
      });

      performCalculation();

      const state = useCalculatorStore.getState();
      expect(state.error).toBe('DIVISIO PER ZERO');
    });
  });

  describe('toggleHistory', () => {
    it('should toggle showHistory state', () => {
      const { toggleHistory } = useCalculatorStore.getState();

      toggleHistory();
      expect(useCalculatorStore.getState().showHistory).toBe(true);

      toggleHistory();
      expect(useCalculatorStore.getState().showHistory).toBe(false);
    });
  });

  describe('loadFromHistory', () => {
    it('should load entry from history and reset state', () => {
      const { loadFromHistory } = useCalculatorStore.getState();
      const entry = {
        operand1: 'X',
        operation: 'ADDERE' as const,
        operand2: 'V',
        result: 'XV',
        timestamp: new Date(),
      };

      loadFromHistory(entry);

      const state = useCalculatorStore.getState();
      expect(state.operand1).toBe('X');
      expect(state.operation).toBe('ADDERE');
      expect(state.operand2).toBe('V');
      expect(state.result).toBeNull();
      expect(state.error).toBeNull();
      expect(state.showHistory).toBe(false);
    });
  });
});
