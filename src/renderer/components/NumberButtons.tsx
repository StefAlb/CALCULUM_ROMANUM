import React from 'react';
import { LatinTexts } from '@constants/latinTexts';
import { useCalculator } from '@hooks/useCalculator';

/**
 * NumberButtons Component
 * Grid mit Ziffern-Buttons (I, V, X, L, C, D, M)
 * Layout gemäß Wireframe: 4 Spalten × 3 Reihen
 * Jeder Button hat die römische Ziffer und den lateinischen Namen darunter
 */

interface NumberButtonConfig {
  digit: string;
  latinLabel: string;
}

const numberButtons: NumberButtonConfig[] = [
  { digit: 'I', latinLabel: LatinTexts.LABEL_ADDERE },
  { digit: 'V', latinLabel: LatinTexts.LABEL_SUBTRAHERE },
  { digit: 'X', latinLabel: LatinTexts.LABEL_MULTIPLICARE },
  { digit: 'L', latinLabel: LatinTexts.LABEL_DIVIDERE },
  { digit: 'C', latinLabel: LatinTexts.LABEL_ADDERE },
  { digit: 'D', latinLabel: LatinTexts.LABEL_SUBTRAHERE },
  { digit: 'M', latinLabel: LatinTexts.LABEL_MULTIPLICARE },
];

export const NumberButtons: React.FC = () => {
  const { currentValue, setCurrentValue } = useCalculator();

  const handleDigitClick = (digit: string) => {
    setCurrentValue(currentValue + digit);
  };

  return (
    <div className="number-buttons-grid" role="group" aria-label={LatinTexts.ARIA_NUMBER_BUTTONS}>
      {numberButtons.map(({ digit, latinLabel }) => (
        <button
          key={digit}
          type="button"
          className="number-button"
          onClick={() => handleDigitClick(digit)}
          aria-label={`${digit} - ${latinLabel}`}
        >
          <span className="roman-digit">{digit}</span>
          <span className="latin-label">{latinLabel}</span>
        </button>
      ))}
      {/* Leere Platzhalter-Buttons für Grid-Symmetrie (4 Spalten × 3 Reihen = 12 Buttons) */}
      <button
        type="button"
        className="number-button number-button-placeholder"
        disabled
        aria-label={LatinTexts.ARIA_EMPTY}
      />
      <button
        type="button"
        className="number-button number-button-placeholder"
        disabled
        aria-label={LatinTexts.ARIA_EMPTY}
      />
      <button
        type="button"
        className="number-button number-button-placeholder"
        disabled
        aria-label={LatinTexts.ARIA_EMPTY}
      />
    </div>
  );
};
