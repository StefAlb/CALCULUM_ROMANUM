# User Story 1: Grundlegende Eingabe römischer Zahlen

## Beschreibung
Als Benutzer möchte ich römische Zahlen (I, V, X, L, C, D, M) in das Rechner-Feld eingeben können, um damit Berechnungen durchzuführen.

## Akzeptanzkriterien
- Das Eingabefeld akzeptiert nur gültige römische Ziffern (I, V, X, L, C, D, M)
- Die Eingabe ist case-insensitive (i und I werden gleich behandelt)
- Ungültige Zeichen werden sofort abgelehnt oder hervorgehoben
- Die maximale Länge der Eingabe ist auf 15 Zeichen begrenzt (entspricht etwa 3999)
- Die Eingabe wird sofort in Echtzeit validiert
- Tastatureingabe wird unterstützt (Buchstaben A-Z, case-insensitive)
- Ungültige Tastatureingaben werden nicht akzeptiert (Prevent Default)

## Technische Anforderungen
- Eingabevalidierung durch regulären Ausdruck
- Echtzeit-Feedback bei ungültiger Eingabe (< 50ms Reaktionszeit)
- Automatische Umwandlung in Großbuchstaben bei der Anzeige
- Tastatureingabe-Event-Handler mit Validierung
- Barrierefreiheit: Eingabefeld ist über Tab-Taste erreichbar und hat korrekte ARIA-Labels

## Testfälle
1. Gültige Eingabe: "XII" → Wird akzeptiert
2. Gültige Eingabe: "mcmxciv" → Wird akzeptiert und zu "MCMXCIV" konvertiert
3. Ungültige Eingabe: "123" → Wird abgelehnt
4. Ungültige Eingabe: "ABC" → Wird abgelehnt
5. Gemischte Eingabe: "X2V" → Wird abgelehnt
6. Tastatureingabe "x" → Wird zu "X" konvertiert und akzeptiert
7. Tastatureingabe "1" → Wird nicht akzeptiert (kein Input)
8. Eingabe mit 16. Zeichen → Wird abgelehnt (Längenlimit)
9. Tab-Navigation zum Eingabefeld → Fokus wird gesetzt (Barrierefreiheit)
