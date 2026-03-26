# User Story 3: Durchführung einer Berechnung

## Beschreibung
Als Benutzer möchte ich nach Eingabe zweier römischer Zahlen und Auswahl einer Rechenart das Ergebnis berechnen lassen.

## Akzeptanzkriterien
- Ein "CALCULARE"-Button löst die Berechnung aus
- Das Ergebnis wird als römische Zahl angezeigt
- Bei ungültigen Eingaben wird eine Fehlermeldung in Latein angezeigt ("ERRATA INPUT")
- Bei Division durch Null wird eine entsprechende Fehlermeldung angezeigt ("DIVISIO PER ZERO")
- Das Ergebnis darf nicht größer als 3999 sein (oberes Limit römischer Zahlen)
- Bei Überschreitung des Limits wird "LIMITUM EXCESSUM" angezeigt
- Berechnung erfolgt innerhalb von 100ms
- Enter-Taste im Eingabefeld löst Berechnung aus (wenn beide Operanden und Operation vorhanden)
- Fehlermeldungen sind für Screenreader lesbar (ARIA live regions)

## Technische Anforderungen
- Konvertierungsfunktion: Römisch → Arabisch
- Rechenoperationen auf arabischen Zahlen
- Konvertierungsfunktion: Arabisch → Römisch
- Fehlerbehandlung für ungültige Eingaben und Grenzfälle
- Performance: Berechnung muss < 100ms dauern (inklusive Konvertierung)
- Keyboard-Event-Handler für Enter-Taste
- ARIA live region für dynamische Fehlermeldungen
- Logging: Berechnungen und Fehler werden protokolliert im Format "[TIMESTAMP] [LEVEL] [MESSAGE]"
  - INFO: [TIMESTAMP] [INFO] [CALCULATION] [OPERAND1] [OPERATOR] [OPERAND2] = [RESULT]
  - ERROR: [TIMESTAMP] [ERROR] [DIVISION_BY_ZERO]
  - ERROR: [TIMESTAMP] [ERROR] [LIMIT_EXCEEDED]
  - ERROR: [TIMESTAMP] [ERROR] [INVALID_INPUT] [INPUT]

## Testfälle
1. XII + V → XVII
2. XX - VIII → XII
3. IV × III → XII
4. XV ÷ III → V
5. Ungültige Eingabe → "ERRATA INPUT"
6. Division durch Null → "DIVISIO PER ZERO"
7. Ergebnis > 3999 → "LIMITUM EXCESSUM"
8. Berechnungszeit messen → < 100ms
9. Enter-Taste drücken bei vollständiger Eingabe → Berechnung wird ausgelöst
10. Fehlermeldung wird für Screenreader ausgegeben (ARIA live region)
