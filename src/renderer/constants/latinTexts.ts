/**
 * Lateinische UI-Texte für CALCULUM ROMANUM
 * Alle sichtbaren Texte in der Anwendung
 */

export const LatinTexts = {
  // Anwendungstitel
  TITLE: 'CALCULUM ROMANUM',
  APP_DESCRIPTION: 'CALCULUM ROMANUM - Expecta... Inceptionem incepto.',
  FOOTER_TEXT: '© MMXXIV CALCULUM ROMANUM',

  // Eingabefelder
  INPUT_LABEL: 'Numerus Romanus',
  INPUT_PLACEHOLDER: 'Hic inscribe...',

  // Operationen (Lateinische Verben)
  OPERATION_ADD: 'ADDERE',
  OPERATION_SUBTRACT: 'SUBTRAHERE',
  OPERATION_MULTIPLY: 'MULTIPLICARE',
  OPERATION_DIVIDE: 'DIVIDERE',

  // Buttons
  BUTTON_CALCULATE: 'CALCULARE',
  BUTTON_CLEAR: 'CLEAR',
  BUTTON_CLEAR_ENTRY: 'CLEAR ENTRY',
  BUTTON_HISTORY: 'HISTORIA',
  BUTTON_CLOSE: 'CLAUDERE',
  BUTTON_LOAD: 'CUMULARE',

  // Anzeige & Ergebnisse
  FORMULA_SEPARATOR: 'ET',
  FORMULA_MINUS: 'MINUS',
  FORMULA_MULTIPLY: 'PER',
  FORMULA_DIVIDE: 'DIVIDITUR',
  EQUALS_SIGN: '=',

  // Fehlermeldungen
  ERROR_INVALID_INPUT: 'ERRATA INPUT',
  ERROR_DIVISION_BY_ZERO: 'DIVISIO PER ZERO',
  ERROR_LIMIT_EXCEEDED: 'LIMITUM EXCESSUM',
  ERROR_GENERAL: 'ERRATA',

  // Historie
  HISTORY_TITLE: 'HISTORIA CALCULATIONUM',
  HISTORY_EMPTY: 'Nulla calculationes adhuc',
  HISTORY_LOAD_HINT: 'Tange ut cumulaveris',

  // Accessibility Labels
  ARIA_INPUT: 'Eingabe römischer Zahl',
  ARIA_OPERATION_BUTTON: 'Operation wählen: ',
  ARIA_CALCULATE: 'Berechnung ausführen',
  ARIA_CLEAR: 'Alle Eingaben löschen',
  ARIA_CLEAR_ENTRY: 'Aktuelle Eingabe löschen',
  ARIA_HISTORY: 'Berechnungshistorie anzeigen',
  ARIA_RESULT: 'Berechnungsergebnis',
  ARIA_ERROR: 'Fehlermeldung',

  // Statusnachrichten
  STATUS_READY: 'Paratus sum',
  STATUS_CALCULATING: 'Computo...',
  STATUS_COMPLETE: 'Perfectum',

  // Tooltips
  TOOLTIP_INPUT_HINT: 'Scribe numerum Romanum (max. XV signa)',
  TOOLTIP_OPERATION_HINT: 'Elige operationem',

  // Dialoge & Modals
  DIALOG_HISTORY_TITLE: 'HISTORIA',
  DIALOG_CONFIRM: 'CONFIRMARE',
  DIALOG_CANCEL: 'CANCELARE',
} as const;

/**
 * Operatoren für die Formelanzeige
 */
export const OperationSymbols = {
  ADD: 'ET',
  SUBTRACT: 'MINUS',
  MULTIPLY: 'PER',
  DIVIDE: 'DIVIDITUR',
} as const;

/**
 * Fehlercodes für Lateinische Meldungen
 */
export const ErrorMessages = {
  INVALID_INPUT: LatinTexts.ERROR_INVALID_INPUT,
  DIVISION_BY_ZERO: LatinTexts.ERROR_DIVISION_BY_ZERO,
  LIMIT_EXCEEDED: LatinTexts.ERROR_LIMIT_EXCEEDED,
  GENERAL: LatinTexts.ERROR_GENERAL,
} as const;
