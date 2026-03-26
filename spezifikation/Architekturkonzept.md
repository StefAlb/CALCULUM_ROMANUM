# Prompt: Roman Numeral Calculator Desktop App – Architekturkonzept erstellen

## Kontext
Der Benutzer erwartet eine Desktop-Anwendung für einen römischen Rechner ("CALCULUM ROMANUM"). Die funktionalen Anforderungen sind in User-Story-Markdown-Dateien unter `spezifikation/userStories/` dokumentiert.

**Aufgabe:** Erstelle ein vollständiges Architekturkonzept als Markdown-Dokument und speichere es unter `spezifikation/Architekturkonzept.md`.

---

## 1. User Stories (Anforderungen)

### 01_grundlegende_eingabe
- Römische Zahleneingabe mit Validierung
- Case-insensitive (I/i, V/v, etc.)
- Maximale Länge: 15 Zeichen
- Echtzeit-Feedback bei Fehlern
- ARIA-Unterstützung für Accessibility
- Logging aller Eingaben

### 02_auswahl_rechenart
- Vier Operations-Buttons: ADDERE, SUBTRAHERE, MULTIPLICARE, DIVIDERE
- State-Management für ausgewählte Operation
- Tastaturnavigation
- ARIA-Unterstützung
- Logging der Operationenauswahl

### 03_durchfuehrung_berechnung
- CALCULARE-Button zur Ausführung
- Konvertierung: Römisch ↔ Arabisch
- Fehlermeldungen: ERRATA INPUT, DIVISIO PER ZERO, LIMITUM EXCESSUM
- Performance: <100 ms für Berechnung
- ARIA live region für Ergebnisse
- Logging aller Berechnungen

### 04_loeschen_eingabe
- CLEAR und CLEAR ENTRY Buttons
- Escape-Taste löscht Entry
- ARIA-Unterstützung
- Logging der Löschaktionen

### 05_anzeige_rechenweg
- Formelanzeige: "XII ET V = XVII" (lateinische Operatoren)
- Live-Update: <50 ms
- ARIA-Unterstützung
- Kein Logging außer bei Fehlern
- Nur finales römisches Ergebnis anzeigen (keine Zwischenschritte)

### 06_fenster_ui_design
- Desktop-App Titel: "CALCULUM ROMANUM"
- Lateinische UI (alle sichtbaren Texte)
- Minimale Fenstergröße: 800×600
- WCAG 2.1 AA Kontrastverhältnisse
- Fokus-Indikatoren
- Initial Render: <200 ms
- Logging

### 07_historie_berechnungen
- In-Memory-Historie (letzte 10 Berechnungen)
- HISTORIA-Button
- Tastaturnavigation
- ARIA-Unterstützung
- Load: <100 ms
- **Keine Persistenz** nach App-Schließung

---

## 2. Technische Entscheidungen (Protokoll)

| # | Entscheidung | Begründung |
|---|--------------|------------|
| 1 | **Tauri (Webview) für cross-platform Desktop** | Kleines Bundle, geringer RAM, nutzt bestehenden Web-Stack, passt in VS-Code-Workflow |
| 2 | **Input Validation = PreventDefault + visuelles Feedback** | Garantiert keine illegalen Zeichen, gibt gleichzeitig UI-Feedback für bestehende Fehler |
| 3 | **Logging = Console + optional Datei (via `tauri-plugin-log` im Dev-Modus)** | Günstig für Entwickler, kein UI-Overhead, erfüllt Spezifikation |
| 4 | **Styling = Custom CSS mit Variablen (kein schweres Framework)** | Volle Kontrolle über "römisch-antiken" Look, minimaler Size, einfache WCAG-Compliance |
| 5 | **E2E Testing = Playwright** | Cross-platform, unterstützt Accessibility-Checks, kann Tauri-Apps steuern |

---

## 3. Klärungen vom Benutzer

| Frage | Antwort |
|-------|---------|
| **Plattform** | Cross-platform oder Web – einfachere Lösung bevorzugt, Entwicklung in VS-Code/Theia |
| **History-Persistenz** | Intentional: keine Persistenz nach App-Schließung |
| **Latein UI** | **Alle** benutzer sichtbaren Texte müssen Latein sein |
| **Ungültige Zeichen-Behandlung** | Beide Optionen vergleichen und einfachere wählen (entschieden: PreventDefault) |
| **Rechenweg-Anzeige** | Nur finales römisches Ergebnis, keine Zwischenschritte der Konvertierung |
| **Logging-Ziel** | Entwickler-fokussiert – Console ist ausreichend; Datei-Logging optional im Dev-Modus |
| **Styling-Framework** | Kein spezifisches Framework; Design soll "römisch-antiquisch" wirken |
| **Testing** | E2E-Tests, die die Akzeptanzkriterien abdecken, sind ausreichend |

