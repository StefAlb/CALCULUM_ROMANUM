/**
 * Common Utilities und Konstanten für CALCULUM ROMANUM
 */

/**
 * Gültige römische Ziffern (Case-insensitive)
 */
export const ROMAN_DIGITS = 'IVXLCDMivxlcdm';

/**
 * Gültige römische Ziffern (Großbuchstaben)
 */
export const ROMAN_DIGITS_UPPER = 'IVXLCDM';

/**
 * Regulärer Ausdruck für Validierung römischer Zahlen
 * Erlaubt nur gültige römische Ziffern
 */
export const ROMAN_INPUT_REGEX = /^[IVXLCDM]*$/i;

/**
 * Maximum value for Roman numerals (3999)
 */
export const MAX_ROMAN_VALUE = 3999;

/**
 * Minimum value for Roman numerals (1)
 */
export const MIN_ROMAN_VALUE = 1;

/**
 * Maximum input length (15 characters)
 */
export const MAX_INPUT_LENGTH = 15;

/**
 * Maximum history entries (10)
 */
export const MAX_HISTORY_ENTRIES = 10;

/**
 * Performance thresholds in milliseconds
 */
export const PERFORMANCE_THRESHOLDS = {
  CALCULATION: 100,
  LIVE_UPDATE: 50,
  INITIAL_RENDER: 200,
  HISTORY_LOAD: 100,
} as const;

/**
 * Mapping von arabischen Werten zu römischen Symbolen
 * Für Konvertierung arabisch → römisch
 */
export const ROMAN_SYMBOLS: readonly [number, string][] = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
] as const;

/**
 * Logging levels
 */
export const LogLevel = {
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
} as const;

export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

/**
 * Log message types
 */
export const LogType = {
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  OPERATION_CHANGED: 'OPERATION_CHANGED',
  CALCULATION: 'CALCULATION',
  DIVISION_BY_ZERO: 'DIVISION_BY_ZERO',
  LIMIT_EXCEEDED: 'LIMIT_EXCEEDED',
  INVALID_INPUT: 'INVALID_INPUT',
  CLEAR_ACTION: 'CLEAR_ACTION',
  UI_UPDATE_ERROR: 'UI_UPDATE_ERROR',
  HISTORY_ERROR: 'HISTORY_ERROR',
  UI_ERROR: 'UI_ERROR',
} as const;

export type LogType = (typeof LogType)[keyof typeof LogType];

/**
 * Format für Log-Nachrichten
 * [TIMESTAMP] [LEVEL] [TYPE] [MESSAGE]
 */
export const formatLogMessage = (
  level: LogLevel,
  type: LogType,
  message: string,
): string => {
  const timestamp = new Date().toISOString();
  return `[${timestamp}] [${level}] [${type}] [${message}]`;
};
