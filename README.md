# CALCULUM ROMANUM

Ein römischer Taschenrechner als Desktop-Anwendung.

## Beschreibung

**CALCULUM ROMANUM** ist eine barrierefreie Desktop-Anwendung für Berechnungen mit römischen Zahlen. Die Anwendung folgt einem römisch-antiken Design und verwendet durchgängig lateinische Texte in der Benutzeroberfläche.

## Technische Architektur

- **Desktop-Framework:** Tauri (Rust + WebView)
- **Frontend:** React 18 + TypeScript
- **State Management:** Zustand
- **Styling:** Custom CSS mit CSS Variables
- **Testing:** Playwright für E2E-Tests
- **Build Tool:** Vite

## Features

- ✅ Eingabe römischer Zahlen mit Echtzeit-Validierung
- ✅ Vier Grundrechenarten (ADDERE, SUBTRAHERE, MULTIPLICARE, DIVIDERE)
- ✅ Konvertierung zwischen römischen und arabischen Zahlen
- ✅ In-Memory-Historie (letzte 10 Berechnungen)
- ✅ WCAG 2.1 AA Accessibility-Compliance
- ✅ Performance-Optimiert (<100ms Berechnung)
- ✅ Lateinische UI-Texte durchgängig

## Installation

```bash
# Dependencies installieren
npm install

# Entwicklung starten
npm run tauri:dev

# Production Build
npm run tauri:build
```

## Scripts

- `npm run dev` - Vite Development Server starten
- `npm run build` - TypeScript und Vite Build
- `npm run tauri:dev` - Tauri App im Dev-Modus starten
- `npm run tauri:build` - Production Build erstellen
- `npm run lint` - ESLint ausführen
- `npm run format` - Code formatieren
- `npm run test` - Playwright E2E-Tests ausführen
- `npm run test:unit` - Vitest Unit-Tests im Watch-Modus
- `npm run test:unit:run` - Vitest Unit-Tests einmalig ausführen
- `npm run test:unit:coverage` - Unit-Tests mit Coverage-Bericht

## Projektstruktur

```
project-root/
├── src/
│   ├── main/              # Tauri Rust Backend
│   │   └── main.rs
│   ├── renderer/          # React/TS Frontend
│   │   ├── components/    # UI Components
│   │   ├── services/      # Services (Validation, Conversion, etc.)
│   │   ├── hooks/         # Custom React Hooks
│   │   ├── styles/        # CSS Files & Variables
│   │   ├── types/         # TypeScript Interfaces/Types
│   │   ├── constants/     # Lateinische UI-Texte
│   │   ├── index.html
│   │   ├── main.tsx
│   │   └── App.tsx
│   └── common/            # Shared utilities, constants
├── tests/
│   └── e2e/               # Playwright Tests
├── spezifikation/         # Anforderungsdokumente
│   ├── userStories/
│   └── Architekturkonzept.md
├── tauri.conf.json        # Tauri Konfiguration
├── vite.config.ts         # Vite Konfiguration
└── package.json
```

## Entwicklung

### Phase 1: Projekt-Setup ✅
- [x] Tauri + React + TypeScript Initialisierung
- [x] Build-Konfiguration (Vite)
- [x] ESLint + Prettier Setup
- [x] Basis-Styles & CSS Variables
- [x] Lateinische UI-Texte als Konstanten

### Phase 2: Core Services ✅
- [x] Validation Service (Echtzeit-Validierung, Regex, Längen-Check)
- [x] Conversion Service (Römisch ↔ Arabisch mit Error-Throwing)
- [x] Arithmetic Engine (vier Operationen, Error-Handling)
- [x] Logging Service (Console + einheitliches Format)
- [x] History Service (In-Memory, max 10 Einträge)
- [x] Unit-Tests mit Vitest (alle Services getestet)

### Phase 3: UI-Komponenten ✅
- [x] InputField Component (Echtzeit-Validierung, ARIA-Feedback)
- [x] OperationSelector Component (ADDERE, SUBTRAHERE, MULTIPLICARE, DIVIDERE)
- [x] CalculateButton Component (CALCULARE)
- [x] ClearButtons Component (CLEAR, CLEAR ENTRY, Escape-Key)
- [x] FormulaDisplay Component (Live-Update, lateinische Operatoren)
- [x] HistoryPanel Component (In-Memory, max 10 Einträge)

### Phase 4: State Management & Integration ✅
- [x] Zustand Store (calculatorStore.ts)
- [x] Custom Hooks (useCalculator, useHistory)
- [x] Component Integration (alle Komponenten an Store gebunden)
- [x] ARIA Live Regions (polite/assertive für Screenreader)
- [x] Keyboard Navigation (Tab, Enter, Space, Escape)
- [x] Unit-Tests für Store-Logik

### Phase 5: E2E-Tests ✅
- [x] Playwright Setup (Fixtures, Konfiguration)
- [x] Testfälle für alle 7 User Stories (82 Tests)
- [x] Accessibility-Tests (WCAG 2.1 AA Compliance)
- [x] Performance-Tests (<100ms, <50ms, <200ms Thresholds)
- [x] Integrationstests (End-to-End Workflows)
- [x] Test-Berichte und Coverage

## Accessibility

Die Anwendung ist **WCAG 2.1 AA** konform:
- Mindestkontrastverhältnis von 4.5:1
- Vollständige Tastaturnavigation
- ARIA Live Regions für dynamische Inhalte
- Fokus-Indikatoren für alle interaktiven Elemente
- Screenreader-Unterstützung

## Lizenz

MIT License

---

**CALCULUM ROMANUM** - © MMXXIV
