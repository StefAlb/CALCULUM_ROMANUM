/**
 * Arithmetic Service
 * Führt Berechnungen mit römischen Zahlen durch
 */

import { Operation } from '@types';
import { Logger } from './logging';
import { romanToArabic, arabicToRoman } from './conversion';
import { MAX_ROMAN_VALUE } from '@common/constants';

/**
 * Berechnet das Ergebnis einer Operation mit zwei römischen Zahlen
 * @param operand1 - Erster Operand (römische Zahl)
 * @param operand2 - Zweiter Operand (römische Zahl)
 * @param operation - Die auszuführende Operation
 * @returns Das Ergebnis als römische Zahl
 * @throws Error bei Division durch Null oder Ergebnis außerhalb des gültigen Bereichs
 */
export const calculate = (
  operand1: string,
  operand2: string,
  operation: Operation,
): string => {
  const startTime = performance.now();

  // Konvertierung der Operanden
  const num1 = romanToArabic(operand1);
  const num2 = romanToArabic(operand2);

  let result: number;

  switch (operation) {
    case 'ADDERE':
      result = num1 + num2;
      break;
    case 'SUBTRAHERE':
      result = num1 - num2;
      break;
    case 'MULTIPLICARE':
      result = num1 * num2;
      break;
    case 'DIVIDERE':
      if (num2 === 0) {
        Logger.logError('DIVISION_BY_ZERO', `${operand1} / ${operand2}`);
        throw new Error('DIVISIO PER ZERO');
      }
      // Ganzzahlige Division für römische Zahlen
      result = Math.floor(num1 / num2);
      break;
    default:
      Logger.logError('INVALID_INPUT', `Unknown operation: ${operation}`);
      throw new Error('ERRATA INPUT');
  }

  // Prüfen ob Ergebnis im gültigen Bereich liegt
  if (result < 1 || result > MAX_ROMAN_VALUE) {
    Logger.logError('LIMIT_EXCEEDED', `Result ${result} out of range`);
    throw new Error('LIMITUM EXCESSUM');
  }

  // Konvertierung zurück zu römisch
  const romanResult = arabicToRoman(result);

  const duration = performance.now() - startTime;
  
  // Logging der Berechnung
  Logger.logInfo(
    'CALCULATION',
    `${operand1} ${operation} ${operand2} = ${romanResult} (${duration.toFixed(2)}ms)`,
  );

  // Performance-Check
  if (duration > 100) {
    Logger.logWarn('PERFORMANCE', `Calculation took ${duration.toFixed(2)}ms (threshold: 100ms)`);
  }

  return romanResult;
};

/**
 * Prüft ob eine Berechnung erfolgreich sein wird (ohne sie auszuführen)
 * @param operand1 - Erster Operand
 * @param operand2 - Zweiter Operand
 * @param operation - Operation
 * @returns Object mit Erfolg-Status und ggf. Fehlermeldung
 */
export const previewCalculation = (
  operand1: string,
  operand2: string,
  operation: Operation,
): { success: boolean; error?: string; result?: string } => {
  try {
    const result = calculate(operand1, operand2, operation);
    return { success: true, result };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'ERRATA';
    return { success: false, error: errorMessage };
  }
};
