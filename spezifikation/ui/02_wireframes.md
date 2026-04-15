# UI-Wireframes: CALCULUM ROMANUM

## Dokumenten-Information
- **Version**: 1.0
- **Status**: Entwurf
- **Referenz**: UI-Konzept 01_ueberblick.md

---

## 1. Hauptfenster - Desktop-Ansicht (800x600px Mindestgröße)

### Layout-Struktur
```
┌─────────────────────────────────────────────────────────────────┐
│  CALCULUM ROMANUM                                    [_][□][X]  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  HISTORIA ◐                                    [⚙]       │  │
│  ├───────────────────────────────────────────────────────────┤  │
│  │                                                           │  │
│  │  ┌─────────────────────────────────────────────────────┐  │  │
│  │  │                                                     │  │  │
│  │  │              XII  ET  V  =  XVII                    │  │  │
│  │  │         (Rechenweg-Anzeige - 24px Cinzel)           │  │  │
│  │  │                                                     │  │  │
│  │  └─────────────────────────────────────────────────────┘  │  │
│  │                                                           │  │
│  │  ┌─────────────────────────────────────────────────────┐  │  │
│  │  │                                                     │  │  │
│  │  │                                                     │  │  │
│  │  │                    XII                              │  │  │
│  │  │         (Hauptdisplay - 72px Cinzel Bold)           │  │  │
│  │  │                                                     │  │  │
│  │  │                                                     │  │  │
│  │  └─────────────────────────────────────────────────────┘  │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  [CLEAR]              [CLEAR ENTRY]          [HISTORIA]   │  │
│  │  (Reset)              (Entry)                (Toggle)     │  │
│  ├───────────────────────────────────────────────────────────┤  │
│  │                                                           │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │  │
│  │  │    I     │  │    V     │  │    X     │  │  ADDERE  │  │  │
│  │  │  ADDERE  │  │ SUBTRAH  │  │ MULTIPL  │  │   DIVID  │  │  │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │  │
│  │                                                           │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │  │
│  │  │    L     │  │    C     │  │    D     │  │ CALCULARE│  │  │
│  │  │  ADDERE  │  │ SUBTRAH  │  │ MULTIPL  │  │  (Hervor)│  │  │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │  │
│  │                                                           │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │  │
│  │  │    M     │  │          │  │          │  │          │  │  │
│  │  │  ADDERE  │  │          │  │          │  │          │  │  │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Component Breakdown

#### A. Titelleiste (Höhe: 40px)
- **Linke Seite**: Anwendungstitel "CALCULUM ROMANUM" (16px, Medium)
- **Rechte Seite**: Fenster-Steuerung (Minimieren, Maximieren, Schließen)
- **Hintergrund**: #8B4513 (Antikes Braun)
- **Textfarbe**: #FFFFFF

#### B. Historie-Header (Höhe: 40px)
- **Linke Seite**: "HISTORIA" Label mit Toggle-Icon (◐)
- **Rechte Seite**: Einstellungen-Icon (⚙) - zukünftige Erweiterung
- **Hintergrund**: #E8E0D0
- **Border-Bottom**: 1px solid #D0C0A0

#### C. Rechenweg-Anzeige (Höhe: 80px)
- **Inhalt**: Dynamische Formelanzeige
- **Format**: "XII ET V =" oder "XII ET V = XVII"
- **Schriftart**: Cinzel, 24px, Medium
- **Farbe**: #424242
- **Hintergrund**: Transparent
- **ARIA**: aria-live="polite"

#### D. Hauptdisplay (Höhe: 120px)
- **Inhalt**: Aktuelle Eingabe oder Ergebnis
- **Schriftart**: Cinzel Bold, 72px
- **Farbe**: #212121 (Normal), #C62828 (Fehler)
- **Hintergrund**: #FFFFFF mit Schatten
- **Border**: 2px solid #2E7D32 (gültig) oder #C62828 (ungültig)
- **Padding**: 20px
- **Text-Align**: Right

#### E. Action-Button-Bar (Höhe: 60px)
- **CLEAR**: Links, rot hinterlegt bei Hover
- **CLEAR ENTRY**: Mitte-links, orange bei Hover
- **HISTORIA**: Mitte-rechts, blau bei Hover
- **Button-Größe**: 120x50px
- **Abstand**: 10px zwischen Buttons

#### F. Ziffern-Buttons-Grid (Höhe: 360px)
- **Layout**: 4 Spalten × 3 Reihen
- **Button-Größe**: 100x80px (inklusive Padding)
- **Abstand**: 10px zwischen Buttons
- **Primäre Ziffern**: I, V, X, L, C, D, M
- **Zusatz-Buttons**: Leer oder zukünftige Funktionen

---

## 2. Historie-Panel (Erweiterte Ansicht)

### Layout bei geöffneter Historie
```
┌─────────────────────────────────────────────────────────────────┐
│  HISTORIA (Geöffnet)                               [Schließen]  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  1.  XII  ET  V  =  XVII                    [Laden]       │  │
│  │      12     5      17                                      │  │
│  ├───────────────────────────────────────────────────────────┤  │
│  │  2.  XX  MINUS  VIII  =  XII                  [Laden]     │  │
│  │      20       8       12                                   │  │
│  ├───────────────────────────────────────────────────────────┤  │
│  │  3.  IV  PER  III  =  XII                     [Laden]     │  │
│  │      4      3      17                                      │  │
│  ├───────────────────────────────────────────────────────────┤  │
│  │  4.  XV  DIVIDITUR  III  =  V                   [Laden]   │  │
│  │      15        3       5                                   │  │
│  ├───────────────────────────────────────────────────────────┤  │
│  │  5.  ... (weitere Einträge bis 10)            [Laden]     │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  [Alle Löschen]                                  [Neue Berechnung]│
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Historie-Eintrag Details
- **Höhe pro Eintrag**: 60px
- **Nummerierung**: 1-10 (linksbündig, 20px Breite)
- **Römische Formel**: 24px Cinzel, #212121
- **Arabische Übersetzung**: 14px Inter, #757575 (unterhalb)
- **Laden-Button**: Rechts, 80x40px, "LADEN"
- **Hover-Effekt**: Hintergrund #F5F0E8
- **Fokus**: 3px solid #1976D2

