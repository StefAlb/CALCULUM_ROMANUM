import React from 'react';
import { LatinTexts } from '@constants/latinTexts';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>{LatinTexts.TITLE}</h1>
      </header>
      <main className="app-main">
        <p className="placeholder-text">
          {LatinTexts.APP_DESCRIPTION}
        </p>
      </main>
      <footer className="app-footer">
        <p>{LatinTexts.FOOTER_TEXT}</p>
      </footer>
    </div>
  );
};

export default App;
