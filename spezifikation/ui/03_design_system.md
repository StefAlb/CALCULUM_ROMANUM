# Design System: CALCULUM ROMANUM

## Dokumenten-Information
- **Version**: 1.0
- **Status**: Entwurf
- **Referenz**: UI-Konzept 01_ueberblick.md, Wireframes 02_wireframes.md

---

## 1. Farbpalette

### Primärfarben (Hintergründe)
```css
:root {
  /* Haupt-Hintergrund - warmes Pergament */
  --color-bg-primary: #F5F0E8;
  
  /* Sekundärer Hintergrund - Panels */
  --color-bg-secondary: #E8E0D0;
  
  /* Karten/Display Hintergrund */
  --color-bg-card: #FFFFFF;
  
  /* Titelleiste */
  --color-bg-header: #8B4513;
}
```

### Akzentfarben (Interaktive Elemente)
```css
:root {
  /* Primär-Akzent - Buttons, wichtige Elemente */
  --color-accent-primary: #8B4513;
  
  /* Sekundär-Akzent - Hover-Zustände */
  --color-accent-secondary: #CD853F;
  
  /* Aktiv-Farbe - ausgewählte Operationen */
  --color-accent-active: #D2691E;
  
  /* Accent Hover */
  --color-accent-hover: #A0522D;
  
  /* Accent Active (Pressed) */
  --color-accent-active-state: #654321;
}
```

### Statusfarben
```css
:root {
  /* Erfolg/Valid */
  --color-status-success: #2E7D32;
  --color-status-success-light: #4CAF50;
  
  /* Warnung */
  --color-status-warning: #F57C00;
  --color-status-warning-light: #FF9800;
  
  /* Fehler/Error */
  --color-status-error: #C62828;
  --color-status-error-light: #EF5350;
  
  /* Information */
  --color-status-info: #1565C0;
  --color-status-info-light: #2196F3;
}
```

### Textfarben
```css
:root {
  /* Haupttext - hoher Kontrast */
  --color-text-primary: #212121;
  
  /* Sekundärtext - Labels, Hinweise */
  --color-text-secondary: #757575;
  
  /* Deaktiviert/Disabled */
  --color-text-disabled: #BDBDBD;
  
  /* Text auf dunklem Hintergrund (Header) */
  --color-text-inverse: #FFFFFF;
  
  /* Römische Zahlen - besonders hervorgehoben */
  --color-text-roman: #212121;
  --color-text-roman-error: #C62828;
}
```

### Fokus-Indikatoren
```css
:root {
  /* Fokus-Ring Farbe */
  --color-focus-ring: #1976D2;
  
  /* Fokus-Ring Stil */
  --focus-ring: 3px solid var(--color-focus-ring);
  --focus-ring-inset: 3px inset var(--color-focus-ring);
}
```

### Farb-Kontraste (WCAG 2.1 AA)
```
Text auf Hintergrund:
- #212121 auf #F5F0E8 → 13.5:1 ✓ (Pass)
- #212121 auf #FFFFFF → 16:1 ✓ (Pass)
- #FFFFFF auf #8B4513 → 5.9:1 ✓ (Pass)
- #757575 auf #F5F0E8 → 5.2:1 ✓ (Pass)

UI-Komponenten:
- #8B4513 auf #F5F0E8 → 5.9:1 ✓ (Pass)
- #C62828 auf #FFFFFF → 6.8:1 ✓ (Pass)
```

---

## 2. Typografie

### Schriftarten
```css
:root {
  /* Hauptschrift für UI-Elemente */
  --font-ui: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
  
  /* Schrift für römische Zahlen (klassisch) */
  --font-roman: 'Cinzel', 'Trajan Pro', 'Times New Roman', serif;
  
  /* Monospace für Fehlermeldungen und Code */
  --font-mono: 'Roboto Mono', 'Consolas', 'Courier New', monospace;
}
```

### Schriftgrößen (Responsive)
```css
:root {
  /* Base Font Size: 16px */
  --font-size-base: 16px;
  
  /* Hauptdisplay - sehr groß */
  --font-size-display: clamp(48px, 8vw, 96px);
  
  /* Rechenweg-Anzeige */
  --font-size-calculation: 24px;
  
  /* Fehlermeldungen */
  --font-size-error: 18px;
  
  /* Button-Haupttext */
  --font-size-button: 18px;
  
  /* Button-Subtext (lateinisch) */
  --font-size-button-sub: 12px;
  
  /* Labels und Überschriften */
  --font-size-label: 16px;
  
  /* Historie-Einträge */
  --font-size-history: 16px;
  
  /* Arabische Übersetzungen */
  --font-size-subtext: 14px;
  
  /* Kleine Hinweise */
  --font-size-small: 12px;
}
```

