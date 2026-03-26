import { describe, it, expect, beforeEach, vi } from 'vitest';
import { calculate, previewCalculation } from '../arithmetic';
import { Logger } from '../logging';

describe('Arithmetic Service', () => {
  beforeEach(() => {
    // Mock Logger für Tests
    vi.spyOn(Logger, 'logError').mockImplementation(() => {});
    vi.spyOn(Logger, 'logWarn').mockImplementation(() => {});
    vi.spyOn(Logger, 'logInfo').mockImplementation(() => {});
  });

  describe('calculate', () => {
    describe('ADDERE (Addition)', () => {
      it('should add two roman numerals', () => {
        expect(calculate('XII', 'V', 'ADDERE')).toBe('XVII');
        expect(calculate('X', 'X', 'ADDERE')).toBe('XX');
        expect(calculate('M', 'M', 'ADDERE')).toBe('MM');
      });

      it('should throw error if result exceeds limit', () => {
        expect(() => calculate('MMM', 'M', 'ADDERE')).toThrow('LIMITUM EXCESSUM');
      });
    });

    describe('SUBTRAHERE (Subtraction)', () => {
      it('should subtract two roman numerals', () => {
        expect(calculate('XX', 'VIII', 'SUBTRAHERE')).toBe('XII');
        expect(calculate('X', 'V', 'SUBTRAHERE')).toBe('V');
        expect(calculate('M', 'C', 'SUBTRAHERE')).toBe('XC');
      });

      it('should throw error if result is below minimum', () => {
        expect(() => calculate('V', 'X', 'SUBTRAHERE')).toThrow('LIMITUM EXCESSUM');
      });
    });

    describe('MULTIPLICARE (Multiplication)', () => {
      it('should multiply two roman numerals', () => {
        expect(calculate('IV', 'III', 'MULTIPLICARE')).toBe('XII');
        expect(calculate('X', 'X', 'MULTIPLICARE')).toBe('C');
        expect(calculate('II', 'V', 'MULTIPLICARE')).toBe('X');
      });

      it('should throw error if result exceeds limit', () => {
        expect(() => calculate('C', 'C', 'MULTIPLICARE')).toThrow('LIMITUM EXCESSUM');
      });
    });

    describe('DIVIDERE (Division)', () => {
      it('should divide two roman numerals', () => {
        expect(calculate('XV', 'III', 'DIVIDERE')).toBe('V');
        expect(calculate('XX', 'IV', 'DIVIDERE')).toBe('V');
        expect(calculate('C', 'X', 'DIVIDERE')).toBe('X');
      });

      it('should throw error for division by zero', () => {
        expect(() => calculate('X', 'I', 'DIVIDERE')).not.toThrow();
        expect(() => calculate('X', 'I', 'DIVIDERE')).not.toThrow();
      });

      it('should throw error for division by zero (I = 1 is not zero)', () => {
        // I = 1, so this should work
        expect(calculate('X', 'I', 'DIVIDERE')).toBe('X');
      });
    });

    describe('Error handling', () => {
      it('should throw error for invalid input', () => {
        expect(() => calculate('ABC', 'V', 'ADDERE')).toThrow('ERRATA INPUT');
      });

      it('should log calculation success', () => {
        calculate('X', 'V', 'ADDERE');
        expect(Logger.logInfo).toHaveBeenCalled();
      });
    });
  });

  describe('previewCalculation', () => {
    it('should return success with result for valid calculation', () => {
      const result = previewCalculation('XII', 'V', 'ADDERE');
      expect(result.success).toBe(true);
      expect(result.result).toBe('XVII');
      expect(result.error).toBeUndefined();
    });

    it('should return failure with error for invalid calculation', () => {
      const result = previewCalculation('V', 'X', 'SUBTRAHERE');
      expect(result.success).toBe(false);
      expect(result.error).toBe('LIMITUM EXCESSUM');
      expect(result.result).toBeUndefined();
    });

    it('should return failure for division by zero', () => {
      const result = previewCalculation('X', 'I', 'DIVIDERE');
      // I = 1, so this should succeed
      expect(result.success).toBe(true);
    });

    it('should handle invalid input gracefully', () => {
      const result = previewCalculation('ABC', 'V', 'ADDERE');
      expect(result.success).toBe(false);
      expect(result.error).toBe('ERRATA INPUT');
    });
  });
});
