# Implementierungs-Roadmap: CALCULUM ROMANUM

## Dokumenten-Information
- **Version**: 1.0
- **Status**: Entwurf
- **Referenz**: UI-Konzept, Wireframes, Design System, Fehlerbehandlung

---

## 1. Projekt-Übersicht

### Ziel
Entwicklung einer Desktop-Anwendung für römische Zahlen-Berechnungen mit moderner UI, die antike Ästhetik mit zeitgenössischer Benutzerfreundlichkeit verbindet.

### Tech Stack
- **Framework**: Electron (oder Tauri für leichtere Alternative)
- **Frontend**: React 18+ mit TypeScript
- **Styling**: CSS Modules oder Tailwind CSS
- **State Management**: React Context oder Zustand
- **Testing**: Jest + React Testing Library
- **Build**: Vite oder Webpack

---

## 2. Phasen-Planung

### Phase 1: Grundgerüst und Kern-Funktionalität (Woche 1-2)

#### 1.1 Projekt-Setup
- [ ] Electron/React-Boilerplate einrichten
- [ ] TypeScript-Konfiguration
- [ ] ESLint + Prettier konfigurieren
- [ ] Git-Repository initialisieren
- [ ] Build-System (Vite/Webpack) konfigurieren

#### 1.2 Basis-Komponenten
- [ ] Hauptfenster-Layout erstellen
- [ ] Titelleiste implementieren
- [ ] Grundlegendes Grid-Layout

#### 1.3 Kern-Logik
- [ ] Römisch ↔ Arabisch Konvertierung
  - `romanToArabic(roman: string): number`
  - `arabicToRoman(number: number): string`
- [ ] Validierungs-Logik
  - `isValidRoman numeral(input: string): boolean`
  - `isWithinLimits(number: number): boolean`
- [ ] Berechnungs-Engine
  - `calculate(operand1: string, operator: string, operand2: string): string`

**Deliverables**:
- Lauffähige Basis-Anwendung
- Funktionierende Konvertierung
- Grundlegende Validierung

---

### Phase 2: UI-Komponenten (Woche 3-4)

#### 2.1 Display-Komponenten
- [ ] Hauptdisplay (MainDisplay)
  - Große römische Zahlen-Anzeige
  - Validierungs-Feedback (grün/rot)
  - ARIA-Labels
- [ ] Rechenweg-Anzeige (CalculationDisplay)
  - Dynamische Formelanzeige
  - Live-Updates

#### 2.2 Eingabe-Komponenten
- [ ] Ziffern-Buttons (NumberButtons)
  - I, V, X, L, C, D, M
  - Lateinische Sub-Labels
  - Hover/Active/Focus States
- [ ] Eingabe-Handling
  - Tastatureingabe (A-Z, case-insensitive)
  - Copy-Paste-Validierung
  - Längenlimit (15 Zeichen)

#### 2.3 Operations-Komponenten
- [ ] Operations-Buttons (OperationButtons)
  - ADDERE, SUBTRAHERE, MULTIPLICARE, DIVIDERE
  - Toggle-Verhalten (nur eine aktiv)
  - Visuelles Feedback (aria-pressed)

#### 2.4 Action-Komponenten
- [ ] Action-Buttons
  - CLEAR (vollständiges Reset)
  - CLEAR ENTRY (nur aktuelle Eingabe)
  - CALCULARE (Berechnung auslösen)
  - HISTORIA (Toggle Historie)

**Deliverables**:
- Vollständige UI mit allen Komponenten
- Interaktive Buttons
- Funktionierende Eingabe

---

### Phase 3: Fehlerbehandlung und Feedback (Woche 5)

#### 3.1 Validierungs-Feedback
- [ ] Echtzeit-Validierung
- [ ] Visuelles Feedback (rote Umrandung, Pulsieren)
- [ ] Fehlermeldungen (lateinisch)
- [ ] Auto-Reset nach Fehler

#### 3.2 Berechnungs-Fehler
- [ ] Division durch Null
- [ ] Limit-Überschreitung (> 3999)
- [ ] Unvollständige Eingabe
- [ ] Fehler-Display im Hauptdisplay

#### 3.3 Accessibility
- [ ] ARIA-Labels für alle Komponenten
- [ ] aria-live regions für dynamische Inhalte
- [ ] Keyboard-Navigation (Tab, Enter, Escape)
- [ ] Fokus-Management

**Deliverables**:
- Robuste Fehlerbehandlung
- Vollständige Accessibility
- Screenreader-Kompatibilität

