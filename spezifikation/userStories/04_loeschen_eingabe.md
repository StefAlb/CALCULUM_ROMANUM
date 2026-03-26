# User Story 4: Löschen der Eingabe

## Beschreibung
Als Benutzer möchte ich die aktuelle Eingabe oder das gesamte Rechner-Display löschen können.

## Akzeptanzkriterien
- Ein "CLEAR"-Button löscht alle Eingaben und setzt den Rechner zurück
- Ein "CLEAR ENTRY"-Button löscht nur den aktuellen Eingabewert
- Nach dem Löschen ist der Rechner bereit für neue Eingaben
- Die Lateinischen Beschriftungen bleiben erhalten ("CLEAR", "CLEAR ENTRY")
- Escape-Taste löscht den aktuellen Eingabewert (CLEAR ENTRY Verhalten)
- Buttons sind über Tastatur bedienbar
- Löschen-aktionen sind für Screenreader ankündbar

## Technische Anforderungen
- State-Reset-Funktion für vollständiges Löschen
- Teilweises Löschen des aktuellen Operanden
- UI-Update nach Löschen
- Keyboard-Event-Handler für Escape-Taste
- ARIA-Labels für Buttons (aria-label mit lateinischer Beschriftung)
- Logging: Löschen-Aktionen werden protokolliert im Format "[TIMESTAMP] [INFO] [CLEAR_ACTION] [TYPE]" (TYPE: FULL oder ENTRY)

## Testfälle
1. Nach Eingabe von "XII" und Klick auf "CLEAR ENTRY" → Eingabefeld ist leer
2. Nach Berechnung und Klick auf "CLEAR" → Alle Werte und Operationen werden zurückgesetzt
3. Mehrfaches Klicken auf "CLEAR" → Keine Fehler, bleibt leer
4. Escape-Taste drücken → Aktuelle Eingabe wird gelöscht
5. Tastatur: Tab zu Clear-Button, Enter drücken → Funktioniert wie Klick
6. Screenreader gibt korrekte Label-Aussage nach Löschen aus
