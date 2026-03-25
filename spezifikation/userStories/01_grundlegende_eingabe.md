# User Story 1: Grundlegende Eingabe römischer Zahlen

## Beschreibung
Als Benutzer möchte ich römische Zahlen (I, V, X, L, C, D, M) in das Rechner-Feld eingeben können, um damit Berechnungen durchzuführen.

## Akzeptanzkriterien
- Das Eingabefeld akzeptiert nur gültige römische Ziffern (I, V, X, L, C, D, M)
- Die Eingabe ist case-insensitive (i und I werden gleich behandelt)
- Ungültige Zeichen werden sofort abgelehnt oder hervorgehoben
- Die maximale Länge der Eingabe ist auf 15 Zeichen begrenzt (entspricht etwa 3999)
- Die Eingabe wird sofort in Echtzeit validiert

## Technische Anforderungen
- Eingabevalidierung durch regulären Ausdruck
- Echtzeit-Feedback bei ungültiger Eingabe
- Automatische Umwandlung in Großbuchstaben bei der Anzeige

## Testfälle
1. Gültige Eingabe: "XII" → Wird akzeptiert
2. Gültige Eingabe: "mcmxciv" → Wird akzeptiert und zu "MCMXCIV" konvertiert
3. Ungültige Eingabe: "123" → Wird abgelehnt
4. Ungültige Eingabe: "ABC" → Wird abgelehnt
5. Gemischte Eingabe: "X2V" → Wird abgelehnt
