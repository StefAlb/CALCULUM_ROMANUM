import { create } from 'zustand';
import { Operation, ErrorType, HistoryEntry, ValidationStatus } from '../types';
import { romanToArabic, arabicToRoman } from '@services/conversion';
import { validateRomanInput } from '@services/validation';
import { Logger } from '@services/logging';

interface CalculatorState {
  // Eingabe
  currentValue: string;           // Aktuelle Eingabe
  operand1: string | null;        // Erster Operand
  operand2: string | null;        // Zweiter Operand
  
  // Operation
  operation: Operation | null;    // Ausgewählte Operation
  
  // Ergebnis
  result: string | null;          // Ergebnis oder Fehlermeldung
  
  // Status
  validationStatus: ValidationStatus;
  error: ErrorType;
  showHistory: boolean;
  history: HistoryEntry[];
  
  // Actions
  setCurrentValue: (value: string) => void;
  setOperand1: (value: string | null) => void;
  setOperand2: (value: string | null) => void;
  setOperation: (operation: Operation | null) => void;
  setResult: (result: string | null) => void;
  setError: (error: ErrorType) => void;
  setValidationStatus: (status: ValidationStatus) => void;
  toggleHistory: () => void;
  addHistoryEntry: (entry: HistoryEntry) => void;
  clearAll: () => void;
  clearEntry: () => void;
  calculate: () => void;
  loadFromHistory: (entry: HistoryEntry) => void;
}

export const useCalculatorStore = create<CalculatorState>((set, get) => ({
  // Initial State
  currentValue: '',
  operand1: null,
  operand2: null,
  operation: null,
  result: null,
  validationStatus: 'EMPTY',
  error: 'NONE',
  showHistory: false,
  history: [],

  // Actions
  setCurrentValue: (value) => {
    const status = validateRomanInput(value);
    set({ 
      currentValue: value,
      validationStatus: status,
      error: status === 'INVALID' ? 'INVALID_INPUT' : 'NONE',
      result: null // Ergebnis zurücksetzen bei neuer Eingabe
    });
  },

  setOperand1: (value) => set({ operand1: value }),
  setOperand2: (value) => set({ operand2: value }),

  setOperation: (operation) => {
    const { operand1, currentValue } = get();
    
    // Wenn eine Operation gewählt wird und noch kein Operand1 gesetzt ist,
    // und currentValue ist gültig, dann setze Operand1
    if (operation && !operand1 && currentValue && validateRomanInput(currentValue) === 'VALID') {
      set({
        operation,
        operand1: currentValue,
        currentValue: '',
        result: null,
      });
    } else {
      set({ operation });
    }
  },

  setResult: (result) => set({ result }),

  setError: (error) => set({ error }),

  setValidationStatus: (status) => set({ validationStatus: status }),

  toggleHistory: () => set((state) => ({ showHistory: !state.showHistory })),

  addHistoryEntry: (entry) => set((state) => {
    const newHistory = [entry, ...state.history].slice(0, 10); // Max 10 Einträge
    return { history: newHistory };
  }),

  clearAll: () => set({
    currentValue: '',
    operand1: null,
    operand2: null,
    operation: null,
    result: null,
    validationStatus: 'EMPTY',
    error: 'NONE',
  }),

  clearEntry: () => set({
    currentValue: '',
    validationStatus: 'EMPTY',
    result: null,
    error: 'NONE',
  }),

  calculate: () => {
    const { operand1: op1, operand2: op2, operation, currentValue } = get();
    
    // Bestimme Operand2: entweder explizit gesetzt oder aus currentValue
    const secondOperand = op2 || currentValue;
    
    // Validierung
    if (!op1 || !secondOperand || !operation) {
      set({ 
        error: 'INVALID_INPUT',
        validationStatus: 'INCOMPLETE'
      });
      return;
    }

    try {
      // Konvertiere zu arabischen Zahlen
      const num1 = romanToArabic(op1);
      const num2 = romanToArabic(secondOperand);
      
      // Führe Berechnung durch
      let resultNum: number;
      
      switch (operation) {
        case 'ADDERE':
          resultNum = num1 + num2;
          break;
        case 'SUBTRAHERE':
          resultNum = num1 - num2;
          if (resultNum < 1) {
            set({ error: 'INVALID_INPUT', result: 'ERRATA: RESULTATUM_NEGATIVUM' });
            return;
          }
          break;
        case 'MULTIPLICARE':
          resultNum = num1 * num2;
          break;
        case 'DIVIDERE':
          if (num2 === 0) {
            set({ error: 'DIVISION_BY_ZERO', result: 'DIVISIO PER ZERO' });
            return;
          }
          resultNum = Math.floor(num1 / num2);
          if (resultNum < 1) {
            set({ error: 'INVALID_INPUT', result: 'ERRATA: RESULTATUM_TOO_SMALL' });
            return;
          }
          break;
        default:
          set({ error: 'INVALID_INPUT', result: 'ERRATA' });
          return;
      }
      
      // Prüfe Limit
      if (resultNum > 3999) {
        set({ error: 'LIMIT_EXCEEDED', result: 'LIMITUM EXCESSUM' });
        return;
      }
      
      // Konvertiere zurück zu römisch
      const resultRoman = arabicToRoman(resultNum);
      
      // Erstelle Historie-Eintrag
      const historyEntry: HistoryEntry = {
        operand1: op1,
        operation,
        operand2: secondOperand,
        result: resultRoman,
        timestamp: new Date(),
      };
      
      // Update State
      set({
        result: resultRoman,
        operand2: secondOperand,
        currentValue: resultRoman,
        validationStatus: 'VALID',
        error: 'NONE',
        history: [historyEntry, ...get().history].slice(0, 10),
      });
      
      Logger.logInfo('CALCULATION', `${op1} ${operation} ${secondOperand} = ${resultRoman}`);
    } catch (err) {
      Logger.logError('INVALID_INPUT', String(err));
      set({ 
        error: 'INVALID_INPUT', 
        result: 'ERRATA: CALCULATIO_FAILITA' 
      });
    }
  },

  loadFromHistory: (entry) => {
    set({
      currentValue: entry.operand1,
      operand1: entry.operand1,
      operand2: null,
      operation: entry.operation,
      result: null,
      validationStatus: 'VALID',
      error: 'NONE',
      showHistory: false,
    });
  },
}));

// Helper Hooks
export const useCalculator = () => {
  const store = useCalculatorStore();
  
  const canCalculate = Boolean(
    store.operand1 && 
    (store.operand2 || store.currentValue) && 
    store.operation
  );

  return {
    ...store,
    currentValue: store.currentValue,
    operand1: store.operand1,
    operand2: store.operand2,
    operation: store.operation,
    result: store.result,
    error: store.error,
    validationStatus: store.validationStatus,
    history: store.history,
    showHistory: store.showHistory,
    canCalculate,
  };
};
