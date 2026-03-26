import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  validateInput,
  isInputComplete,
  normalizeInput,
  isValidRomanNumeral,
  getValidationErrorMessage,
} from '../validation';

describe('Validation Service', () => {
  describe('validateInput', () => {
    it('should return EMPTY for empty string', () => {
      expect(validateInput('')).toBe('EMPTY');
    });

    it('should return VALID for valid roman numerals', () => {
      expect(validateInput('XII')).toBe('VALID');
      expect(validateInput('mcmxciv')).toBe('VALID');
      expect(validateInput('IV')).toBe('VALID');
      expect(validateInput('MMMCMXCIX')).toBe('VALID');
    });

    it('should return INVALID for invalid characters', () => {
      expect(validateInput('123')).toBe('INVALID');
      expect(validateInput('ABC')).toBe('INVALID');
      expect(validateInput('X2V')).toBe('INVALID');
      expect(validateInput('XII!')).toBe('INVALID');
    });

    it('should return INVALID for input exceeding max length', () => {
      const longInput = 'MMMMMMMMMMMMMMMM'; // 16 characters
      expect(validateInput(longInput)).toBe('INVALID');
    });

    it('should accept max length input (15 characters)', () => {
      const maxInput = 'MMMMMMMMMMMMMMM'; // 15 characters
      expect(validateInput(maxInput)).toBe('VALID');
    });
  });

  describe('isInputComplete', () => {
    it('should return false for empty string', () => {
      expect(isInputComplete('')).toBe(false);
    });

    it('should return true for any non-empty string', () => {
      expect(isInputComplete('I')).toBe(true);
      expect(isInputComplete('XII')).toBe(true);
    });
  });

  describe('normalizeInput', () => {
    it('should convert to uppercase', () => {
      expect(normalizeInput('xii')).toBe('XII');
      expect(normalizeInput('mcmxciv')).toBe('MCMXCIV');
      expect(normalizeInput('MiXed')).toBe('MIXED');
    });

    it('should keep uppercase unchanged', () => {
      expect(normalizeInput('XII')).toBe('XII');
    });
  });

  describe('isValidRomanNumeral', () => {
    it('should return true for valid roman numerals', () => {
      expect(isValidRomanNumeral('XII')).toBe(true);
      expect(isValidRomanNumeral('MCMXCIV')).toBe(true);
      expect(isValidRomanNumeral('IV')).toBe(true);
    });

    it('should return false for empty input', () => {
      expect(isValidRomanNumeral('')).toBe(false);
    });

    it('should return false for more than 3 repeated characters (I, X, C)', () => {
      expect(isValidRomanNumeral('IIII')).toBe(false);
      expect(isValidRomanNumeral('XXXX')).toBe(false);
      expect(isValidRomanNumeral('CCCC')).toBe(false);
    });

    it('should return false for repeated V, L, D', () => {
      expect(isValidRomanNumeral('VV')).toBe(false);
      expect(isValidRomanNumeral('LL')).toBe(false);
      expect(isValidRomanNumeral('DD')).toBe(false);
    });

    it('should return true for M repeated up to 3 times', () => {
      expect(isValidRomanNumeral('MMM')).toBe(true);
    });
  });

  describe('getValidationErrorMessage', () => {
    it('should return empty string for EMPTY status', () => {
      expect(getValidationErrorMessage('EMPTY')).toBe('');
    });

    it('should return ERRATA INPUT for INVALID status', () => {
      expect(getValidationErrorMessage('INVALID', 'ABC')).toBe('ERRATA INPUT');
    });

    it('should return empty string for VALID status', () => {
      expect(getValidationErrorMessage('VALID')).toBe('');
    });

    it('should return empty string for INCOMPLETE status', () => {
      expect(getValidationErrorMessage('INCOMPLETE')).toBe('');
    });
  });
});
