import React from 'react';
import { LatinTexts } from '@constants/latinTexts';
import { useHistory } from '@hooks/useHistory';

/**
 * HistoryPanel Component
 * Zeigt die Historie-Header mit Toggle-Icon und Settings-Icon
 * Bei geöffneter Historie: Slide-Up Panel mit Einträgen und "LADEN"-Buttons
 */
export const HistoryPanel: React.FC = () => {
  const { entries, isEmpty, showHistory, loadEntry, toggle } = useHistory();

  // Konvertiert römische Zahl zu arabisch für die Anzeige
  const romanToArabic = (roman: string): number => {
    const values: { [key: string]: number } = {
      I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    };
    let total = 0;
    let prevValue = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
      const char = roman.toUpperCase();
      const value = values[char] || 0;
      if (value < prevValue) {
        total -= value;
      } else {
        total += value;
      }
      prevValue = value;
    }
    return total;
  };

  return (
    <div className="historia-header">
      <button
        type="button"
        className="historia-toggle"
        onClick={toggle}
        aria-label={LatinTexts.ARIA_HISTORY}
        aria-expanded={showHistory}
      >
        <span className="historia-label">
          {LatinTexts.BUTTON_HISTORY} <span className="toggle-icon">◐</span>
        </span>
      </button>

      <button
        type="button"
        className="settings-button"
        aria-label={LatinTexts.ARIA_SETTINGS}
        disabled
      >
        ⚙
      </button>

      {/* Historie-Panel (Slide-Up bei geöffneter Historie) */}
      {showHistory && (
        <div className="historia-panel" role="dialog" aria-label={LatinTexts.HISTORY_TITLE}>
          <div className="historia-list">
            {isEmpty ? (
              <p className="historia-empty">{LatinTexts.HISTORY_EMPTY}</p>
            ) : (
              entries.map((entry: any, idx: number) => {
                const arabicOp1 = romanToArabic(entry.operand1);
                const arabicOp2 = romanToArabic(entry.operand2);
                const arabicResult = romanToArabic(entry.result);

                return (
                  <div
                    key={`${entry.operand1}-${entry.operation}-${entry.operand2}-${idx}`}
                    className="historia-item"
                    onClick={() => loadEntry(entry)}
                    tabIndex={0}
                    role="button"
                  >
                    <div className="historia-number">{idx + 1}.</div>
                    <div className="historia-formula">
                      <div className="roman-formula">
                        {entry.operand1} {LatinTexts.FORMULA_SEPARATOR} {entry.operation === 'SUBTRAHERE' ? LatinTexts.FORMULA_MINUS : entry.operation === 'MULTIPLICARE' ? LatinTexts.FORMULA_MULTIPLY : entry.operation === 'DIVIDERE' ? LatinTexts.FORMULA_DIVIDE : LatinTexts.FORMULA_SEPARATOR} {entry.operand2} = {entry.result}
                      </div>
                      <div className="arabic-translation">
                        {arabicOp1} {entry.operation === 'SUBTRAHERE' ? 'MINUS' : 'ET'} {arabicOp2} = {arabicResult}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="load-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        loadEntry(entry);
                      }}
                      aria-label={`${LatinTexts.BUTTON_LOAD}: ${entry.operand1} ${entry.operation} ${entry.operand2}`}
                    >
                      {LatinTexts.BUTTON_LOAD}
                    </button>
                  </div>
                );
              })
            )}
          </div>
          <div className="historia-actions">
            <button
              type="button"
              className="clear-historia-button"
              onClick={() => {
                // Alle Einträge löschen - wird vom Store verwaltet
                console.log('Alle Historie-Einträge löschen');
              }}
            >
              {LatinTexts.BUTTON_CLEAR}
            </button>
            <button
              type="button"
              className="new-calculation-button"
              onClick={toggle}
            >
              {LatinTexts.STATUS_READY}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