---

### Phase 4: Historie und erweiterte Funktionen (Woche 6)

#### 4.1 Historie-Panel
- [ ] Historie-Liste (letzte 10 Einträge)
- [ ] Toggle-Verhalten (öffnen/schließen)
- [ ] Klick zum Laden einer Berechnung
- [ ] Keyboard-Navigation (Pfeiltasten)

#### 4.2 Animationen
- [ ] Button-Press-Animation
- [ ] Panel-Slide-Animation
- [ ] Fehler-Pulsieren
- [ ] Erfolg-Flash

#### 4.3 Responsive Design
- [ ] Tablet-Ansicht (600-799px)
- [ ] Mobile-Ansicht (< 600px)
- [ ] Breakpoint-Testing

**Deliverables**:
- Funktionierende Historie
- Polierte Animationen
- Responsive Layout

---

### Phase 5: Testing und Optimierung (Woche 7-8)

#### 5.1 Unit-Tests
- [ ] Konvertierungs-Tests
  - Alle gültigen römischen Zahlen
  - Grenzfälle (1, 3999, ungültig)
- [ ] Berechnungs-Tests
  - Alle vier Operationen
  - Fehlerfälle
- [ ] Validierungs-Tests
  - Gültige Eingaben
  - Ungültige Eingaben

#### 5.2 Integration-Tests
- [ ] Vollständige Berechnungs-Flows
- [ ] Fehler-Handling-Flows
- [ ] Historie-Flows

#### 5.3 E2E-Tests
- [ ] User-Journeys mit Cypress/Playwright
- [ ] Keyboard-Navigation-Tests
- [ ] Accessibility-Tests (axe-core)

#### 5.4 Performance-Optimierung
- [ ] Ladezeit messen und optimieren (< 200ms Initial Rendering)
- [ ] Berechnungszeit optimieren (< 100ms)
- [ ] Bundle-Größe optimieren

**Deliverables**:
- 90%+ Test-Abdeckung
- Alle Tests grün
- Performance-Ziele erreicht

---

### Phase 6: Polish und Release (Woche 9-10)

#### 6.1 UI/UX Polish
- [ ] Feinabstimmung der Farben
- [ ] Animation-Timings optimieren
- [ ] Hover-States verfeinern
- [ ] Fokus-Indikatoren prüfen

#### 6.2 Documentation
- [ ] README.md erstellen
- [ ] Benutzeranleitung (kurz)
- [ ] Developer-Dokumentation
- [ ] API-Dokumentation (falls relevant)

#### 6.3 Build und Deployment
- [ ] Windows-Executable erstellen (.exe)
- [ ] Installer konfigurieren (optional)
- [ ] Code-Signing (falls erforderlich)
- [ ] Release-Notes erstellen

#### 6.4 Final Testing
- [ ] Cross-Browser-Testing (Electron-Chromium)
- [ ] Windows 10/11 Testing
- [ ] Accessibility-Audit
- [ ] User-Acceptance-Testing (UAT)

**Deliverables**:
- Release-Ready Application
- Windows Executable
- Vollständige Dokumentation

---

## 3. Komponenten-Hierarchie

```
App/
├── Layout/
│   ├── WindowFrame (Hauptfenster)
│   ├── TitleBar
│   └── MainContainer
│
├── Display/
│   ├── CalculationDisplay (Rechenweg)
│   │   └── FormulaText
│   ├── MainDisplay (Hauptanzeige)
│   │   └── RomanText
│   └── ErrorBanner (Fehlermeldungen)
│
├── Controls/
│   ├── ActionButtons
│   │   ├── ClearButton
│   │   ├── ClearEntryButton
│   │   └── HistoriaButton
│   ├── NumberButtons
│   │   ├── NumberButton (I, V, X, L, C, D, M)
│   │   └── ButtonLabel
│   └── OperationButtons
│       ├── OperationButton (ADDERE, SUBTRAHERE, etc.)
│       └── OperationIndicator
│
├── History/
│   ├── HistoryPanel
│   │   ├── HistoryHeader
│   │   ├── HistoryList
│   │   │   └── HistoryItem[]
│   │   └── HistoryFooter
│   └── HistoryToggle
│
└── Feedback/
    ├── StatusBar
    └── LoadingIndicator
```

---

## 4. State-Management

