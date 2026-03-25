# User Story 5: Anzeige des Rechenwegs

## Beschreibung
Als Benutzer möchte ich die aktuelle Berechnung als Formel in römischen Zahlen sehen können.

## Akzeptanzkriterien
- Die Formel wird in der Form "XII + V = XVII" angezeigt
- Alle Zahlen in der Anzeige sind römisch
- Die Rechenzeichen sind lateinisch beschriftet (+ → "ET", - → "MINUS", × → "PER", ÷ → "DIVIDITUR")
- Die Anzeige aktualisiert sich bei jeder Eingabe
- Bei Fehler wird die Fehlermeldung statt des Ergebnisses angezeigt

## Technische Anforderungen
- Formatierungsfunktion für die Formelanzeige
- Dynamische Aktualisierung der Anzeige
- Fehlerzustände in der Anzeige berücksichtigen

## Testfälle
1. Eingabe "XII", Operation "ADDERE", Eingabe "V" → Anzeige: "XII ET V ="
2. Nach Berechnung → Anzeige: "XII ET V = XVII"
3. Division durch Null → Anzeige: "ERRATA: DIVISIO PER ZERO"
