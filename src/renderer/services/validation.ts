/**
 * Validation Service
 * Validiert römische Zahleingaben in Echtzeit
 */

import { MAX_INPUT_LENGTH } from '@common/constants';
import { ValidationStatus, ErrorType } from '@renderer/types';
import { Logger } from './logging';

/**
 * Validiert eine Eingabe auf gültige römische Ziffern
 * @param input - Die zu validierende Eingabe
 * @returns Validierungsstatus
 */
export const validateRomanInput = (input: string): ValidationStatus => {
  const startTime = performance.now();

  // Leere Eingabe
  if (input.length === 0) {
    return 'EMPTY';
  }

  // Längenprüfung
  if (input.length > MAX_INPUT_LENGTH) {
    Logger.logWarn(
      'VALIDATION_ERROR',
      `Input exceeds max length: ${input.length} > ${MAX_INPUT_LENGTH}`,
    );
    return 'INVALID';
  }

  // Zeichenprüfung (nur gültige römische Ziffern: I, V, X, L, C, D, M)
  const validChars = /^[IVXLCDM]+$/;
  if (!validChars.test(input.toUpperCase())) {
    Logger.logWarn('VALIDATION_ERROR', `Invalid characters in input: ${input}`);
    return 'INVALID';
  }

  // Syntax-Validierung: Prüfe ob es eine gültige römische Zahl ist
  if (!isValidRomanNumber(input)) {
    Logger.logWarn('VALIDATION_ERROR', `Invalid roman numeral syntax: ${input}`);
    return 'INVALID';
  }

  // Zeitmessung loggen (nur im Dev-Modus)
  const duration = performance.now() - startTime;
  if (duration > 50) {
    Logger.logWarn('PERFORMANCE', `Validation took ${duration.toFixed(2)}ms`);
  }

  return 'VALID';
};

/**
 * Prüft ob eine Eingabe ein gültiges römische Zahl darstellt
 * (nicht nur gültige Zeichen, sondern auch korrekte Syntax)
 * @param input - Die Eingabe
 * @returns true wenn es eine gültige römische Zahl ist
 */
export const isValidRomanNumber = (input: string): boolean => {
  if (!input || input.length === 0) return false;

  const normalized = input.toUpperCase();

  // Leere Eingabe ist nicht gültig
  if (normalized.length === 0) return false;

  // Einfache Syntax-Validierung:
  // Römische Zahlen dürfen nicht mehr als 3 gleiche Ziffern hintereinander haben
  // (außer M, das bis zu 3 mal vorkommen kann für Zahlen <= 3999)
  const repeatedChars = normalized.match(/(I|X|C|M)\1{3,}/);
  if (repeatedChars) {
    return false;
  }

  // V, L, D dürfen nicht wiederholt werden
  const repeatedVD = normalized.match(/(V|L|D)\1/);
  if (repeatedVD) {
    return false;
  }

  // Weitere Syntax-Regeln für römische Zahlen
  // I kann nur vor V und X stehen
  const invalidI = normalized.match(/I{0,3}(L|C|D|M)/);
  if (invalidI && !normalized.match(/^IV|IX/)) {
    // Wenn I vor L, C, D, M steht aber nicht IV oder IX ist
    const iPositions = [];
    for (let i = 0; i < normalized.length; i++) {
      if (normalized[i] === 'I') iPositions.push(i);
    }
    for (const pos of iPositions) {
      if (pos + 1 < normalized.length) {
        const nextChar = normalized[pos + 1];
        if (nextChar === 'L' || nextChar === 'C' || nextChar === 'D' || nextChar === 'M') {
          if (normalized.slice(pos, pos + 2) !== 'IV' && normalized.slice(pos, pos + 2) !== 'IX') {
            return false;
          }
        }
      }
    }
  }

  return true;
};

/**
 * Validiert eine Eingabe auf gültige römische Ziffern (Alias für Kompatibilität)
 * @param input - Die zu validierende Eingabe
 * @returns Validierungsstatus
 */
export const validateInput = (input: string): ValidationStatus => {
  return validateRomanInput(input);
};

/**
 * Prüft ob eine Eingabe vollständig ist (mindestens ein Zeichen)
 * @param input - Die Eingabe
 * @returns true wenn Eingabe nicht leer
 */
export const isInputComplete = (input: string): boolean => {
  return input.length > 0;
};

/**
 * Normalisiert Eingabe (Umwandlung in Großbuchstaben)
 * @param input - Die Eingabe
 * @returns Normalisierte Eingabe in Großbuchstaben
 */
export const normalizeInput = (input: string): string => {
  return input.toUpperCase();
};

/**
 * Alias für isValidRomanNumber (für Kompatibilität)
 */
export const isValidRomanNumeral = isValidRomanNumber;

/**
 * Erzeugt eine Fehlermeldung basierend auf dem Validierungsstatus
 * @param status - Der Validierungsstatus
 * @returns Lateinische Fehlermeldung oder leeren String
 */
export const getValidationErrorMessage = (
  status: ValidationStatus,
  input?: string,
): string => {
  switch (status) {
    case 'EMPTY':
      return '';
    case 'INVALID':
      Logger.logError('INVALID_INPUT', input || 'unknown');
      return 'ERRATA INPUT';
    case 'INCOMPLETE':
      return '';
    case 'VALID':
      return '';
    default:
      return 'ERRATA';
  }
};
