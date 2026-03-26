/**
 * History Service
 * In-Memory-Historie für Berechnungen (keine Persistenz)
 */

import { HistoryEntry, Operation } from '@types';
import { MAX_HISTORY_ENTRIES } from '@common/constants';
import { Logger } from './logging';

class HistoryServiceClass {
  private history: HistoryEntry[];
  private maxEntries: number;

  constructor() {
    this.history = [];
    this.maxEntries = MAX_HISTORY_ENTRIES;
  }

  /**
   * Fügt einen neuen Eintrag zur Historie hinzu
   * @param operand1 - Erster Operand
   * @param operation - Operation
   * @param operand2 - Zweiter Operand
   * @param result - Ergebnis
   */
  add(
    operand1: string,
    operation: Operation,
    operand2: string,
    result: string,
  ): void {
    const startTime = performance.now();

    const entry: HistoryEntry = {
      operand1,
      operation,
      operand2,
      result,
      timestamp: new Date(),
    };

    // Neuen Eintrag an den Anfang hinzufügen
    this.history.unshift(entry);

    // Auf maximale Anzahl begrenzen
    if (this.history.length > this.maxEntries) {
      this.history = this.history.slice(0, this.maxEntries);
    }

    const duration = performance.now() - startTime;
    if (duration > 10) {
      Logger.logWarn('PERFORMANCE', `History.add took ${duration.toFixed(2)}ms`);
    }
  }

  /**
   * Gibt alle Historie-Einträge zurück
   * @returns Array aller Einträge (neueste zuerst)
   */
  getAll(): HistoryEntry[] {
    const startTime = performance.now();

    const result = [...this.history];

    const duration = performance.now() - startTime;
    if (duration > 100) {
      Logger.logWarn('PERFORMANCE', `History.getAll took ${duration.toFixed(2)}ms`);
    }

    return result;
  }

  /**
   * Löscht alle Historie-Einträge
   */
  clear(): void {
    this.history = [];
    Logger.logInfo('CLEAR_ACTION', 'History cleared');
  }

  /**
   * Gibt die Anzahl der aktuellen Einträge zurück
   * @returns Anzahl der Einträge
   */
  getCount(): number {
    return this.history.length;
  }

  /**
   * Prüft ob die Historie leer ist
   * @returns true wenn leer
   */
  isEmpty(): boolean {
    return this.history.length === 0;
  }

  /**
   * Löscht einen bestimmten Eintrag aus der Historie
   * @param index - Index des Eintrags (0 = neuester)
   */
  removeAt(index: number): void {
    if (index >= 0 && index < this.history.length) {
      this.history.splice(index, 1);
    }
  }
}

// Singleton-Instanz
export const HistoryService = new HistoryServiceClass();

// Export für Testing
export { HistoryServiceClass };
