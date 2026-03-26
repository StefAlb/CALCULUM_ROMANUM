/**
 * Logging Service
 * Zentrales Logging mit einheitlichem Format
 * Format: [TIMESTAMP] [LEVEL] [TYPE] [MESSAGE]
 */

import { LogLevel, LogType, formatLogMessage } from '@common/constants';

class LoggerClass {
  private devMode: boolean;

  constructor() {
    // Dev-Mode automatisch erkennen
    this.devMode = import.meta.env.DEV;
  }

  /**
   * Loggt eine INFO-Nachricht
   */
  logInfo(type: LogType, message: string): void {
    this.log(LogLevel.INFO, type, message);
  }

  /**
   * Loggt eine WARN-Nachricht
   */
  logWarn(type: LogType, message: string): void {
    this.log(LogLevel.WARN, type, message);
  }

  /**
   * Loggt eine ERROR-Nachricht
   */
  logError(type: LogType, message: string): void {
    this.log(LogLevel.ERROR, type, message);
  }

  /**
   * Loggt eine DEBUG-Nachricht (nur im Dev-Mode)
   */
  logDebug(type: LogType, message: string): void {
    if (this.devMode) {
      this.log(LogLevel.DEBUG, type, message);
    }
  }

  /**
   * Interner Log-Method
   */
  private log(level: LogLevel, type: LogType, message: string): void {
    const logMessage = formatLogMessage(level, type, message);

    // Console-Logging (immer)
    switch (level) {
      case LogLevel.DEBUG:
        console.debug(logMessage);
        break;
      case LogLevel.INFO:
        console.info(logMessage);
        break;
      case LogLevel.WARN:
        console.warn(logMessage);
        break;
      case LogLevel.ERROR:
        console.error(logMessage);
        break;
    }

    // Datei-Logging im Dev-Mode (optional, später mit tauri-plugin-log erweitern)
    if (this.devMode && level !== LogLevel.DEBUG) {
      // Hier könnte später tauri-plugin-log integriert werden
      // Für jetzt nur Console
    }
  }

  /**
   * Setzt den Dev-Mode (für Tests)
   */
  setDevMode(enabled: boolean): void {
    this.devMode = enabled;
  }
}

// Singleton-Instanz
export const Logger = new LoggerClass();

// Export für Testing
export { LoggerClass };
