# UI-Konzept: CALCULUM ROMANUM

## Überblick

Dieses Dokument beschreibt das moderne UI/UX-Konzept für die römische Taschenrechner-Anwendung "CALCULUM ROMANUM". Das Design orientiert sich an zeitgenössischen Taschenrechner-Apps und kombiniert antike Ästhetik mit moderner Benutzerfreundlichkeit.

## Design-Prinzipien

### 1. Klarheit und Einfachheit
- **Fokus auf das Wesentliche**: Das Eingabefeld und die Ergebnisse stehen im Mittelpunkt
- **Intuitive Bedienung**: Klare visuelle Hierarchie und logische Anordnung
- **Minimale kognitive Belastung**: Benutzer können sich auf die Berechnung konzentrieren

### 2. Moderne Ästhetik mit antiken Elementen
- **Neumorphismus/Soft UI**: Sanfte Schatten und erhabene Elemente für taktilen Eindruck
- **Antike Farbpalette**: Warme Erdtöne kombiniert mit modernen Akzenten
- **Typografie**: Klassische Serifenschriften für römische Zahlen, moderne Sans-Serif für UI-Elemente

### 3. Barrierefreiheit (WCAG 2.1 AA)
- **Mindestkontrast 4.5:1** für alle Textelemente
- **Sichtbare Fokus-Indikatoren** für Tastaturnavigation
- **ARIA-Labels** für Screenreader-Kompatibilität
- **Mindestgröße von 44x44px** für alle interaktiven Elemente

### 4. Responsive und Adaptiv
- **Mindestfenstergröße**: 800x600 Pixel
- **Skalierbares Layout**: Funktioniert auf verschiedenen Bildschirmgrößen
- **Touch-freundlich**: Große Buttons für mobile Nutzung

## Anwendungsfenster

### Titel und Rahmen
- **Fenstertitel**: "CALCULUM ROMANUM"
- **Fensterstil**: Modernes, abgerundetes Design mit sanften Schatten
- **Mindestgröße**: 800x600 Pixel (nicht skalierbar unter diese Größe)
- **Maximale Größe**: Frei skalierbar

