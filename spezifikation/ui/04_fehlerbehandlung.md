# Fehlerbehandlung und Feedback-Mechanismen: CALCULUM ROMANUM

## Dokumenten-Information
- **Version**: 1.0
- **Status**: Entwurf
- **Referenz**: UI-Konzept 01_ueberblick.md, User Stories

---

## 1. Fehlerkategorien

### 1.1 Validierungsfehler (Eingabe)
Fehler, die bei der Eingabe römischer Zahlen auftreten.

#### A. Ungültige Zeichen
**Auslöser**: Eingabe von Zeichen, die keine gültigen römischen Ziffern sind (I, V, X, L, C, D, M).

**Beispiele**:
- "123" (Zahlen)
- "ABC" (ungültige Buchstaben)
- "X2V" (gemischt)
- "!@#" (Sonderzeichen)

**UI-Feedback**:
```
┌─────────────────────────────────────────────────────────────────┐
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                     ✗     │  │
│  │                    X2V                                    │  │
│  │              (Rote Umrandung + Pulsieren)                 │  │
│  │                                                     ✗     │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ⚠ ERRATA: Ungültiges Zeichen                                  │
└─────────────────────────────────────────────────────────────────┘
```

**Verhalten**:
- Tastatureingabe: Ungültige Zeichen werden **nicht akzeptiert** (preventDefault)
- Copy-Paste: Ungültige Eingabe wird **hervorgehoben** und Fehlermeldung angezeigt
- Fehlermeldung erscheint für 3 Sekunden, dann automatische Rücksetzung

**ARIA**:
```html
<div role="alert" aria-live="assertive" class="error-message">
  ERRATA: Ungültiges Zeichen
</div>
```

**Logging**:
```
[2024-01-15T10:30:45.123Z] [ERROR] [VALIDATION_ERROR] [X2V]
```

---

#### B. Längen-Überschreitung
**Auslöser**: Eingabe von mehr als 15 Zeichen.

**Beispiel**: "MMMMCMMXCIX" (16+ Zeichen)

**UI-Feedback**:
```
┌─────────────────────────────────────────────────────────────────┐
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                     ✗     │  │
│  │                   MMMMCMMXCIX                             │  │
│  │              (15. Zeichen wird nicht angenommen)          │  │
│  │                                                     ✗     │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

**Verhalten**:
- 16. Zeichen wird **nicht akzeptiert** (preventDefault)
- Keine Fehlermeldung (stilles Abweisen)

---

#### C. Ungültige römische Zahl
**Auslöser**: Eingabe einer syntaktisch ungültigen römischen Zahl.

**Beispiele**:
- "IIII" (vier gleiche Ziffern hintereinander)
- "VV" (V darf nicht verdoppelt werden)
- "LC" (falsche Reihenfolge)
- "IM" (I kann nur vor X und V stehen)

**UI-Feedback**:
```
┌─────────────────────────────────────────────────────────────────┐
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                     ✗     │  │
│  │                    IIII                                   │  │
│  │              (Rote Umrandung + Pulsieren)                 │  │
│  │                                                     ✗     │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ⚠ ERRATA: Ungültige römische Zahl                             │
└─────────────────────────────────────────────────────────────────┘
```

**Verhalten**:
- Eingabe wird akzeptiert, aber sofort validiert
- Fehlermeldung erscheint
- Nach 3 Sekunden automatische Rücksetzung oder manuell CLEAR

**ARIA**:
```html
<div role="alert" aria-live="assertive" class="error-message">
  ERRATA: Ungültige römische Zahl
</div>
```

---

### 1.2 Berechnungsfehler
Fehler, die während der Berechnung auftreten.

#### A. Division durch Null
**Auslöser**: Division einer Zahl durch "NULLUM" oder äquivalent (römische Zahlen haben keine Null, aber der Benutzer könnte versuchen, eine ungültige Operation durchzuführen).

**UI-Feedback**:
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

**Rechenweg-Anzeige**:
```
XV DIVIDITUR  =  ERRATA: DIVISIO PER ZERO
```

**ARIA**:
```html
<div role="alert" aria-live="assertive" class="error-message">
  DIVISIO PER ZERO
</div>
```

**Logging**:
```
[2024-01-15T10:30:45.123Z] [ERROR] [DIVISION_BY_ZERO]
```

---

#### B. Ergebnis-Überschreitung (Limitum Excessum)
**Auslöser**: Berechnungsergebnis > 3999 (oberes Limit römischer Zahlen).

**Beispiele**:
- "MMMM" (4000)
- "DXL × X" (540 × 10 = 5400)

**UI-Feedback**:
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

**Rechenweg-Anzeige**:
```
DXL PER X = LIMITUM EXCESSUM
```

**ARIA**:
```html
<div role="alert" aria-live="assertive" class="error-message">
  LIMITUM EXCESSUM
