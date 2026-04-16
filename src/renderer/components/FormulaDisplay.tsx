import React from 'react';
import { OperationSymbols, LatinTexts, ErrorMessages } from '@constants/latinTexts';
import { useCalculator } from '@hooks/useCalculator';

/**
 * FormulaDisplay Component
 * Zeigt den Rechenweg an: "XII ET V = XVII" oder Fehlermeldungen
 * Wird über dem Hauptdisplay angezeigt
 */
export const FormulaDisplay: React.FC = () => {
  const { operand1, operand2, operation, result, error } = useCalculator();

  // Operator-Symbol aus lateinischer Map
  const opSymbol = operation === 'ADDERE' ? OperationSymbols.ADD
    : operation === 'SUBTRAHERE' ? OperationSymbols.SUBTRACT
    : operation === 'MULTIPLICARE' ? OperationSymbols.MULTIPLY
    : operation === 'DIVIDERE' ? OperationSymbols.DIVIDE
    : '';

  // Zusammensetzen der Formel
  const formula = `${operand1 || ''} ${opSymbol || ''} ${operand2 || ''}`.trim();

  // Fehlermeldung bestimmen
  const errorMessage = error ? ErrorMessages[error as keyof typeof ErrorMessages] || error : null;

  return (
    <div
      className="calculation-display"
      aria-live="polite"
      aria-atomic="true"
      role="status"
    >
      {errorMessage ? (
        <span className="error">{errorMessage}</span>
      ) : (
        <>
          <span className="formula">{formula}</span>
          {result && (
            <>
              {' '}
              <span className="equals">{LatinTexts.EQUALS_SIGN}</span>{' '}
              <span className="result">{result}</span>
            </>
          )}
        </>
      )}
    </div>
  );
};
