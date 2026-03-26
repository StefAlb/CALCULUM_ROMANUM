import React from 'react';
import { LatinTexts } from '@constants/latinTexts';
import { useHistory } from '@hooks/useHistory';

/**
 * HistoryPanel Component
 * Zeigt die letzten 10 Berechnungen an (In-Memory-Historie)
 * Nutzt den Zustand-Store für State-Management
 */
export const HistoryPanel: React.FC = () => {
  const { entries, isEmpty, showHistory, loadEntry, toggle } = useHistory();

  return (
    <div className="history-panel">
      <button
        type="button"
        className="history-toggle"
        onClick={toggle}
        aria-label={LatinTexts.ARIA_HISTORY}
        aria-expanded={showHistory}
      >
        {LatinTexts.BUTTON_HISTORY}
      </button>

      {showHistory && (
        <div className="history-list" role="list" aria-label={LatinTexts.HISTORY_TITLE}>
          {isEmpty ? (
            <p className="empty">{LatinTexts.HISTORY_EMPTY}</p>
          ) : (
            entries.map((e, idx) => (
              <div
                key={idx}
                role="listitem"
                tabIndex={0}
                className="history-item"
                onClick={() => loadEntry(e)}
                onKeyDown={(ev) => {
                  if (ev.key === 'Enter' || ev.key === ' ') {
                    ev.preventDefault();
                    loadEntry(e);
                  }
                }}
              >
                {`${e.operand1} ${e.operation} ${e.operand2} = ${e.result}`}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};
