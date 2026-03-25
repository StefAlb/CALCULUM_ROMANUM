# User Story 2: Auswahl der Grundrechenart

## Beschreibung
Als Benutzer möchte ich zwischen den vier Grundrechenarten (Addition, Subtraktion, Multiplikation, Division) wählen können.

## Akzeptanzkriterien
- Vier klar beschriftete Buttons für die Grundrechenarten sind vorhanden
- Die Beschriftungen sind in Latein: "ADDERE", "SUBTRAHERE", "MULTIPLICARE", "DIVIDERE"
- Die ausgewählte Operation wird visuell hervorgehoben
- Vor der Eingabe des zweiten Operanden kann die Operation gewechselt werden
- Nach dem Ausführen einer Berechnung kann eine neue Operation gewählt werden

## Technische Anforderungen
- Button-Klassen für visuelles Feedback
- State-Management für die aktuelle Operation
- Lateinische Beschriftungen als Konstanten definiert

## Testfälle
1. Klick auf "ADDERE" → Operation wird auf Addition gesetzt
2. Klick auf "SUBTRAHERE" → Operation wird auf Subtraktion gesetzt
3. Klick auf "MULTIPLICARE" → Operation wird auf Multiplikation gesetzt
4. Klick auf "DIVIDERE" → Operation wird auf Division gesetzt
5. Wechsel der Operation vor Eingabe des zweiten Operanden → Neue Operation wird übernommen
