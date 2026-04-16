import React from 'react';
import { LatinTexts } from '@constants/latinTexts';
import { useCalculator } from '@hooks/useCalculator';

/**
 * CalculateButton Component
 * "CALCULARE"-Button, löst die Berechnung aus
 * Hervorgehobenes Design, deaktiviert wenn keine Berechnung möglich
 */
export const CalculateButton: React.FC = () => {
  const { canCalculate, calculate } = useCalculator();

  return (
    <div className="calculate-button-container">
      <button
        type="button"
        className="calculate-button"
        disabled={!canCalculate}
        aria-label={LatinTexts.ARIA_CALCULATE}
        onClick={calculate}
      >
        {LatinTexts.BUTTON_CALCULATE}
      </button>
    </div>
  );
};
