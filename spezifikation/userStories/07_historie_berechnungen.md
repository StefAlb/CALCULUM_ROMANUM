# User Story 7: Historie der Berechnungen

## Beschreibung
Als Benutzer möchte ich meine letzten Berechnungen einsehen können.

## Akzeptanzkriterien
- Eine Historien-Liste zeigt die letzten 10 Berechnungen
- Jede Historie-Eintrag zeigt: "XII + V = XVII"
- Die Historie wird beim Schließen der App gelöscht (optional: persistent speichern)
- Ein "HISTORIA"-Button oder Bereich zeigt die Historie
- Klick auf einen Historie-Eintrag kann diesen in die aktuelle Berechnung laden (optional)
- Historie-Liste ist über Tastatur bedienbar (Pfeiltasten zur Navigation)
- Historie-Elemente haben korrekte ARIA-Labels für Screenreader
- Ladezeit der Historie < 100ms

## Technische Anforderungen
- Array/Liste für Historie-Speicherung
- Limitierung auf 10 Einträge
- UI-Komponente für Historie-Anzeige
- Optional: Serialisierung für Persistenz
- Keyboard-Event-Handler für Pfeiltasten-Navigation
- ARIA-Labels für Historie-Liste (role="list", role="listitem")
- Performance: Historie-Ladezeit < 100ms
- Fehler-Logging bei Historie-Zugriffsfehlern

## Testfälle
1. Nach 3 Berechnungen → Historie zeigt 3 Einträge
2. Nach 15 Berechnungen → Historie zeigt nur die letzten 10
3. App neu starten → Historie ist leer (wenn nicht persistent)
4. Tastatur: Pfeiltasten in Historie-Navigation → Fokus bewegt sich
5. Enter-Taste auf Historie-Eintrag → Wird in aktuelle Berechnung geladen
6. Historie-Ladezeit messen → < 100ms
7. Screenreader liest Historie-Liste korrekt vor
