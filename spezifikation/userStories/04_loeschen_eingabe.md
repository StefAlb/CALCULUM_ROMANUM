# User Story 4: Löschen der Eingabe

## Beschreibung
Als Benutzer möchte ich die aktuelle Eingabe oder das gesamte Rechner-Display löschen können.

## Akzeptanzkriterien
- Ein "CLEAR"-Button löscht alle Eingaben und setzt den Rechner zurück
- Ein "CLEAR ENTRY"-Button löscht nur den aktuellen Eingabewert
- Nach dem Löschen ist der Rechner bereit für neue Eingaben
- Die Lateinischen Beschriftungen bleiben erhalten ("CLEAR", "CLEAR ENTRY")

## Technische Anforderungen
- State-Reset-Funktion für vollständiges Löschen
- Teilweises Löschen des aktuellen Operanden
- UI-Update nach Löschen

## Testfälle
1. Nach Eingabe von "XII" und Klick auf "CLEAR ENTRY" → Eingabefeld ist leer
2. Nach Berechnung und Klick auf "CLEAR" → Alle Werte und Operationen werden zurückgesetzt
3. Mehrfaches Klicken auf "CLEAR" → Keine Fehler, bleibt leer
