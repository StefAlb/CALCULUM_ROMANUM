import { useCalculatorStore } from '../store/calculatorStore';

/**
 * useCalculator Hook
 * Verwaltet den Zustand des Rechners
 * Bietet einen einfachen Zugriff auf alle Calculator-State und Actions
 */
export const useCalculator = () => {
  const store = useCalculatorStore();

  const canCalculate = Boolean(
    store.operand1 &&
    (store.operand2 || store.currentValue) &&
    store.operation
  );

  return {
    // State
    currentValue: store.currentValue,
    operand1: store.operand1,
    operand2: store.operand2,
    operation: store.operation,
    result: store.result,
    error: store.error,
    validationStatus: store.validationStatus,
    history: store.history,
    showHistory: store.showHistory,
    canCalculate,

    // Actions
    setCurrentValue: store.setCurrentValue,
    setOperand1: store.setOperand1,
    setOperand2: store.setOperand2,
    setOperation: store.setOperation,
    setResult: store.setResult,
    setError: store.setError,
    setValidationStatus: store.setValidationStatus,
    toggleHistory: store.toggleHistory,
    addHistoryEntry: store.addHistoryEntry,
    clearAll: store.clearAll,
    clearEntry: store.clearEntry,
    calculate: store.calculate,
    loadFromHistory: store.loadFromHistory,
  };
};

export type UseCalculatorReturn = ReturnType<typeof useCalculator>;
