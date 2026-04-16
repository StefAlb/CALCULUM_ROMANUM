import React from 'react';
import { LatinTexts } from '@constants/latinTexts';
import { useCalculator } from '@hooks/useCalculator';

/**
 * OperationSelector Component
 * Vier Operation-Buttons (ADDERE, SUBTRAHERE, MULTIPLICARE, DIVIDERE)
 * Toggle-Verhalten: Nur eine Operation gleichzeitig aktiv
 * Layout: 4 Spalten in einer Reihe
 */
export const OperationSelector: React.FC = () => {
  const { operation, setOperation } = useCalculator();

  const operations: { key: string; label: string }[] = [
    { key: 'ADDERE', label: LatinTexts.OPERATION_ADD },
    { key: 'SUBTRAHERE', label: LatinTexts.OPERATION_SUBTRACT },
    { key: 'MULTIPLICARE', label: LatinTexts.OPERATION_MULTIPLY },
    { key: 'DIVIDERE', label: LatinTexts.OPERATION_DIVIDE },
  ];

  return (
    <div className="operation-buttons-grid" role="group" aria-label={LatinTexts.ARIA_OPERATION_BUTTON}>
      {operations.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          className={`operation-button ${operation === key ? 'op-selected' : ''}`}
          aria-pressed={operation === key}
          onClick={() => setOperation(key as any)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