---

## 3. Fehlerzustände

### A. Validierungsfehler (Eingabe)
```
┌─────────────────────────────────────────────────────────────────┐
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                     ✗     │  │
│  │                    XIIX                                   │  │
│  │              (Rote Umrandung + Pulsieren)                 │  │
│  │                                                     ✗     │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  ⚠ ERRATA: Ungültige römische Zahl                       │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### B. Berechnungsfehler
```
┌─────────────────────────────────────────────────────────────────┐
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                     ✗     │  │
│  │              DIVISIO PER ZERO                             │  │
│  │              (Fehlermeldung im Display)                   │  │
│  │                                                     ✗     │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### C. Limit-Überschreitung
```
┌─────────────────────────────────────────────────────────────────┐
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                     ✗     │  │
│  │              LIMITUM EXCESSUM                             │  │
│  │              (Ergebnis > 3999)                            │  │
│  │                                                     ✗     │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 4. Responsive Ansichten

### Tablet (600-799px)
```
┌───────────────────────────────────────────────────┐
│  CALCULUM ROMANUM                      [_][□][X]  │
├───────────────────────────────────────────────────┤
│                                                   │
│  ┌─────────────────────────────────────────────┐  │
│  │  HISTORIA ◐                          [⚙]   │  │
│  ├─────────────────────────────────────────────┤  │
│  │                                             │  │
│  │  ┌───────────────────────────────────────┐  │  │
│  │  │        XII  ET  V  =  XVII            │  │  │
│  │  └───────────────────────────────────────┘  │  │
│  │                                             │  │
│  │  ┌───────────────────────────────────────┐  │  │
│  │  │                 XII                   │  │  │
│  │  └───────────────────────────────────────┘  │  │
│  │                                             │  │
│  └─────────────────────────────────────────────┘  │
│                                                   │
│  ┌─────────────────────────────────────────────┐  │
│  │  [CLEAR]     [CLEAR ENTRY]    [HISTORIA]    │  │
│  ├─────────────────────────────────────────────┤  │
│  │                                             │  │
│  │  ┌────────┐ ┌────────┐ ┌────────┐ ┌──────┐ │  │
│  │  │   I    │ │   V    │ │   X    │ │ ADD  │ │  │
│  │  │ADDERE  │ │SUBTRAH │ │MULTIPL │ │DIVID │ │  │
│  │  └────────┘ └────────┘ └────────┘ └──────┘ │  │
│  │                                             │  │
│  │  ┌────────┐ ┌────────┐ ┌────────┐ ┌──────┐ │  │
│  │  │   L    │ │   C    │ │   D    │ │CALC  │ │  │
│  │  │ADDERE  │ │SUBTRAH │ │MULTIPL │ │ULARE │ │  │
│  │  └────────┘ └────────┘ └────────┘ └──────┘ │  │
│  │                                             │  │
│  │  ┌────────┐ ┌────────┐                     │  │
│  │  │   M    │ │        │                     │  │
│  │  │ADDERE  │ │        │                     │  │
│  │  └────────┘ └────────┘                     │  │
│  │                                             │  │
│  └─────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────┘
```

### Mobile (<600px)
```
┌─────────────────────────────┐
│ CALCULUM ROMANUM   [_][X]   │
├─────────────────────────────┤
│                             │
│  ┌───────────────────────┐  │
│  │  XII ET V = XVII      │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │          XII          │  │
│  └───────────────────────┘  │
│                             │
│  [CLEAR] [CLR] [HIST]      │
│                             │
│  [ I ] [ V ] [ X ] [ADD]   │
│                             │
│  [ L ] [ C ] [ D ] [CALC]  │
│                             │
│  [ M ]                     │
│                             │
└─────────────────────────────┘
```

---

## 5. Interaktions-Flows

### A. Neue Berechnung
```
1. Start (Display leer)
   ↓