</div>
```

**Logging**:
```
[2024-01-15T10:30:45.123Z] [ERROR] [LIMIT_EXCEEDED] [5400]
```

---

#### C. Ungültige Operation
**Auslöser**: Berechnung ohne beide Operanden oder ohne Operation.

**Beispiele**:
- "XII" + CALCULARE (kein zweiter Operand)
- "ADDERE" + CALCULARE (keine Eingabe)

**UI-Feedback**:
```
┌─────────────────────────────────────────────────────────────────┐
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                     ✗     │  │
│  │              ERRATA: INPUT UNCOMPLETUS                    │  │
│  │              (Fehlender Operand)                          │  │
│  │                                                     ✗     │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

**ARIA**:
```html
<div role="alert" aria-live="assertive" class="error-message">
  ERRATA: INPUT UNCOMPLETUS
</div>
```

---

### 1.3 Systemfehler
Technische Fehler, die selten auftreten.

#### A. Konvertierungsfehler
**Auslöser**: Interner Fehler bei der Konvertierung zwischen römischen und arabischen Zahlen.

**UI-Feedback**:
```
┌─────────────────────────────────────────────────────────────────┐
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                     ✗     │  │
│  │              ERRATA SYSTEMATIS                            │  │
│  │              (Technischer Fehler)                         │  │
│  │                                                     ✗     │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  Bitte starten Sie die Anwendung neu.                          │
└─────────────────────────────────────────────────────────────────┘
```

**Logging**:
```
[2024-01-15T10:30:45.123Z] [ERROR] [CONVERSION_ERROR] [Stack trace]
```

---

## 2. Feedback-Mechanismen

### 2.1 Visuelles Feedback

#### A. Validierungs-Feedback (Echtzeit)
```css
/* Gültige Eingabe */
.display.valid {
  border-color: var(--color-status-success);
  box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.1);
}

/* Ungültige Eingabe */
.display.invalid {
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

#### B. Button-Feedback
```css
/* Hover */
.button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Active/Pressed */
.button:active {
  transform: translateY(1px);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

/* Selected Operation */
.operation-button[aria-pressed="true"] {
  background-color: var(--color-accent-active);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}
```

#### C. Erfolg-Feedback
Nach erfolgreicher Berechnung:
```css
@keyframes success-flash {
  0% {
    box-shadow: 0 0 0 0 rgba(46, 125, 50, 0.6);
  }
  100% {
    box-shadow: 0 0 0 10px rgba(46, 125, 50, 0);
  }
}

.display.success {
  animation: success-flash 0.5s ease-out;
}
```

---

### 2.2 Haptisches Feedback (Touch-Geräte)
```javascript
// Vibration bei Fehlern (wenn unterstützt)
if ('vibrate' in navigator) {
  if (errorType === 'validation') {
    navigator.vibrate(200); // Kurze Vibration
  } else if (errorType === 'calculation') {
    navigator.vibrate([100, 50, 100]); // Doppelte Vibration
  }
}
```

---

### 2.3 Auditives Feedback (Optional, zukünftig)
```javascript
// Sehr leise Bestätigungstöne (optional, standardmäßig deaktiviert)
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playTone(frequency, duration, type = 'sine') {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.type = type;
  oscillator.frequency.value = frequency;
  gainNode.gain.value = 0.05; // Sehr leise
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration / 1000);
}

// Erfolgston
function playSuccessTone() {
  playTone(523.25, 100); // C5
}

// Fehlerston
function playErrorTone() {
  playTone(150, 200, 'sawtooth');
}
```

---

## 3. Fehlermeldungen (Lateinisch)

### Vollständige Liste
| Fehler | Lateinisch | Deutsch |
|--------|------------|---------|
| Ungültiges Zeichen | `ERRATA: CHARACTERUS INVALIDUS` | Ungültiges Zeichen |
| Ungültige römische Zahl | `ERRATA: NUMERUS ROMANUS INVALIDUS` | Ungültige römische Zahl |
| Division durch Null | `DIVISIO PER ZERO` | Division durch Null |
| Ergebnis zu groß | `LIMITUM EXCESSUM` | Grenzwert überschritten |
| Unvollständige Eingabe | `ERRATA: INPUT UNCOMPLETUS` | Unvollständige Eingabe |
| Systemfehler | `ERRATA SYSTEMATIS` | Systemfehler |
| Allgemeiner Fehler | `ERRATA` | Fehler |

### Fehlermeldungs-Component
```html
<!-- Fehlermeldung -->
<div 
  class="error-banner" 
  role="alert" 
  aria-live="assertive"
  data-error-type="validation"
