import React from 'react';
import { OperationSymbols, LatinTexts, ErrorMessages } from '@constants/latinTexts';
import { Operation } from '@types';
import { useCalculator } from '@hooks/useCalculator';

/**
 * FormulaDisplay Component
 * Zeigt "XII ET V = XVII" oder Fehlermeldungen an
 * Nutzt den Zustand-Store für State-Management
 */
export const FormulaDisplay: React.FC = () => {
  const { operand1, operand2, operation, result, error } = useCalculator();

  // Operator-Symbol aus lateinischer Map
  const opSymbol = operation
    ? {
        ADDERE: OperationSymbols.ADD,
        SUBTRAHERE: OperationSymbols.SUBTRACT,
        MULTIPLICARE: OperationSymbols.MULTIPLY,
        DIVIDERE: OperationSymbols.DIVIDE,
      }[operation]
    : '';

  // Zusammensetzen der Formel (ohne Ergebnis, falls noch nicht berechnet)
  const formula = `${operand1 || ''} ${opSymbol || ''} ${operand2 || ''}`.trim();

  // Fehlermeldung bestimmen
  const errorMessage = error ? ErrorMessages[error as keyof typeof ErrorMessages] || error : null;

  return (
    <div
      className="formula-display"
      aria-live="polite"
      aria-atomic="true"
      role="status"
    >
      {errorMessage ? (
        <span className="error">{errorMessage}</span>
      ) : (
        <>
          <span className="formula">{formula}</span>{' '}
          {result && (
            <>
              <span className="equals">{LatinTexts.EQUALS_SIGN}</span>{' '}
              <span className="result">{result}</span>
            </>
          )}
        </>
      )}
    </div>
  );
};
