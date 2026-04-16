import React, { useEffect } from 'react';
import { LatinTexts } from '@constants/latinTexts';
import { useCalculator } from '@hooks/useCalculator';
import { Logger } from '@services/logging';

/**
 * ClearButtons Component
 * CLEAR, CLEAR ENTRY und HISTORIA Buttons
 * Escape-Taste löscht den aktuellen Eingabewert
 * Layout gemäß Wireframe: [CLEAR] [CLEAR ENTRY] [HISTORIA]
 */
export const ClearButtons: React.FC = () => {
  const { clearAll, clearEntry, toggleHistory, showHistory } = useCalculator();

  // Escape-Taste löscht den aktuellen Eingabewert (wie CLEAR ENTRY)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        clearEntry();
        Logger.logInfo('CLEAR_ACTION', 'CLEAR ENTRY via Escape');
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [clearEntry]);

  return (
    <div className="action-buttons-bar">
      <button
        type="button"
        className="action-button action-button-clear"
        onClick={clearAll}
        aria-label={LatinTexts.ARIA_CLEAR}
      >
        {LatinTexts.BUTTON_CLEAR}
      </button>
      <button
        type="button"
        className="action-button action-button-clear-entry"
        onClick={clearEntry}
        aria-label={LatinTexts.ARIA_CLEAR_ENTRY}
      >
        {LatinTexts.BUTTON_CLEAR_ENTRY}
      </button>
      <button
        type="button"
        className="action-button action-button-history"
        onClick={toggleHistory}
        aria-label={LatinTexts.ARIA_HISTORY}
        aria-pressed={showHistory}
      >
        {LatinTexts.BUTTON_HISTORY}
      </button>
    </div>
  );
};
