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
