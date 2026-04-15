import { useState, useCallback } from 'react';
import { useCalculatorStore } from '@store/calculatorStore';

/**
 * useHistory Hook
 * Verwaltet die Historie der Berechnungen
 */
export const useHistory = () => {
  const { history, addHistory, clearHistory } = useCalculatorStore();

  const addToHistory = useCallback((entry: {
    currentValue: string;
    previousValue: string;
    operation: string;
    result: string;
    timestamp: Date;
  }) => {
    addHistory(entry);
  }, [addHistory]);

  return {
    history,
    addToHistory,
    clearHistory,
  };
};

export type UseHistoryReturn = ReturnType<typeof useHistory>;
