import React from 'react';
import { LatinTexts } from '@constants/latinTexts';
import { Operation } from '@types';
import { useCalculator } from '@hooks/useCalculator';

/**
 * OperationSelector Component
 * Vier Operation-Buttons (ADDERE, SUBTRAHERE, MULTIPLICARE, DIVIDERE)
 * Nutzt den Zustand-Store für State-Management
 */
export const OperationSelector: React.FC = () => {
  const { operation, setOperation } = useCalculator();

  const operations: { key: Operation; label: string }[] = [
    { key: 'ADDERE', label: LatinTexts.OPERATION_ADD },
    { key: 'SUBTRAHERE', label: LatinTexts.OPERATION_SUBTRACT },
    { key: 'MULTIPLICARE', label: LatinTexts.OPERATION_MULTIPLY },
    { key: 'DIVIDERE', label: LatinTexts.OPERATION_DIVIDE },
  ];

  return (
    <div role="group" aria-label={LatinTexts.ARIA_OPERATION_BUTTON} className="operation-selector">
      {operations.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          className={`op-button ${operation === key ? 'op-selected' : ''}`}
          aria-pressed={operation === key}
          onClick={() => setOperation(key)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
