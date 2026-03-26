import { describe, it, expect } from 'vitest';
import {
  romanToArabic,
  arabicToRoman,
  isWithinRomanRange,
} from '../conversion';

describe('Conversion Service', () => {
  describe('romanToArabic', () => {
    it('should convert simple roman numerals', () => {
      expect(romanToArabic('I')).toBe(1);
      expect(romanToArabic('V')).toBe(5);
      expect(romanToArabic('X')).toBe(10);
      expect(romanToArabic('L')).toBe(50);
      expect(romanToArabic('C')).toBe(100);
      expect(romanToArabic('D')).toBe(500);
      expect(romanToArabic('M')).toBe(1000);
    });

    it('should convert compound roman numerals', () => {
      expect(romanToArabic('XII')).toBe(12);
      expect(romanToArabic('XVII')).toBe(17);
      expect(romanToArabic('XXV')).toBe(25);
      expect(romanToArabic('LXXXVIII')).toBe(88);
    });

    it('should handle subtractive notation', () => {
      expect(romanToArabic('IV')).toBe(4);
      expect(romanToArabic('IX')).toBe(9);
      expect(romanToArabic('XL')).toBe(40);
      expect(romanToArabic('XC')).toBe(90);
      expect(romanToArabic('CD')).toBe(400);
      expect(romanToArabic('CM')).toBe(900);
    });

    it('should handle case-insensitive input', () => {
      expect(romanToArabic('xii')).toBe(12);
      expect(romanToArabic('mcmxciv')).toBe(1994);
      expect(romanToArabic('MiXeD')).toBe(1009);
    });

    it('should throw error for empty input', () => {
      expect(() => romanToArabic('')).toThrow('ERRATA INPUT');
    });

    it('should throw error for invalid characters', () => {
      expect(() => romanToArabic('ABC')).toThrow('ERRATA INPUT');
      expect(() => romanToArabic('X2V')).toThrow('ERRATA INPUT');
    });

    it('should throw error for value out of range', () => {
      expect(() => romanToArabic('MMMM')).toThrow('LIMITUM EXCESSUM');
    });
  });

  describe('arabicToRoman', () => {
    it('should convert simple arabic numbers', () => {
      expect(arabicToRoman(1)).toBe('I');
      expect(arabicToRoman(5)).toBe('V');
      expect(arabicToRoman(10)).toBe('X');
      expect(arabicToRoman(50)).toBe('L');
      expect(arabicToRoman(100)).toBe('C');
      expect(arabicToRoman(500)).toBe('D');
      expect(arabicToRoman(1000)).toBe('M');
    });

    it('should convert compound arabic numbers', () => {
      expect(arabicToRoman(12)).toBe('XII');
      expect(arabicToRoman(17)).toBe('XVII');
      expect(arabicToRoman(25)).toBe('XXV');
      expect(arabicToRoman(88)).toBe('LXXXVIII');
    });

    it('should handle subtractive notation', () => {
      expect(arabicToRoman(4)).toBe('IV');
      expect(arabicToRoman(9)).toBe('IX');
      expect(arabicToRoman(40)).toBe('XL');
      expect(arabicToRoman(90)).toBe('XC');
      expect(arabicToRoman(400)).toBe('CD');
      expect(arabicToRoman(900)).toBe('CM');
    });

    it('should convert maximum valid value', () => {
      expect(arabicToRoman(3999)).toBe('MMMCMXCIX');
    });

    it('should throw error for value below range', () => {
      expect(() => arabicToRoman(0)).toThrow('LIMITUM EXCESSUM');
      expect(() => arabicToRoman(-1)).toThrow('LIMITUM EXCESSUM');
    });

    it('should throw error for value above range', () => {
      expect(() => arabicToRoman(4000)).toThrow('LIMITUM EXCESSUM');
      expect(() => arabicToRoman(10000)).toThrow('LIMITUM EXCESSUM');
    });

    it('should throw error for non-integer values', () => {
      expect(() => arabicToRoman(3.5)).toThrow('ERRATA INPUT');
    });
  });

  describe('isWithinRomanRange', () => {
    it('should return true for valid range', () => {
      expect(isWithinRomanRange(1)).toBe(true);
      expect(isWithinRomanRange(100)).toBe(true);
      expect(isWithinRomanRange(3999)).toBe(true);
    });

    it('should return false for values below range', () => {
      expect(isWithinRomanRange(0)).toBe(false);
      expect(isWithinRomanRange(-1)).toBe(false);
    });

    it('should return false for values above range', () => {
      expect(isWithinRomanRange(4000)).toBe(false);
      expect(isWithinRomanRange(10000)).toBe(false);
    });

    it('should return false for non-integers', () => {
      expect(isWithinRomanRange(3.5)).toBe(false);
    });
  });
});