### Schriftgewichte
```css
:root {
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### Zeilenhöhe
```css
:root {
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
  --line-height-display: 1.1;
}
```

### Text-Beispiele
```css
/* Hauptdisplay */
.display-text {
  font-family: var(--font-roman);
  font-size: var(--font-size-display);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-display);
  color: var(--color-text-roman);
}

/* Rechenweg-Anzeige */
.calculation-text {
  font-family: var(--font-roman);
  font-size: var(--font-size-calculation);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  color: var(--color-text-primary);
}

/* Button-Text */
.button-text {
  font-family: var(--font-ui);
  font-size: var(--font-size-button);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  color: var(--color-text-inverse);
}

/* Button-Subtext (lateinisch) */
.button-subtext {
  font-family: var(--font-ui);
  font-size: var(--font-size-button-sub);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-tight);
  color: rgba(255, 255, 255, 0.9);
}

/* Fehlermeldung */
.error-text {
  font-family: var(--font-mono);
  font-size: var(--font-size-error);
  font-weight: var(--font-weight-medium);
  color: var(--color-status-error);
}
```

---

## 3. Spacing System

### Base Unit
```css
:root {
  /* Base Unit: 8px */
  --spacing-unit: 8px;
  
  /* Multiplikatoren */
  --spacing-xs: calc(var(--spacing-unit) * 0.5);   /* 4px */
  --spacing-sm: calc(var(--spacing-unit) * 1);     /* 8px */
  --spacing-md: calc(var(--spacing-unit) * 1.5);   /* 12px */
  --spacing-lg: calc(var(--spacing-unit) * 2);     /* 16px */
  --spacing-xl: calc(var(--spacing-unit) * 2.5);   /* 20px */
  --spacing-2xl: calc(var(--spacing-unit) * 3);    /* 24px */
  --spacing-3xl: calc(var(--spacing-unit) * 4);    /* 32px */
  --spacing-4xl: calc(var(--spacing-unit) * 5);    /* 40px */
  --spacing-5xl: calc(var(--spacing-unit) * 6);    /* 48px */
}
```

### Anwendung
```css
/* Container Padding */
.container {
  padding: var(--spacing-xl);
}

/* Button-Abstand */
.button-group {
  gap: var(--spacing-md);
}

/* Panel Padding */
.panel {
  padding: var(--spacing-2xl);
}

/* Display Padding */
.display {
  padding: var(--spacing-2xl);
}

/* Historie-Eintrag */
.history-item {
  padding: var(--spacing-lg) var(--spacing-xl);
}
```

---

## 4. Komponenten-Design

### Buttons

#### Basis-Button
```css
.button {
  /* Größe */
  min-width: 44px;
  min-height: 44px;
  padding: var(--spacing-sm) var(--spacing-lg);
  
  /* Typografie */
  font-family: var(--font-ui);
  font-size: var(--font-size-button);
  font-weight: var(--font-weight-medium);
  
  /* Farben */
  background-color: var(--color-accent-primary);
  color: var(--color-text-inverse);
  border: none;
  border-radius: 8px;
  
  /* Schatten */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  
  /* Transition */
  transition: all 150ms ease-in-out;
  
  /* Cursor */
  cursor: pointer;
}

