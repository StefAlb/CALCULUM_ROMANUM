# User Story 5: Anzeige des Rechenwegs

## Beschreibung
Als Benutzer möchte ich die aktuelle Berechnung als Formel in römischen Zahlen sehen können.

## Akzeptanzkriterien
- Die Formel wird in der Form "XII + V = XVII" angezeigt
- Alle Zahlen in der Anzeige sind römisch
- Die Rechenzeichen sind lateinisch beschriftet (+ → "ET", - → "MINUS", × → "PER", ÷ → "DIVIDITUR")
- Die Anzeige aktualisiert sich bei jeder Eingabe
- Bei Fehler wird die Fehlermeldung statt des Ergebnisses angezeigt
- Anzeige-Update erfolgt innerhalb von 50ms
- Die Anzeige ist für Screenreader zugänglich (ARIA live region oder korrekte Label)

## Technische Anforderungen
- Formatierungsfunktion für die Formelanzeige
- Dynamische Aktualisierung der Anzeige
- Fehlerzustände in der Anzeige berücksichtigen
- Performance: Update muss < 50ms dauern
- ARIA live region für dynamische Inhaltsänderungen
- Korrekte semantische HTML-Struktur für Screenreader
- Logging: UI-Updates werden nicht protokolliert (nur bei Fehlern: "[TIMESTAMP] [ERROR] [UI_UPDATE_ERROR] [MESSAGE]")

## Testfälle
1. Eingabe "XII", Operation "ADDERE", Eingabe "V" → Anzeige: "XII ET V ="
2. Nach Berechnung → Anzeige: "XII ET V = XVII"
3. Division durch Null → Anzeige: "ERRATA: DIVISIO PER ZERO"
4. Anzeige-Updatezeit messen → < 50ms
5. Screenreader liest aktualisierte Formel vor (ARIA live region)
