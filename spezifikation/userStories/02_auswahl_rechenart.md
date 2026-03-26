# User Story 2: Auswahl der Grundrechenart

## Beschreibung
Als Benutzer möchte ich zwischen den vier Grundrechenarten (Addition, Subtraktion, Multiplikation, Division) wählen können.

## Akzeptanzkriterien
- Vier klar beschriftete Buttons für die Grundrechenarten sind vorhanden
- Die Beschriftungen sind in Latein: "ADDERE", "SUBTRAHERE", "MULTIPLICARE", "DIVIDERE"
- Die ausgewählte Operation wird visuell hervorgehoben
- Vor der Eingabe des zweiten Operanden kann die Operation gewechselt werden
- Nach dem Ausführen einer Berechnung kann eine neue Operation gewählt werden
- Buttons sind über Tastatur (Tab + Enter/Space) bedienbar
- Visueller Fokus-Indikator für Tastaturnavigation vorhanden

## Technische Anforderungen
- Button-Klassen für visuelles Feedback
- State-Management für die aktuelle Operation
- Lateinische Beschriftungen als Konstanten definiert
- Keyboard-Event-Handler für Button-Interaktion
- ARIA-Labels für Screenreader (role="button", aria-pressed für ausgewählten Zustand)
- Logging: Operationswechsel werden protokolliert im Format "[TIMESTAMP] [INFO] [OPERATION_CHANGED] [OPERATION]"

## Testfälle
1. Klick auf "ADDERE" → Operation wird auf Addition gesetzt
2. Klick auf "SUBTRAHERE" → Operation wird auf Subtraktion gesetzt
3. Klick auf "MULTIPLICARE" → Operation wird auf Multiplikation gesetzt
4. Klick auf "DIVIDERE" → Operation wird auf Division gesetzt
5. Wechsel der Operation vor Eingabe des zweiten Operanden → Neue Operation wird übernommen
6. Tastatur: Tab zu Button, Enter drücken → Operation wird gesetzt
7. Tastatur: Space-Taste auf Button → Operation wird gesetzt
8. Visueller Fokus-Indikator ist bei Tastaturnavigation sichtbar