### Layout-Struktur
```
┌─────────────────────────────────────────────────────────┐
│  CALCULUM ROMANUM                              [_][□][X]│
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │  HISTORIA (Toggle)                            [◐] │  │
│  ├───────────────────────────────────────────────────┤  │
│  │                                                   │  │
│  │  ┌─────────────────────────────────────────────┐  │  │
│  │  │           Rechenweg-Anzeige (dynamisch)     │  │  │
│  │  │              XII ET V = XVII                │  │  │
│  │  └─────────────────────────────────────────────┘  │  │
│  │                                                   │  │
│  │  ┌─────────────────────────────────────────────┐  │  │
│  │  │              Hauptdisplay                   │  │  │
│  │  │                                             │  │  │
│  │  │                   XII                       │  │  │
│  │  │                                             │  │  │
│  │  └─────────────────────────────────────────────┘  │  │
│  │                                                   │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │  [CLEAR]      [CLEAR ENTRY]      [HISTORIA]       │  │
│  ├───────────────────────────────────────────────────┤  │
│  │                                                   │  │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────┐ │  │
│  │  │   I      │ │   V      │ │   X      │ │ ADD  │ │  │
│  │  │  ADDERE  │ │ SUBTRAH  │ │ MULTIPL  │ │ DIVID│ │  │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────┘ │  │
│  │                                                   │  │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────┐ │  │
│  │  │   L      │ │   C      │ │   D      │ │ CALC │ │  │
│  │  │  ADDERE  │ │ SUBTRAH  │ │ MULTIPL  │ │ DIVID│ │  │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────┘ │  │
│  │                                                   │  │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────┐ │  │
│  │  │   M      │ │   (leer) │ │   (leer) │ │      │ │  │
│  │  │  ADDERE  │ │          │ │          │ │      │ │  │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────┘ │  │
│  │                                                   │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Kernkomponenten

### 1. Hauptdisplay
- **Größe**: Groß und prominent (mindestens 80pt Schrift)
- **Inhalt**: Aktuelle Eingabe (römische Zahl)
- **Validierung**: Visuelles Feedback bei ungültiger Eingabe (rote Umrandung)
- **Auto-Umschaltung**: Kleinbuchstaben werden automatisch in Großbuchstaben konvertiert

### 2. Rechenweg-Anzeige
- **Position**: Über dem Hauptdisplay
- **Format**: "XII ET V =" oder "XII ET V = XVII"
- **Dynamik**: Aktualisiert sich in Echtzeit (< 50ms)
- **Fehleranzeige**: "ERRATA: DIVISIO PER ZERO" etc.

### 3. Ziffern-Buttons (I, V, X, L, C, D, M)
- **Layout**: Grid-System (3-4 Spalten)
- **Beschriftung**: Großbuchstabe prominent, lateinischer Name darunter
- **Design**: Erhabene Buttons mit sanften Schatten
- **Feedback**: Press-Animation (leichtes Einpressen)
- **Größe**: Mindestens 60x60px (Touch-freundlich)

### 4. Operations-Buttons
- **Lateinische Beschriftungen**: ADDERE, SUBTRAHERE, MULTIPLICARE, DIVIDERE
- **Visuelles Feedback**: Hervorgehobener Rahmen/Farbe bei Auswahl
- **Toggle-Verhalten**: Nur eine Operation gleichzeitig aktiv
- **Zugänglichkeit**: aria-pressed für Screenreader

### 5. Action-Buttons
- **CALCULARE**: Prominente Position, hervorgehobenes Design
- **CLEAR**: Rücksetzung aller Eingaben
- **CLEAR ENTRY**: Löscht nur aktuelle Eingabe
- **HISTORIA**: Öffnet/schließt Historie-Panel

### 6. Historie-Panel
- **Toggle-Bedienung**: Ein/Aus durch Klick auf Button
- **Liste**: Letzte 10 Berechnungen
- **Format**: "XII + V = XVII"
- **Interaktion**: Klick lädt Berechnung in aktuellen Kontext
- **Tastatur**: Pfeiltasten zur Navigation, Enter zum Laden

## Farbpalette

### Primärfarben
```
Hintergrund (Haupt):    #F5F0E8  (Warmes Creme/Beige - antikes Pergament)
Hintergrund (Panel):    #E8E0D0  (Etwas dunkleres Beige)
Karten/Display:         #FFFFFF  (Reinweiß für Kontrast)
```

### Akzentfarben
```
Primär-Akzent:          #8B4513  (Antikes Braun - Buttons, wichtige Elemente)
Sekundär-Akzent:        #CD853F  (Peach/Sand - Hover-Zustände)
Aktiv-Farbe:            #D2691E  (Chocolate - ausgewählte Operationen)
```

### Statusfarben
```
Erfolg/Normal:          #2E7D32  (Dunkelgrün - gültige Eingaben)
Warnung:                #F57C00  (Orange - Warnhinweise)
Fehler:                 #C62828  (Dunkelrot - ungültige Eingaben, Fehler)
Information:            #1565C0  (Blau - informative Meldungen)
```

### Textfarben
```
Haupttext:              #212121  (Fast Schwarz - Hauptinhalt)
Sekundärtext:           #757575  (Grau - Labels, Hinweise)
Deaktiviert:            #BDBDBD  (Hellgrau - inaktive Elemente)
```

### Fokus-Indikatoren
```
Fokus-Ring:             #1976D2  (Blau - sichtbare Fokus-Indikatoren)
Fokus-Verlauf:          3px solid #1976D2
```

## Typografie

### Schriftarten
```
Hauptschrift (UI):      'Inter', 'Segoe UI', sans-serif
Römische Zahlen:        'Cinzel', 'Trajan Pro', serif (klassisch)
Monospace (Fehler):     'Roboto Mono', 'Consolas', monospace
```

### Schriftgrößen
```
Hauptdisplay:           72px (responsive: 48-96px)
Rechenweg-Anzeige:      24px
Button-Text (Haupt):    18px
Button-Text (Sub):      12px
Labels:                 16px
Historie-Einträge:      16px
Fehlermeldungen:        18px
```

### Schriftgewichte
```
Dünn:                   300 (deaktivierte Elemente)
Normal:                 400 (Haupttext)
Medium:                 500 (Buttons, Labels)
Bold:                   700 (Hauptdisplay, wichtige Elemente)
```

## Interaktionen und Animationen

### Button-Interaktionen
```
Hover:                  Leichte Aufhellung (5%), leichter Schatten
Active/Press:           Leichte Einpress-Animation (2px nach unten)
Focus:                  Sichtbarer blauer Ring (3px solid)
Disabled:               50% Opazität, keine Interaktion
```

### Übergangszeiten
```
Hover-Transition:       150ms ease-in-out
Press-Animation:        100ms ease-out
Fokus-Transition:       100ms ease-in-out
Display-Update:         < 50ms
Gesamt-Rendering:       < 200ms
```

### Historie-Animation
```
Öffnen/Schließen:       Slide-Up/Down, 300ms ease-in-out
Eintrag-Highlight:      Fade-In, 200ms ease
Lade-Feedback:          Pulsierende Animation beim Laden
```

### Fehler-Feedback
```
Ungültige Eingabe:      Rote Umrandung + sanftes Pulsieren (1s)
Fehlermeldung:          Fade-In von oben, 300ms
Fehler-Timeout:         Automatische Ausblendung nach 5s (optional)
```

## Responsive Breakpoints

```
Desktop (800px+):       Vollständiges Layout mit allen Elementen
Tablet (600-799px):     Kompaktere Button-Größe, optimiertes Grid
Mobile (<600px):        Vertikales Layout, größere Touch-Targets
```

## Tastatur-Navigation

### Shortcuts
```
Tab/Shift+Tab:          Navigation zwischen interaktiven Elementen
Enter/Space:            Aktiviert fokussierten Button
Escape:                 CLEAR ENTRY (löscht aktuelle Eingabe)
Enter im Display:       CALCULARE (führt Berechnung aus)
Pfeiltasten in Historie: Navigation durch Historie-Einträge
Enter in Historie:      Lädt ausgewählte Berechnung
```

### Fokus-Management
```
Initialer Fokus:        Hauptdisplay (Eingabefeld)
Nach Berechnung:        Bleibt im Display für neue Eingabe
Nach Fehler:            Fokus bleibt, Fehler wird angezeigt
Historie-Öffnung:       Fokus springt zur Historie-Liste
```

## Barrierefreiheit (Accessibility)

### ARIA-Labels
```
Eingabefeld:            aria-label="Römische Zahl eingeben"
Operations-Buttons:     aria-label="ADDERE" aria-pressed="false/true"
Action-Buttons:         aria-label="CLEAR", "CLEAR ENTRY", "CALCULARE", "HISTORIA"
Historie-Liste:         role="list" aria-label="Berechnungshistorie"
Historie-Einträge:      role="listitem" aria-label="XII plus V gleich XVII"
Fehlermeldungen:        role="alert" aria-live="polite"
Rechenweg:              aria-live="polite" für dynamische Updates
```

### Screenreader-Optimierung
```
Dynamische Inhalte:     aria-live regions für Rechenweg und Ergebnisse
Fehlermeldungen:        aria-live="assertive" für kritische Fehler
Status-Änderungen:      aria-pressed, aria-selected für Toggle-Elemente
```

### Kontrastverhältnisse
```
Alle Textelemente:      Mindestens 4.5:1 (WCAG AA)
Großer Text (24px+):    Mindestens 3:1
UI-Elemente/Icons:      Mindestens 3:1
```

## Performance-Ziele

```
Initial Rendering:      < 200ms
Display-Update:         < 50ms
Berechnung:             < 100ms
Historie-Laden:         < 100ms
Validierungs-Feedback:  < 50ms
Gesamt-Responsivität:   < 200ms für alle Interaktionen
```

## Technische Implementierungshinweise

### Framework-Empfehlung
- **Electron** oder **Tauri** für Desktop-Anwendung
- **React** oder **Vue.js** für UI-Komponenten
- **CSS Grid/Flexbox** für Layout
- **CSS Custom Properties** für Farb-Management

### Komponenten-Struktur
```
App/
├── Display/
│   ├── CalculationDisplay (Rechenweg)
│   └── MainDisplay (Haupteingabe)
├── Controls/
│   ├── NumberButtons (I, V, X, L, C, D, M)
│   ├── OperationButtons (ADDERE, SUBTRAHERE, etc.)
│   └── ActionButtons (CLEAR, CALCULARE, etc.)
├── History/
│   ├── HistoryPanel
│   └── HistoryItem
└── Feedback/
    ├── ErrorDisplay
    └── StatusMessage
```

### State-Management
```
currentInput:           String (aktuelle römische Eingabe)
operation:              String|null (gewählte Operation)
firstOperand:           String|null (erster Operand)
result:                 String|null (Berechnungsergebnis)
error:                  String|null (Fehlermeldung)
history:                Array<Berechnung> (letzte 10 Einträge)
showHistory:            Boolean (Historie sichtbar?)
```

## Nächste Schritte

1. **Wireframes erstellen** (siehe Dokument 02_wireframes.md)
2. **Design-System definieren** (siehe Dokument 03_design_system.md)
3. **Prototyp entwickeln** (interaktiver Mockup)
4. **Usability-Testing** (mit Zielgruppe)
5. **Implementierung** (nach finalized Design)

---

**Version**: 1.0  
**Erstellt**: 2024  
**Status**: Entwurf für Review
