import { useState, useCallback } from 'react';
import { useCalculatorStore } from '@store/calculatorStore';

/**
 * useCalculator Hook
 * Verwaltet den Zustand des Rechners
 */
export const useCalculator = () => {
  const {
    currentValue,
    previousValue,
    operation,
    result,
    formula,
    setCurrentValue,
    setPreviousValue,
    setOperation,
    setResult,
    setFormula,
    clearAll,
    clearCurrent,
  } = useCalculatorStore();

  const handleCalculate = useCallback(() => {
    // Berechnung wird im Store durchgeführt
  }, []);

  return {
    currentValue,
    previousValue,
    operation,
    result,
    formula,
    setCurrentValue,
    setPreviousValue,
    setOperation,
    setResult,
    setFormula,
    handleCalculate,
    clearAll,
    clearCurrent,
  };
};

export type UseCalculatorReturn = ReturnType<typeof useCalculator>;