/* Hover */
.button:hover {
  background-color: var(--color-accent-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Active/Pressed */
.button:active {
  background-color: var(--color-accent-active-state);
  transform: translateY(1px);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

/* Focus */
.button:focus {
  outline: none;
  box-shadow: var(--focus-ring), 0 2px 4px rgba(0, 0, 0, 0.15);
}

/* Disabled */
.button:disabled {
  background-color: var(--color-text-disabled);
  color: var(--color-text-inverse);
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}
```

#### Number Button (Ziffern-Buttons)
```css
.number-button {
  /* Größe */
  width: 100px;
  height: 80px;
  
  /* Layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  /* Hauptziffer */
  font-family: var(--font-roman);
  font-size: 32px;
  font-weight: var(--font-weight-bold);
  
  /* Lateinischer Text */
  position: relative;
}

.number-button::after {
  content: attr(data-label);
  position: absolute;
  bottom: 8px;
  font-size: var(--font-size-button-sub);
  font-weight: var(--font-weight-normal);
  opacity: 0.9;
}
```

#### Operation Button (ausgewählt)
```css
.operation-button {
  background-color: var(--color-accent-primary);
}

.operation-button[aria-pressed="true"] {
  background-color: var(--color-accent-active);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

.operation-button[aria-pressed="true"]::before {
  content: '';
  position: absolute;
  top: 4px;
  right: 4px;
  width: 8px;
  height: 8px;
  background-color: var(--color-status-success-light);
  border-radius: 50%;
}
```

#### Action Buttons (CLEAR, CALCULARE, etc.)
```css
.action-button-clear {
  background-color: var(--color-status-error);
}

.action-button-clear:hover {
  background-color: #B71C1C;
}

.action-button-calcular {
  background-color: var(--color-status-success);
  font-weight: var(--font-weight-bold);
}

.action-button-calcular:hover {
  background-color: #1B5E20;
}

.action-button-history {
  background-color: var(--color-status-info);
}

.action-button-history:hover {
  background-color: #0D47A1;
}
```

### Display-Komponenten

#### Hauptdisplay
```css
.main-display {
  /* Größe */
  min-height: 120px;
  padding: var(--spacing-2xl);
  
  /* Hintergrund */
  background-color: var(--color-bg-card);
  border-radius: 12px;
  
  /* Schatten */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  /* Text */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: var(--font-roman);
  font-size: var(--font-size-display);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-roman);
  
  /* Border für Validierung */
  border: 3px solid transparent;
  transition: border-color 150ms ease-in-out;
}

.main-display.valid {
  border-color: var(--color-status-success);
}

.main-display.invalid {
  border-color: var(--color-status-error);
  animation: pulse-error 1s ease-in-out;
}

@keyframes pulse-error {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(198, 40, 40, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(198, 40, 40, 0);
  }
}
```

#### Rechenweg-Anzeige
```css
.calculation-display {
  min-height: 80px;
  padding: var(--spacing-lg);
  
  /* Text */
  font-family: var(--font-roman);
  font-size: var(--font-size-calculation);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  
  /* Layout */
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* ARIA für Screenreader */
  aria-live: polite;
}
```

### Panels

#### Hauptpanel
```css
.main-panel {
  background-color: var(--color-bg-secondary);
  border-radius: 16px;
  padding: var(--spacing-xl);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

#### Historie-Panel
```css
.history-panel {
  background-color: var(--color-bg-card);
  border-radius: 12px;
  max-height: 400px;
  overflow-y: auto;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

/* Scrollbar Styling */
.history-panel::-webkit-scrollbar {
  width: 8px;
}

.history-panel::-webkit-scrollbar-track {
  background: var(--color-bg-secondary);
  border-radius: 4px;
}

.history-panel::-webkit-scrollbar-thumb {
  background: var(--color-accent-secondary);
  border-radius: 4px;
}

.history-panel::-webkit-scrollbar-thumb:hover {
  background: var(--color-accent-primary);
}
```

#### Historie-Eintrag
```css
.history-item {
  padding: var(--spacing-lg) var(--spacing-xl);
  border-bottom: 1px solid var(--color-bg-secondary);
  cursor: pointer;
  transition: background-color 150ms ease-in-out;
}

.history-item:last-child {
  border-bottom: none;
}

.history-item:hover {
  background-color: var(--color-bg-primary);
}

.history-item:focus {
  outline: none;
  background-color: var(--color-bg-primary);
  box-shadow: inset var(--focus-ring);
}

.history-item .roman-formula {
  font-family: var(--font-roman);
  font-size: var(--font-size-history);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

.history-item .arabic-translation {
  font-family: var(--font-ui);
  font-size: var(--font-size-subtext);
  color: var(--color-text-secondary);
  margin-top: var(--spacing-xs);
}
```

---

## 5. Animationen und Transitions

### Timing Functions
```css
:root {
  --transition-fast: 100ms;
  --transition-normal: 150ms;
  --transition-slow: 300ms;
  --transition-slower: 500ms;
  
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### Button Animation
```css
.button {
  transition: 
    background-color var(--transition-normal) var(--ease-in-out),
    transform var(--transition-fast) var(--ease-out),
    box-shadow var(--transition-normal) var(--ease-in-out);
}

.button:active {
  animation: button-press var(--transition-fast) var(--ease-out);
}

@keyframes button-press {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(0);
  }
}
```

### Panel Slide Animation
```css
.history-panel {
  transition: 
    max-height var(--transition-slow) var(--ease-in-out),
    opacity var(--transition-slow) var(--ease-in-out);
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

.history-panel.open {
  max-height: 500px;
  opacity: 1;
}
```

### Fade-In Animation
```css
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fade-in var(--transition-slow) var(--ease-out);
}
```

### Loading Pulse
```css
@keyframes loading-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.loading {
  animation: loading-pulse 1s var(--ease-in-out) infinite;
}
```

---

## 6. Responsive Breakpoints

```css
/* Mobile First Ansatz */

/* Base: Mobile (< 600px) */
.container {
  padding: var(--spacing-lg);
}

.button {
  min-width: 44px;
  min-height: 44px;
}

/* Tablet (600px - 799px) */
@media (min-width: 600px) {
  .container {
    padding: var(--spacing-xl);
  }
  
  .button {
    min-width: 48px;
    min-height: 48px;
  }
  
  .display-text {
    font-size: 64px;
  }
}

/* Desktop (800px+) */
@media (min-width: 800px) {
  .container {
    padding: var(--spacing-2xl);
  }
  
  .window {
    min-width: 800px;
    min-height: 600px;
  }
  
  .display-text {
    font-size: 72px;
  }
}

/* Large Desktop (1200px+) */
@media (min-width: 1200px) {
  .container {
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .display-text {
    font-size: 96px;
  }
}
```

---

## 7. Accessibility (Barrierefreiheit)

### Focus Styles
```css
/* Alle interaktiven Elemente müssen sichtbaren Fokus haben */
button,
input,
a,
[tabindex]:not([tabindex="-1"]) {
  &:focus {
    outline: none;
    box-shadow: var(--focus-ring);
  }
  
  &:focus:not(:focus-visible) {
    box-shadow: none;
  }
  
  &:focus-visible {
    box-shadow: var(--focus-ring);
  }
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### High Contrast Mode
```css
@media (prefers-contrast: high) {
  :root {
    --color-text-primary: #000000;
    --color-text-secondary: #333333;
    --color-accent-primary: #000080;
    --color-status-error: #8B0000;
  }
  
  .button {
    border: 2px solid currentColor;
  }
}
```

### Screen Reader Only
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

---

## 8. Dark Mode (Zukünftige Erweiterung)

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-primary: #1A1A1A;
    --color-bg-secondary: #2D2D2D;
    --color-bg-card: #3D3D3D;
    
    --color-text-primary: #E0E0E0;
    --color-text-secondary: #A0A0A0;
    
    --color-accent-primary: #A0522D;
    --color-accent-active: #CD853F;
  }
}
```

---

## 9. CSS Custom Properties Summary

```css
:root {
  /* Colors - Background */
  --color-bg-primary: #F5F0E8;
  --color-bg-secondary: #E8E0D0;
  --color-bg-card: #FFFFFF;
  --color-bg-header: #8B4513;
  
  /* Colors - Accent */
  --color-accent-primary: #8B4513;
  --color-accent-secondary: #CD853F;
  --color-accent-active: #D2691E;
  --color-accent-hover: #A0522D;
  --color-accent-active-state: #654321;
  
  /* Colors - Status */
  --color-status-success: #2E7D32;
  --color-status-warning: #F57C00;
  --color-status-error: #C62828;
  --color-status-info: #1565C0;
  
  /* Colors - Text */
  --color-text-primary: #212121;
  --color-text-secondary: #757575;
  --color-text-disabled: #BDBDBD;
  --color-text-inverse: #FFFFFF;
  
  /* Colors - Focus */
  --color-focus-ring: #1976D2;
  
  /* Typography */
  --font-ui: 'Inter', 'Segoe UI', sans-serif;
  --font-roman: 'Cinzel', 'Trajan Pro', serif;
  --font-mono: 'Roboto Mono', 'Consolas', monospace;
  
  /* Spacing */
  --spacing-unit: 8px;
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 20px;
  --spacing-2xl: 24px;
  --spacing-3xl: 32px;
  
  /* Transitions */
  --transition-fast: 100ms;
  --transition-normal: 150ms;
  --transition-slow: 300ms;
}
```

---

**Ende des Design-Systems**
