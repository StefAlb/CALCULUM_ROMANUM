/**
 * Basis-Typen für CALCULUM ROMANUM
 */

/**
 * Gültige römische Ziffern
 */
export type RomanDigit = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M';

/**
 * Operationstypen (Lateinische Namen)
 */
export type Operation = 'ADDERE' | 'SUBTRAHERE' | 'MULTIPLICARE' | 'DIVIDERE';

/**
 * Status der Eingabevalidierung
 */
export type ValidationStatus = 'VALID' | 'INVALID' | 'EMPTY' | 'INCOMPLETE';

/**
 * Fehlerkategorien
 */
export type ErrorType =
  | 'INVALID_INPUT'
  | 'DIVISION_BY_ZERO'
  | 'LIMIT_EXCEEDED'
  | 'NONE';

/**
 * Hauptzustand des Rechners
 */
export interface CalculatorState {
  /** Aktuelle Eingabe (römische Zahl) */
  input: string;
  /** Erster Operand (nach Operationswahl) */
  operand1: string | null;
  /** Zweiter Operand (aktuelle Eingabe nach Operation) */
  operand2: string | null;
  /** Ausgewählte Operation */
  operation: Operation | null;
  /** Ergebnis (römische Zahl oder Fehlermeldung) */
  result: string | null;
  /** Validierungsstatus */
  validationStatus: ValidationStatus;
  /** Aktuelle Fehlermeldung */
  error: ErrorType;
  /** Historie der letzten Berechnungen */
  history: HistoryEntry[];
  /** Zeigt ob Historie angezeigt wird */
  showHistory: boolean;
}

/**
 * Eintrag in der Historie
 */
export interface HistoryEntry {
  /** Erster Operand */
  operand1: string;
  /** Operation */
  operation: Operation;
  /** Zweiter Operand */
  operand2: string;
  /** Ergebnis */
  result: string;
  /** Zeitstempel */
  timestamp: Date;
}

/**
 * Konfiguration der Anwendung
 */
export interface AppConfig {
  /** Maximale Länge der Eingabe */
  maxInputLength: number;
  /** Maximale Zahl für römische Darstellung */
  maxRomanValue: number;
  /** Maximale Anzahl der Historie-Einträge */
  maxHistoryEntries: number;
  /** Performance-Thresholds in ms */
  performanceThresholds: {
    calculation: number;
    liveUpdate: number;
    initialRender: number;
    historyLoad: number;
  };
}

/**
 * Standardkonfiguration
 */
export const DEFAULT_CONFIG: AppConfig = {
  maxInputLength: 15,
  maxRomanValue: 3999,
  maxHistoryEntries: 10,
  performanceThresholds: {
    calculation: 100,
    liveUpdate: 50,
    initialRender: 200,
    historyLoad: 100,
  },
};
