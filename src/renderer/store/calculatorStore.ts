import { create } from 'zustand';

interface HistoryEntry {
  currentValue: string;
  previousValue: string;
  operation: string;
  result: string;
  timestamp: Date;
}

interface CalculatorState {
  currentValue: string;
  previousValue: string;
  operation: string;
  result: string;
  formula: string;
  history: HistoryEntry[];
  
  // Actions
  setCurrentValue: (value: string) => void;
  setPreviousValue: (value: string) => void;
  setOperation: (operation: string) => void;
  setResult: (result: string) => void;
  setFormula: (formula: string) => void;
  addHistory: (entry: HistoryEntry) => void;
  clearHistory: () => void;
  clearAll: () => void;
  clearCurrent: () => void;
}

export const useCalculatorStore = create<CalculatorState>((set) => ({
  currentValue: '',
  previousValue: '',
  operation: '',
  result: '',
  formula: '',
  history: [],

  setCurrentValue: (value) => set({ currentValue: value }),
  setPreviousValue: (value) => set({ previousValue: value }),
  setOperation: (operation) => set({ operation }),
  setResult: (result) => set({ result }),
  setFormula: (formula) => set({ formula }),
  
  addHistory: (entry) => set((state) => ({
    history: [...state.history, entry]
  })),
  
  clearHistory: () => set({ history: [] }),
  
  clearAll: () => set({
    currentValue: '',
    previousValue: '',
    operation: '',
    result: '',
    formula: ''
  }),
  
  clearCurrent: () => set({ currentValue: '' }),
}));
