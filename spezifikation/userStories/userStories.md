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

---

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

---

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

## Technische Anforderungen
- Konvertierungsfunktion: Römisch → Arabisch
- Rechenoperationen auf arabischen Zahlen
- Konvertierungsfunktion: Arabisch → Römisch
- Fehlerbehandlung für ungültige Eingaben und Grenzfälle

## Testfälle
1. XII + V → XVII
2. XX - VIII → XII
3. IV × III → XII
4. XV ÷ III → V
5. Ungültige Eingabe → "ERRATA INPUT"
6. Division durch Null → "DIVISIO PER ZERO"
7. Ergebnis > 3999 → "LIMITUM EXCESSUM"

---

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

---

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

---

# User Story 6: Fenster- und UI-Design

## Beschreibung
Als Benutzer möchte ich eine benutzerfreundliche Desktop-Anwendung mit klarem Layout und lateinischen Beschriftungen.

## Akzeptanzkriterien
- Das Anwendungsfenster hat den Titel "CALCULUM ROMANUM"
- Alle Buttons und Labels sind in Latein beschriftet
- Das Layout ist übersichtlich und intuitiv
- Die Schriftart ist gut lesbar
- Das Fenster ist in der Größe veränderbar (optional: festes Mindestfenster)
- Dunkles/Helles Theme ist möglich (optional)

## Technische Anforderungen
- Desktop-Framework (z.B. Electron, Tauri, oder nativ)
- Responsive Layout
- Lateinische UI-Texte als Ressource-Datei oder Konstanten
- Windows-kompatibles Executable

## Testfälle
1. Anwendung starten → Titel "CALCULUM ROMANUM" ist sichtbar
2. Alle UI-Elemente haben lateinische Beschriftungen
3. Fenster ist auf Windows 10/11 startbar

---

# User Story 7: Historie der Berechnungen

## Beschreibung
Als Benutzer möchte ich meine letzten Berechnungen einsehen können.

## Akzeptanzkriterien
- Eine Historien-Liste zeigt die letzten 10 Berechnungen
- Jede Historie-Eintrag zeigt: "XII + V = XVII"
- Die Historie wird beim Schließen der App gelöscht (optional: persistent speichern)
- Ein "HISTORIA"-Button oder Bereich zeigt die Historie
- Klick auf einen Historie-Eintrag kann diesen in die aktuelle Berechnung laden (optional)

## Technische Anforderungen
- Array/Liste für Historie-Speicherung
- Limitierung auf 10 Einträge
- UI-Komponente für Historie-Anzeige
- Optional: Serialisierung für Persistenz

## Testfälle
1. Nach 3 Berechnungen → Historie zeigt 3 Einträge
2. Nach 15 Berechnungen → Historie zeigt nur die letzten 10
3. App neu starten → Historie ist leer (wenn nicht persistent)

---

# Review und Konsistenzprüfung

## Testbarkeit
Alle User Stories enthalten spezifische Testfälle, die automatisch oder manuell ausführbar sind. Die Akzeptanzkriterien sind messbar und überprüfbar.

## Konsistenz
- Alle UI-Beschriftungen sind durchgehend in Latein
- Technische Implementierung ist in Englisch dokumentiert
- User Stories und Spezifikationen sind in Deutsch
- Die Grenzen der Anwendung (3999 als Maximum) sind konsistent definiert
- Fehlermeldungen sind einheitlich in Latein gehalten

## Abhängigkeiten
1. User Story 1 (Eingabe) ist Voraussetzung für alle anderen Stories
2. User Story 2 (Operation) ist Voraussetzung für User Story 3 (Berechnung)
3. User Story 3 ist Voraussetzung für User Story 5 (Anzeige) und 7 (Historie)
4. User Story 6 (UI-Design) kann parallel entwickelt werden
5. User Story 4 (Löschen) ist unabhängig, aber empfohlen für gute UX

## Empfohlene Reihenfolge der Implementierung
1. User Story 1 - Grundlegende Eingabe
2. User Story 2 - Auswahl der Rechenart
3. User Story 3 - Durchführung der Berechnung
4. User Story 4 - Löschen der Eingabe
5. User Story 5 - Anzeige des Rechenwegs
6. User Story 6 - Fenster- und UI-Design
7. User Story 7 - Historie der Berechnungen