2. Eingabe erste Zahl (XII)
   ↓
3. Operation wählen (ADDERE → hervorgehoben)
   ↓
4. Anzeige: "XII ET"
   ↓
5. Eingabe zweite Zahl (V)
   ↓
6. CALCULARE drücken
   ↓
7. Anzeige: "XII ET V = XVII"
   ↓
8. Display: "XVII" (Ergebnis)
   ↓
9. Historie-Eintrag erstellt
```

### B. Fehlerbehandlung
```
1. Ungültige Eingabe (X2V)
   ↓
2. '2' wird nicht akzeptiert (kein Input)
   ↓
3. Oder: Display wird rot umrandet
   ↓
4. Fehlermeldung: "ERRATA: Ungültige römische Zahl"
   ↓
5. Nach 3s automatische Rücksetzung oder CLEAR
```

### C. Historie-Navigation
```
1. HISTORIA-Button drücken
   ↓
2. Historie-Panel öffnet sich (Slide-Up)
   ↓
3. Pfeiltasten: Navigation durch Einträge
   ↓
4. Enter auf Eintrag: Lädt Berechnung
   ↓
5. Display zeigt geladene erste Zahl
   ↓
6. Historie-Panel schließt sich
```

---

## 6. Zustandsdiagramme

### Display-Zustände
```
┌─────────────┐
│   LEER      │ ←── CLEAR / CLEAR ENTRY
└──────┬──────┘
       │ Eingabe
       ↓
┌─────────────┐
│  EINGABE    │ ←── Korrektur
└──────┬──────┘
       │ Operation gewählt
       ↓
┌─────────────┐
│ OPERAND1    │─── Zweite Eingabe ───→ [OPERATION]
└──────┬──────┘                           ↓
       │ CALCULARE                    ┌─────────────┐
       ↓                              │  ERGEBNIS   │
┌─────────────┐                       └──────┬──────┘
│  FEHLER     │                              │ Neue Eingabe
└──────┬──────┘                              ↓
       └──────────────────────────────→ [ZURÜCK ZU EINGABE]
```

---

## 7. Annotations für Entwickler

### A. Spacing System
```
Unit: 8px (Base Unit)
- Button-Abstand: 10px (1.25 × Base)
- Panel-Abstand: 20px (2.5 × Base)
- Padding Display: 20px (2.5 × Base)
- Fenster-Rand: 16px (2 × Base)
```

### B. Grid System
```
- Haupt-Grid: 4 Spalten
- Spaltenbreite: ~100px
- Gutter: 10px
- Container-Padding: 20px
```

### C. Z-Index Layer
```
Layer 0:   Hintergrund
Layer 10:  Panels (Display, Buttons)
Layer 100: Historie-Overlay
Layer 200: Fehler-Modal
Layer 999: Titelleiste
```

---

**Ende des Wireframe-Dokuments**
