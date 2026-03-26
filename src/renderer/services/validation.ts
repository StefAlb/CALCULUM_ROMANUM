/**
 * Validation Service
 * Validiert römische Zahleingaben in Echtzeit
 */

import { ROMAN_INPUT_REGEX, MAX_INPUT_LENGTH } from '@common/constants';
import { ValidationStatus, ErrorType } from '@types';
import { Logger } from './logging';

/**
 * Validiert eine Eingabe auf gültige römische Ziffern
 * @param input - Die zu validierende Eingabe
 * @returns Validierungsstatus
 */
export const validateInput = (input: string): ValidationStatus => {
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

  // Zeichenprüfung (nur gültige römische Ziffern)
  if (!ROMAN_INPUT_REGEX.test(input)) {
    Logger.logWarn('VALIDATION_ERROR', `Invalid characters in input: ${input}`);
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
 * Prüft ob die Eingabe ein gültiges römische Zahl darstellt
 * (nicht nur gültige Zeichen, sondern auch korrekte Syntax)
 * @param input - Die Eingabe
 * @returns true wenn es eine gültige römische Zahl ist
 */
export const isValidRomanNumeral = (input: string): boolean => {
  if (!input || input.length === 0) return false;

  const normalized = normalizeInput(input);

  // Leere Eingabe ist nicht gültig
  if (normalized.length === 0) return false;

  // Einfache Syntax-Validierung:
  // Römische Zahlen dürfen nicht mehr als 3 gleiche Ziffern hintereinander haben
  // (außer M, das bis zu 4 mal vorkommen kann für Zahlen > 3999, aber wir limitieren auf 3999)
  const repeatedChars = normalized.match(/(I|X|C|M)\1{3,}/);
  if (repeatedChars) {
    return false;
  }

  // V, L, D dürfen nicht wiederholt werden
  const repeatedVD = normalized.match(/(V|L|D)\1/);
  if (repeatedVD) {
    return false;
  }

  return true;
};

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
