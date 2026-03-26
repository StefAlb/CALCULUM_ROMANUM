/**
 * Conversion Service
 * Konvertierung zwischen römischen und arabischen Zahlen
 */

import { ROMAN_SYMBOLS, MAX_ROMAN_VALUE, MIN_ROMAN_VALUE } from '@common/constants';
import { Logger } from './logging';

/**
 * Konvertiert eine römische Zahl in eine arabische Zahl
 * @param roman - Die römische Zahl (Groß- oder Kleinbuchstaben)
 * @returns Die arabische Zahl
 * @throws Error wenn die Eingabe ungültig ist
 */
export const romanToArabic = (roman: string): number => {
  const startTime = performance.now();

  if (!roman || roman.length === 0) {
    throw new Error('ERRATA INPUT: Empty input');
  }

  const normalized = roman.toUpperCase();

  // Validierung: Nur gültige römische Ziffern
  const validChars = /^[IVXLCDM]+$/;
  if (!validChars.test(normalized)) {
    Logger.logError('INVALID_INPUT', roman);
    throw new Error('ERRATA INPUT: Invalid characters');
  }

  // Konvertierungsalgorithmus
  let result = 0;
  let prevValue = 0;

  for (let i = normalized.length - 1; i >= 0; i--) {
    const char = normalized[i];
    const value = getRomanValue(char);

    if (value < prevValue) {
      result -= value;
    } else {
      result += value;
    }
    prevValue = value;
  }

  // Validierung: Ergebnis muss im gültigen Bereich sein
  if (result < MIN_ROMAN_VALUE || result > MAX_ROMAN_VALUE) {
    Logger.logError('LIMIT_EXCEEDED', `Value ${result} out of range`);
    throw new Error('LIMITUM EXCESSUM');
  }

  const duration = performance.now() - startTime;
  if (duration > 10) {
    Logger.logWarn('PERFORMANCE', `romanToArabic took ${duration.toFixed(2)}ms`);
  }

  return result;
};

/**
 * Hilfsfunktion: Wert einer einzelnen römischen Ziffer
 */
const getRomanValue = (char: string): number => {
  const values: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  return values[char] || 0;
};

/**
 * Konvertiert eine arabische Zahl in eine römische Zahl
 * @param arabic - Die arabische Zahl (1-3999)
 * @returns Die römische Zahl
 * @throws Error wenn die Zahl außerhalb des gültigen Bereichs liegt
 */
export const arabicToRoman = (arabic: number): string => {
  const startTime = performance.now();

  if (!Number.isInteger(arabic)) {
    Logger.logError('INVALID_INPUT', `Non-integer value: ${arabic}`);
    throw new Error('ERRATA INPUT: Non-integer value');
  }

  if (arabic < MIN_ROMAN_VALUE || arabic > MAX_ROMAN_VALUE) {
    Logger.logError('LIMIT_EXCEEDED', `Value ${arabic} out of range`);
    throw new Error('LIMITUM EXCESSUM');
  }

  let result = '';
  let remaining = arabic;

  for (const [value, symbol] of ROMAN_SYMBOLS) {
    while (remaining >= value) {
      result += symbol;
      remaining -= value;
    }
  }

  const duration = performance.now() - startTime;
  if (duration > 10) {
    Logger.logWarn('PERFORMANCE', `arabicToRoman took ${duration.toFixed(2)}ms`);
  }

  return result;
};

/**
 * Prüft ob eine arabische Zahl im gültigen Bereich liegt
 * @param value - Die zu prüfende Zahl
 * @returns true wenn im gültigen Bereich
 */
export const isWithinRomanRange = (value: number): boolean => {
  return Number.isInteger(value) && value >= MIN_ROMAN_VALUE && value <= MAX_ROMAN_VALUE;
};
