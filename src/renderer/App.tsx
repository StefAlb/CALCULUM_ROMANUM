import React from 'react';
import { LatinTexts } from '@constants/latinTexts';
import { InputField } from '@components/InputField';
import { OperationSelector } from '@components/OperationSelector';
import { CalculateButton } from '@components/CalculateButton';
import { ClearButtons } from '@components/ClearButtons';
import { FormulaDisplay } from '@components/FormulaDisplay';
import { HistoryPanel } from '@components/HistoryPanel';

/**
 * Root App Component
 * Zusammenspiels aller UI-Komponenten
 * State wird vollständig über den Zustand-Store verwaltet
 */
const App: React.FC = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>{LatinTexts.TITLE}</h1>
      </header>

      <main className="app-main">
        {/* Eingabefeld für römische Zahlen */}
        <InputField />

        {/* Operations-Auswahl (ADDERE, SUBTRAHERE, etc.) */}
        <OperationSelector />

        {/* CALCULARE-Button */}
        <CalculateButton />

        {/* CLEAR-Buttons */}
        <ClearButtons />

        {/* Formel-Anzeige (live Update) */}
        <FormulaDisplay />

        {/* Historie-Panel */}
        <HistoryPanel />
      </main>

      <footer className="app-footer">
        <p>{LatinTexts.FOOTER_TEXT}</p>
      </footer>
    </div>
  );
};

export default App;
