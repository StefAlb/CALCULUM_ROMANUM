import React from 'react';
import { useCalculator } from '@hooks/useCalculator';
import { LatinTexts, ErrorMessages } from '@constants/latinTexts';

/**
 * InputField Component
 * Hauptdisplay für römische Zahlen-Eingabe
 * Zeigt auch Validierungs-Status an (grün/rot)
 */
export const InputField: React.FC = () => {
  const { currentValue, validationStatus } = useCalculator();

  const isValid = validationStatus === 'VALID' || validationStatus === 'EMPTY';
  const isInvalid = validationStatus === 'INVALID';

  return (
    <div className="input-field">
      <div
        className={`main-display ${isValid ? 'valid' : ''} ${isInvalid ? 'invalid' : ''}`}
        aria-label={LatinTexts.ARIA_INPUT_FIELD}
        role="textbox"
        aria-readonly="true"
        aria-invalid={isInvalid}
      >
        {currentValue || '\u00A0'}
      </div>
      {isInvalid && (
        <div className="error-message" role="alert" aria-live="assertive">
          {ErrorMessages.INVALID_ROMAN}
        </div>
      )}
    </div>
  );
};