>
  <span class="error-icon">⚠</span>
  <span class="error-text">ERRATA: CHARACTERUS INVALIDUS</span>
  <button class="error-dismiss" aria-label="Fehler schließen">✕</button>
</div>
```

```css
.error-banner {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-status-error);
  color: var(--color-text-inverse);
  padding: var(--spacing-lg) var(--spacing-xl);
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  
  /* Animation */
  animation: slide-down 0.3s ease-out;
}

.error-banner.dismiss {
  animation: slide-up 0.3s ease-out forwards;
}

@keyframes slide-down {
  from {
    transform: translateX(-50%) translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
  to {
    transform: translateX(-50%) translateY(-100%);
    opacity: 0;
  }
}
```

---

## 4. Fehler-Wiederherstellung

### 4.1 Automatische Wiederherstellung
```javascript
// Automatische Rücksetzung nach Fehler
function autoResetAfterError(errorType, delay = 3000) {
  setTimeout(() => {
    if (errorType === 'validation') {
      clearEntry();
      hideError();
    }
  }, delay);
}
```

### 4.2 Manuelle Wiederherstellung
**CLEAR ENTRY** (Escape-Taste):
- Löscht aktuelle Eingabe
- Behält Operation bei
- Bereitet für neue Eingabe vor

**CLEAR** (Reset):
- Löscht alle Eingaben
- Setzt Operation zurück
- Vollständige Rücksetzung

---

## 5. Logging und Monitoring

### 5.1 Log-Format
```
[TIMESTAMP] [LEVEL] [ERROR_CODE] [DETAILS]

Beispiele:
[2024-01-15T10:30:45.123Z] [ERROR] [VALIDATION_ERROR] [X2V]
[2024-01-15T10:30:45.123Z] [ERROR] [DIVISION_BY_ZERO]
[2024-01-15T10:30:45.123Z] [ERROR] [LIMIT_EXCEEDED] [5400]
[2024-01-15T10:30:45.123Z] [ERROR] [CONVERSION_ERROR] [Stack trace]
```

### 5.2 Log-Level
- **INFO**: Berechnungen, Operationswechsel
- **WARNING**: Warnhinweise (z.B. nahe am Limit)
- **ERROR**: Fehlermeldungen

### 5.3 Log-Speicherung
```javascript
// In-Memory Log (für Debugging)
const errorLog = [];

function logError(level, code, details) {
  const entry = {
    timestamp: new Date().toISOString(),
    level,
    code,
    details
  };
  
  errorLog.push(entry);
  
  // Konsolenausgabe (Development)
  if (process.env.NODE_ENV === 'development') {
    console.error(`[${level}] ${code}: ${details}`);
  }
  
  // Limit auf 100 Einträge
  if (errorLog.length > 100) {
    errorLog.shift();
  }
}
```

---

## 6. Fehler-Testfälle

### Test-Suite
```javascript
describe('Fehlerbehandlung', () => {
  // Validierungsfehler
  test('Ungültige Zeichen werden abgelehnt', () => {
    setInput('X2V');
    expect(display).toHaveClass('invalid');
    expect(errorMessage).toContain('ERRATA');
  });
  
  test('Längen-Überschreitung wird abgelehnt', () => {
    setInput('MMMMCMMXCIX'); // 11 Zeichen, aber Test auf 16+
    expect(input.length).toBeLessThanOrEqual(15);
  });
  
  test('Ungültige römische Zahl wird erkannt', () => {
    setInput('IIII');
    expect(display).toHaveClass('invalid');
  });
  
  // Berechnungsfehler
  test('Division durch Null', () => {
    performCalculation('XV', 'DIVIDE', 'NULLUM');
    expect(result).toBe('DIVISIO PER ZERO');
  });
  
  test('Ergebnis > 3999', () => {
    performCalculation('DXL', 'MULTIPLY', 'X');
    expect(result).toBe('LIMITUM EXCESSUM');
  });
  
  // Wiederherstellung
  test('CLEAR ENTRY nach Fehler', () => {
    setInput('X2V');
    pressClearEntry();
    expect(input).toBe('');
    expect(display).not.toHaveClass('invalid');
  });
  
  test('CLEAR nach Fehler', () => {
    setInput('X2V');
    pressClear();
    expect(input).toBe('');
    expect(operation).toBeNull();
  });
});
```

---

## 7. Performance-Anforderungen

### Reaktionszeiten
```
Validierungs-Feedback:    < 50ms
Fehlermeldung anzeigen:   < 100ms
Fehlermeldung ausblenden: < 300ms
Display-Update:           < 50ms
Gesamt-Responsivität:     < 200ms
```

---

**Ende des Fehlerbehandlungs-Dokuments**
