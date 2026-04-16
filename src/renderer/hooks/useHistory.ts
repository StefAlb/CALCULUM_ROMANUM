import { useCalculatorStore } from '../store/calculatorStore';

/**
 * useHistory Hook
 * Verwaltet die Historie der Berechnungen
 */
export const useHistory = () => {
  const {
    history,
    showHistory,
    addHistoryEntry,
    toggleHistory,
    loadFromHistory
  } = useCalculatorStore();

  const loadEntry = (entry: any) => {
    loadFromHistory(entry);
  };

  const isEmpty = history.length === 0;

  return {
    entries: history,
    isEmpty,
    showHistory,
    addEntry: addHistoryEntry,
    loadEntry,
    toggle: toggleHistory,
  };
};

export type UseHistoryReturn = ReturnType<typeof useHistory>;
