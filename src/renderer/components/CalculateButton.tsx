import React from 'react';
import { LatinTexts } from '@constants/latinTexts';
import { useCalculator } from '@hooks/useCalculator';

/**
 * CalculateButton Component
 * "CALCULARE"-Button, löst die Berechnung aus
 * Nutzt den Zustand-Store für State-Management
 */
export const CalculateButton: React.FC = () => {
  const { canCalculate, calculate } = useCalculator();

  return (
    <button
      type="button"
      className="calc-button"
      disabled={!canCalculate}
      aria-label={LatinTexts.ARIA_CALCULATE}
      onClick={calculate}
    >
      {LatinTexts.BUTTON_CALCULATE}
    </button>
  );
};