---

## 4. Erwarteter Output: Architekturkonzept

Das Architekturkonzept muss folgende Abschnitte enthalten:

### 4.1 System-Übersicht & Komponenten-Verantwortlichkeiten
- Beschreibung aller Hauptkomponenten
- Verantwortlichkeiten jeder Komponente
- Beziehungen zwischen Komponenten

### 4.2 Datenfluss
- Textuelle Beschreibung des Datenflusses
- **Mermaid-Diagramm** mit folgendem Flow:
  ```
  UI → State-Manager → Validation → Conversion Service ↔ Arithmetic Engine → History Service → UI
  ```

### 4.3 Empfohlener Tech Stack
- **Frontend:** React + TypeScript
- **Desktop-Framework:** Tauri (Rust Backend + WebView)
- **State Management:** (z.B. Zustand, Redux, oder React Context)
- **Styling:** Custom CSS mit CSS Variables
- **Logging:** `tauri-plugin-log` (Dev) + Console
- **Testing:** Playwright für E2E
- **Build Tool:** Vite oder ähnliches

### 4.4 Interface-Definitionen
- Component Props für alle UI-Komponenten
- Events (Custom Events oder Callbacks)
- API zwischen UI und Conversion-Logik
- Service-Interfaces (Validation, Conversion, History, Logging)

### 4.5 Herausforderungen & Lösungen
- **Input Validation:** PreventDefault + visuelle Feedback-Mechanismen
- **State Management:** Single Source of Truth für Eingabe, Operation, Ergebnis
- **ARIA/Accessibility:** Live regions, focus management, keyboard navigation
- **Performance Constraints:** <100 ms Berechnung, <50 ms Live-Update, <200 ms Initial Render
- **Latein UI:** Zentrale Text-Management-Strategie (z.B. i18n-ähnlich mit nur einer "Locale")

### 4.6 Projekt-Ordnerstruktur
Vorschlag für Verzeichnislayout, z.B.:
```
project-root/
├── src/
│   ├── main/              # Tauri Rust Backend
│   ├── renderer/          # React/TS Frontend
│   │   ├── components/    # UI Components
│   │   ├── services/      # Validation, Conversion, History, Logging
│   │   ├── hooks/         # Custom React Hooks
│   │   ├── styles/        # CSS Files & Variables
│   │   └── types/         # TypeScript Interfaces/Types
│   └── common/            # Shared utilities, constants
├── tests/
│   └── e2e/               # Playwright Tests
├── assets/                # Images, Fonts, etc.
├── spezifikation/
│   ├── userStories/       # User Story Files
│   └── Architekturkonzept.md  # ← ZIELDATEI
└── ... (config files)
```

---

## 5. Anforderungen an das Architekturkonzept

1. **Referenziere exakte Dateipfade** für UI-Texte, Logging-Format, und Testfälle
2. **Jede Akzeptanzkriterium** aus den 7 User Stories muss einem Component oder Service im Konzept zugeordnet werden können
3. **Mermaid-Diagramm** muss den vollständigen Datenfluss visualisieren
4. **Lateinische Texte** müssen durchgängig berücksichtigt werden (keine englischen UI-Texte)
5. **Keine Persistenz** der Historie muss im Design klar dokumentiert sein
6. **Performance-Constraints** müssen in der Architektur adressiert werden

---

## 6. Ausgabe

- **Dateipfad:** `spezifikation/Architekturkonzept.md`
- **Format:** Markdown
- **Inhalt:** Vollständiges Architekturkonzept gemäß obiger Struktur

---

## 7. Hinweis für den Agenten

- Nutze die technischen Entscheidungen aus Abschnitt 3 als Constraints
- Stelle sicher, dass alle User-Story-Dateien unter `spezifikation/userStories/` berücksichtigt werden
- Das Architekturkonzept muss implementierungsreif sein (nicht zu abstrakt)
- Dokumentiere alle Annahmen explizit