### Haupt-State
```typescript
interface CalculatorState {
  // Eingabe
  currentInput: string;        // Aktuelle Eingabe (römisch)
  firstOperand: string | null; // Erster Operand (römisch)
  
  // Operation
  operation: Operation | null; // Gewählte Operation
  enum Operation = 'ADDERE' | 'SUBTRAHERE' | 'MULTIPLICARE' | 'DIVIDERE';
  
  // Ergebnis
  result: string | null;       // Ergebnis (römisch oder Fehler)
  isError: boolean;            // Fehler-Status
  
  // Historie
  history: Calculation[];      // Letzte 10 Berechnungen
  showHistory: boolean;        // Historie sichtbar?
  
  // UI-Status
  isValid: boolean;            // Aktuelle Eingabe gültig?
  errorMessage: string | null; // Fehlermeldung (falls vorhanden)
}

interface Calculation {
  id: string;
  operand1: string;
  operator: Operation;
  operand2: string;
  result: string;
  timestamp: Date;
}
```

### State-Actions
```typescript
type CalculatorAction =
  | { type: 'SET_INPUT'; payload: string }
  | { type: 'SET_OPERATION'; payload: Operation }
  | { type: 'CLEAR_ENTRY' }
  | { type: 'CLEAR_ALL' }
  | { type: 'CALCULATE' }
  | { type: 'LOAD_HISTORY'; payload: Calculation }
  | { type: 'TOGGLE_HISTORY' }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'CLEAR_ERROR' };
```

---

## 5. API-Schnittstellen (Intern)

### Konvertierung
```typescript
// Konvertiert römische Zahl zu arabischer Zahl
function romanToArabic(roman: string): number;

// Konvertiert arabische Zahl zu römischer Zahl
function arabicToRoman(number: number): string;

// Validiert römische Zahl
function isValidRoman(roman: string): boolean;

// Prüft Format (nur Zeichen)
function isValidFormat(input: string): boolean;

// Prüft syntaktische Korrektheit
function isSyntacticallyValid(roman: string): boolean;
```

### Berechnung
```typescript
// Führt Berechnung durch
function calculate(
  operand1: string,
  operation: Operation,
  operand2: string
): CalculationResult;

type CalculationResult =
  | { success: true; result: string }
  | { success: false; error: 'DIVISION_BY_ZERO' | 'LIMIT_EXCEEDED' | 'INVALID_INPUT' };
```

### Validierung
```typescript
// Prüfe Eingabe auf Gültigkeit
function validateInput(input: string): ValidationResult;

type ValidationResult =
  | { valid: true }
  | { valid: false; error: 'INVALID_CHAR' | 'INVALID_ROMAN' | 'TOO_LONG' };
```

---

## 6. Test-Strategie

### Unit-Tests
```typescript
// Konvertierungstests
describe('romanToArabic', () => {
  test('I → 1', () => { expect(romanToArabic('I')).toBe(1); });
  test('V → 5', () => { expect(romanToArabic('V')).toBe(5); });
  test('XII → 12', () => { expect(romanToArabic('XII')).toBe(12); });
  test('MCMXCIV → 1994', () => { expect(romanToArabic('MCMXCIV')).toBe(1994); });
});

describe('arabicToRoman', () => {
  test('1 → I', () => { expect(arabicToRoman(1)).toBe('I'); });
  test('5 → V', () => { expect(arabicToRoman(5)).toBe('V'); });
  test('12 → XII', () => { expect(arabicToRoman(12)).toBe('XII'); });
  test('1994 → MCMXCIV', () => { expect(arabicToRoman(1994)).toBe('MCMXCIV'); });
});

// Berechnungstests
describe('calculate', () => {
  test('XII + V = XVII', () => {
    const result = calculate('XII', 'ADDERE', 'V');
    expect(result).toEqual({ success: true, result: 'XVII' });
  });
  
  test('XV / III = V', () => {
    const result = calculate('XV', 'DIVIDERE', 'III');
    expect(result).toEqual({ success: true, result: 'V' });
  });
  
  test('Division durch Null', () => {
    const result = calculate('XV', 'DIVIDERE', 'NULLUM');
    expect(result).toEqual({ success: false, error: 'DIVISION_BY_ZERO' });
  });
});
```

