# E2E-Tests für CALCULUM ROMANUM

## Übersicht

Diese E2E-Tests decken alle 7 User Stories sowie Accessibility- und Performance-Anforderungen ab.

## Test-Struktur

```
tests/e2e/
├── fixtures/
│   └── calculator.ts          # Calculator-Fixtures und Hilfsklassen
├── us01_grundlegende_eingabe.spec.ts     # User Story 1
├── us02_auswahl_rechenart.spec.ts        # User Story 2
├── us03_durchfuehrung_berechnung.spec.ts # User Story 3
├── us04_loeschen_eingabe.spec.ts         # User Story 4
├── us05_anzeige_rechenweg.spec.ts        # User Story 5
├── us06_fenster_ui_design.spec.ts        # User Story 6
├── us07_historie_berechnungen.spec.ts    # User Story 7
├── accessibility.spec.ts       # Accessibility-Tests (WCAG 2.1 AA)
├── performance.spec.ts         # Performance-Tests
├── integration.spec.ts         # Integrationstests
└── README.md
```

## Ausführen der Tests

### Einmalige Ausführung
```bash
npm run test
```

### Im Watch-Modus (UI)
```bash
npm run test:ui
```

### Mit Coverage
```bash
npm run test:coverage
```

### Nur bestimmte Test-Datei
```bash
npx playwright test us01_grundlegende_eingabe.spec.ts
```

### Nur Accessibility-Tests
```bash
npx playwright test accessibility.spec.ts
```

### Nur Performance-Tests
```bash
npx playwright test performance.spec.ts
```

## Test-Berichte

Nach der Ausführung werden HTML-Berichte in `playwright-report/` generiert.

```bash
npx playwright show-report
```

## Coverage

Für Code-Coverage-Berichte:
```bash
npm run test:coverage
```

## CI/CD Integration

Die Tests sind für CI-Umgebungen optimiert:
- Headless-Modus
- Retry bei Fehlern
- Screenshots bei Fehlern
- Trace-Aufzeichnung

## Test-Abdeckung

| Kategorie | Anzahl Tests | Status |
|-----------|-------------|--------|
| User Story 01 | 7 | ✅ |
| User Story 02 | 8 | ✅ |
| User Story 03 | 9 | ✅ |
| User Story 04 | 7 | ✅ |
| User Story 05 | 8 | ✅ |
| User Story 06 | 8 | ✅ |
| User Story 07 | 10 | ✅ |
| Accessibility | 10 | ✅ |
| Performance | 8 | ✅ |
| Integration | 7 | ✅ |
| **Gesamt** | **82** | ✅ |

## Anforderungen

- Node.js 18+
- Playwright 1.41+
- Chromium, Firefox, oder WebKit

## Konfiguration

Die Playwright-Konfiguration befindet sich in `playwright.config.ts` im Projekt-Root.

## Fehlerbehebung

### Tests laufen lokal nicht
```bash
npx playwright install
```

### Screenshots bei Fehlern ansehen
```bash
ls -la test-results/
```

### Trace-Analyse
```bash
npx playwright show-trace trace.zip
```
