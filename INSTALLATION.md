# Installationsanleitung für CALCULUM ROMANUM

Diese Anleitung führt dich durch die Installation der notwendigen Tools und das Starten der Anwendung.

## Voraussetzungen

Um diese Anwendung auszuführen, benötigst du folgende Software:

### 1. Node.js und npm installieren

**Node.js** enthält sowohl die JavaScript-Laufzeitumgebung als auch **npm** (Node Package Manager).

#### Für Windows:
1. Gehe zu [https://nodejs.org/](https://nodejs.org/)
2. Lade die **LTS-Version** (Long Term Support) herunter (empfohlen: Node.js 18.x oder 20.x)
3. Führe den Installer aus und folge den Anweisungen
4. Bestätige mit "Next" und akzeptiere die Lizenzbedingungen
5. Nach der Installation: Öffne eine neue Eingabeaufforderung (cmd) oder PowerShell

#### Für macOS:
**Option A: Über den Installer**
1. Gehe zu [https://nodejs.org/](https://nodejs.org/)
2. Lade die **LTS-Version** für macOS herunter
3. Führe die `.pkg`-Datei aus und folge den Anweisungen

**Option B: Über Homebrew (empfohlen)**
```bash
# Homebrew installieren (falls nicht vorhanden)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Node.js installieren
brew install node
```

#### Für Linux (Ubuntu/Debian):
```bash
# Node.js Repository hinzufügen
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# Node.js installieren
sudo apt-get install -y nodejs
```

### 2. Installation überprüfen

Öffne ein Terminal (Eingabeaufforderung, PowerShell, oder Terminal) und führe aus:

```bash
node --version
npm --version
```

Du solltest Versionsnummern sehen, z.B.:
```
v20.10.0
10.2.3
```

### 3. Rust installieren (für Tauri)

Da dies eine Tauri-Anwendung ist, wird **Rust** benötigt:

#### Für Windows:
1. Gehe zu [https://rustup.rs/](https://rustup.rs/)
2. Lade `rustup-init.exe` herunter
3. Führe es aus und folge den Anweisungen
4. **Wichtig:** Installiere auch den "Desktop-Entwicklung für C++"-Workload über Visual Studio Build Tools (wird vom Installer empfohlen)

#### Für macOS:
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
```

#### Für Linux (Ubuntu/Debian):
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env

# Zusätzliche Abhängigkeiten installieren
sudo apt install build-essential pkg-config libgtk-3-dev libwebkit2gtk-4.0-dev libappindicator3-dev librsvg2-dev
```

### 4. Projekt-Dependencies installieren

Nachdem Node.js und Rust installiert sind:

```bash
# In das Projektverzeichnis navigieren (falls nicht bereits dort)
cd pfad/zum/projekt

# Alle Dependencies installieren
npm install
```

Dies kann einige Minuten dauern, da viele Pakete heruntergeladen werden.

### 5. Anwendung starten

#### Für die Entwicklung:
```bash
npm run tauri:dev
```

Dies startet die Anwendung im Entwicklungsmodus mit Hot-Reload.

#### Für einen Production-Build:
```bash
npm run tauri:build
```

Der fertige Installer befindet sich danach in `src-tauri/target/release/bundle/`.

## Häufige Probleme

### Problem: "npm ist nicht erkannt"
**Lösung:** Stelle sicher, dass Node.js korrekt installiert ist und das Terminal neu gestartet wurde. Überprüfe mit `node --version` und `npm --version`.

### Problem: "Rust ist nicht installiert"
**Lösung:** Folge den oben genannten Schritten zur Rust-Installation. Nach der Installation das Terminal neu starten.

### Problem: Fehlende System-Abhängigkeiten (Linux)
**Lösung:** Installiere die erforderlichen Development-Pakete (siehe Linux-Installation oben).

### Problem: "Permission denied" beim Installieren globaler Pakete
**Lösung:** Verwende `sudo` vor dem Befehl oder konfiguriere npm, um globale Pakete ohne sudo zu installieren.

## Alternative: Verwendung von nvm (Node Version Manager)

Für Entwickler, die mehrere Node.js-Versionen verwalten möchten:

```bash
# nvm installieren (Linux/macOS)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Node.js installieren
nvm install --lts
nvm use --lts

# Überprüfen
node --version
npm --version
```

## Nächste Schritte

Nach erfolgreicher Installation:

1. **Entwicklungsmodus starten:** `npm run tauri:dev`
2. **Tests ausführen:** `npm run test` oder `npm run test:unit`
3. **Linting:** `npm run lint`
4. **Code formatieren:** `npm run format`

## Weitere Informationen

- [Node.js Dokumentation](https://nodejs.org/docs/latest/api/)
- [Rust Dokumentation](https://doc.rust-lang.org/book/)
- [Tauri Dokumentation](https://tauri.app/v1/guides/getting-started/prerequisites)
- [npm Dokumentation](https://docs.npmjs.com/)

---

**CALCULUM ROMANUM** - MMXXIV
