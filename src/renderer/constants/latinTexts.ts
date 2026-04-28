/**
 * Lateinische UI-Texte für CALCULUM ROMANUM
 * Alle sichtbaren Texte in der Anwendung
 * Gemäß UI-Spezifikation 03_design_system.md
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
  BUTTON_CLEAR: 'DELE',
  BUTTON_CLEAR_ENTRY: 'DELE HANC',
  BUTTON_HISTORY: 'HISTORIA',
  BUTTON_HISTORY_CLOSE: 'CLAUDE',
  BUTTON_CLOSE: 'CLAUDERE',
  BUTTON_LOAD: 'CUMULARE',

  // Number Button Labels (Lateinische Namen unter den Ziffern)
  LABEL_ADDERE: 'ADDERE',
  LABEL_SUBTRAHERE: 'SUBTRAH',
  LABEL_MULTIPLICARE: 'MULTIPL',
  LABEL_DIVIDERE: 'DIVID',

  // Anzeige & Ergebnisse
  FORMULA_SEPARATOR: 'ET',
  FORMULA_MINUS: 'MINUS',
  FORMULA_MULTIPLY: 'PER',
  FORMULA_DIVIDE: 'DIVIDITUR',
  EQUALS_SIGN: '=',

  // Fehlermeldungen
  ERROR_INVALID_INPUT: 'ERRATA INPUT',
  ERROR_INVALID_ROMAN: 'ERRATA: Numerus Romanus Invalidus',
  ERROR_DIVISION_BY_ZERO: 'DIVISIO PER ZERO',
  ERROR_LIMIT_EXCEEDED: 'LIMITUM EXCESSUM',
  ERROR_GENERAL: 'ERRATA',

  // Historie
  HISTORY_TITLE: 'HISTORIA CALCULATIONUM',
  HISTORY_EMPTY: 'Nulla calculationes adhuc',
  HISTORY_LOAD_HINT: 'Tange ut cumulaveris',

  // Accessibility Labels (Latein)
  ARIA_INPUT: 'Numerum Romanum inscribe',
  ARIA_INPUT_FIELD: 'Numerum Romanum inscribe',
  ARIA_NUMBER_BUTTONS: 'Digiti',
  ARIA_OPERATION_BUTTON: 'Operationem elige',
  ARIA_CALCULATE: 'Calculationem perfice',
  ARIA_CLEAR: 'Omnes entradas dele',
  ARIA_CLEAR_ENTRY: 'Entradam currentem dele',
  ARIA_HISTORY: 'Historiam calculationum',
  ARIA_RESULT: 'Resultatum calculationis',
  ARIA_ERROR: 'Nuntius erroris',
  ARIA_EMPTY: 'Vacuum',
  ARIA_SETTINGS: 'Configurationes',

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
  INVALID_INPUT: 'ERRATA: CHARACTERUS INVALIDUS',
  INVALID_ROMAN: 'ERRATA: NUMERUS ROMANUS INVALIDUS',
  DIVISION_BY_ZERO: 'DIVISIO PER ZERO',
  LIMIT_EXCEEDED: 'LIMITUM EXCESSUM',
  INPUT_INCOMPLETUS: 'ERRATA: INPUT UNCOMPLETUS',
  GENERAL: 'ERRATA',
} as const;
