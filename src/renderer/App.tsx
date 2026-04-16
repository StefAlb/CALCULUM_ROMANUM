import React from 'react';
import { LatinTexts } from '@constants/latinTexts';
import { InputField } from '@components/InputField';
import { OperationSelector } from '@components/OperationSelector';
import { CalculateButton } from '@components/CalculateButton';
import { ClearButtons } from '@components/ClearButtons';
import { FormulaDisplay } from '@components/FormulaDisplay';
import { HistoryPanel } from '@components/HistoryPanel';
import { NumberButtons } from '@components/NumberButtons';

/**
 * Root App Component
 * Modernes UI-Layout gemäß UI-Spezifikation (Wireframes 02_wireframes.md)
 * Struktur: Header -> Historia Header -> Main Panel (Formula, Display, Action Buttons, Number Grid, Operations, Calculate)
 */
const App: React.FC = () => {
  return (
    <div className="app-container">
      {/* Titelleiste */}
      <header className="app-header">
        <h1>{LatinTexts.TITLE}</h1>
      </header>

      {/* Historia Header (Toggle + Settings) */}
      <HistoryPanel />

      {/* Hauptbereich */}
      <main className="app-main">
        <div className="main-panel">
          {/* Rechenweg-Anzeige (über dem Hauptdisplay) */}
          <FormulaDisplay />

          {/* Hauptdisplay - große römische Zahlen-Anzeige */}
          <InputField />

          {/* Action Buttons (CLEAR, CLEAR ENTRY, HISTORIA) */}
          <ClearButtons />

          {/* Ziffern-Buttons Grid (I, V, X, L, C, D, M) */}
          <NumberButtons />

          {/* Operation Buttons (ADDERE, SUBTRAHERE, MULTIPLICARE, DIVIDERE) */}
          <OperationSelector />

          {/* CALCULARE Button */}
          <CalculateButton />
        </div>
      </main>
    </div>
  );
};

export default App;