### Integration-Tests
```typescript
describe('Vollständige Berechnung', () => {
  test('XII + V = XVII (End-to-End)', async () => {
    // Eingabe erster Operand
    await userEvent.type(screen.getByRole('textbox'), 'XII');
    
    // Operation wählen
    await userEvent.click(screen.getByRole('button', { name: 'ADDERE' }));
    
    // Eingabe zweiter Operand
    await userEvent.type(screen.getByRole('textbox'), 'V');
    
    // Berechnung auslösen
    await userEvent.click(screen.getByRole('button', { name: 'CALCULARE' }));
    
    // Ergebnis prüfen
    expect(screen.getByText('XVII')).toBeInTheDocument();
  });
});
```

### Accessibility-Tests
```typescript
describe('Accessibility', () => {
  test('Alle Buttons haben ARIA-Labels', () => {
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button).toHaveAttribute('aria-label');
    });
  });
  
  test('Fehlermeldungen sind für Screenreader lesbar', () => {
    const errorBanner = screen.getByRole('alert');
    expect(errorBanner).toHaveAttribute('aria-live', 'assertive');
  });
  
  test('Keyboard-Navigation funktioniert', async () => {
    await userEvent.tab();
    expect(screen.getByRole('textbox')).toHaveFocus();
    
    await userEvent.tab();
    expect(screen.getByRole('button')).toHaveFocus();
  });
});
```

---

## 7. Performance-Budget

### Ladezeiten
```
Initial Rendering:     < 200ms
Bundle Size (gzip):    < 500KB
First Contentful Paint: < 1s
Time to Interactive:   < 2s
```

### Runtime-Performance
```
Berechnung:            < 100ms
Display-Update:        < 50ms
Validierung:           < 50ms
Historie-Laden:        < 100ms
Animation-Frame:       < 16ms (60fps)
```

### Memory-Budget
```
Max Memory Usage:      < 100MB
Historie-Speicher:     < 1MB (10 Einträge)
```

---

## 8. Risikomanagement

### Technische Risiken
| Risiko | Wahrscheinlichkeit | Auswirkung | Gegenmaßnahme |
|--------|-------------------|------------|---------------|
| Electron-Bloat | Mittel | Mittel | Tauri als Alternative evaluieren |
| Performance-Probleme | Niedrig | Mittel | Performance-Testing früh beginnen |
| Accessibility-Lücken | Mittel | Hoch | Regelmäßige Accessibility-Audits |
| Cross-Platform-Probleme | Niedrig | Mittel | Früh auf Windows testen |

### Projektrisiken
| Risiko | Wahrscheinlichkeit | Auswirkung | Gegenmaßnahme |
|--------|-------------------|------------|---------------|
| Scope Creep | Mittel | Hoch | Strict Requirements Management |
| Zeitüberschreitung | Mittel | Hoch | Puffer einplanen, MVP-first |
| Unklare Anforderungen | Niedrig | Mittel | Regelmäßige Reviews |

---

## 9. Meilensteine

### M1: Grundgerüst (Ende Woche 2)
- [ ] Lauffähige Basis-Anwendung
- [ ] Konvertierung funktioniert
- [ ] Grundlegendes UI

### M2: Vollständige UI (Ende Woche 4)
- [ ] Alle Komponenten implementiert
- [ ] Interaktive Buttons
- [ ] Eingabe-Handling

### M3: Fehlerbehandlung (Ende Woche 5)
- [ ] Alle Fehlerfälle abgedeckt
- [ ] Accessibility vollständig
- [ ] Keyboard-Navigation

### M4: Historie (Ende Woche 6)
- [ ] Historie-Funktionalität
- [ ] Animationen
- [ ] Responsive Design

### M5: Testing (Ende Woche 8)
- [ ] 90%+ Test-Abdeckung
- [ ] Alle Tests grün
- [ ] Performance-Ziele erreicht

### M6: Release (Ende Woche 10)
- [ ] Windows Executable
- [ ] Dokumentation
- [ ] User-Acceptance-Testing

---

## 10. Next Steps (Sofort)

### Woche 1 - Start
1. **Tag 1-2**: Projekt-Setup
   - Repository erstellen
   - Electron/React Boilerplate
   - TypeScript konfigurieren

2. **Tag 3-5**: Kern-Logik
   - Konvertierungs-Funktionen
   - Validierungs-Logik
   - Unit-Tests für Logik

3. **Tag 6-7**: Basis-UI
   - Hauptfenster
   - Grundlegendes Layout
   - Titelleiste

### Unmittelbare Aufgaben
- [ ] Tech Stack finalisieren (Electron vs. Tauri)
- [ ] Repository einrichten
- [ ] Development-Umgebung konfigurieren
- [ ] Erste Commit-Strategie definieren

---

**Ende der Implementierungs-Roadmap**
