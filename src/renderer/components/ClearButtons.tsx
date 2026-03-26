import React, { useEffect } from 'react';
import { LatinTexts } from '@constants/latinTexts';
import { useCalculator } from '@hooks/useCalculator';
import { Logger } from '@services/logging';

/**
 * ClearButtons Component
 * CLEAR- und CLEAR ENTRY-Buttons + Escape-Key-Handler
 * Nutzt den Zustand-Store für State-Management
 */
export const ClearButtons: React.FC = () => {
  const { clearAll, clearEntry } = useCalculator();

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
    <div className="clear-buttons">
      <button
        type="button"
        className="clear-button"
        onClick={clearAll}
        aria-label={LatinTexts.ARIA_CLEAR}
      >
        {LatinTexts.BUTTON_CLEAR}
      </button>
      <button
        type="button"
        className="clear-entry-button"
        onClick={clearEntry}
        aria-label={LatinTexts.ARIA_CLEAR_ENTRY}
      >
        {LatinTexts.BUTTON_CLEAR_ENTRY}
      </button>
    </div>
  );
};
