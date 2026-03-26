import { describe, it, expect, beforeEach } from 'vitest';
import { HistoryService, HistoryServiceClass } from '../history';

describe('History Service', () => {
  let historyService: HistoryServiceClass;

  beforeEach(() => {
    // Erstelle neue Instanz für jeden Test
    historyService = new HistoryServiceClass();
  });

  describe('add', () => {
    it('should add a new entry to history', () => {
      historyService.add('XII', 'ADDERE', 'V', 'XVII');
      expect(historyService.getCount()).toBe(1);
    });

    it('should add entry with correct data', () => {
      historyService.add('XII', 'ADDERE', 'V', 'XVII');
      const entries = historyService.getAll();
      
      expect(entries[0].operand1).toBe('XII');
      expect(entries[0].operation).toBe('ADDERE');
      expect(entries[0].operand2).toBe('V');
      expect(entries[0].result).toBe('XVII');
      expect(entries[0].timestamp).toBeInstanceOf(Date);
    });

    it('should limit history to max entries (10)', () => {
      for (let i = 0; i < 15; i++) {
        historyService.add('X', 'ADDERE', 'I', 'XI');
      }
      expect(historyService.getCount()).toBe(10);
    });

    it('should add newest entry at the beginning', () => {
      historyService.add('X', 'ADDERE', 'I', 'XI');
      historyService.add('V', 'ADDERE', 'I', 'VI');
      
      const entries = historyService.getAll();
      expect(entries[0].operand1).toBe('V');
      expect(entries[1].operand1).toBe('X');
    });
  });

  describe('getAll', () => {
    it('should return empty array when history is empty', () => {
      expect(historyService.getAll()).toEqual([]);
    });

    it('should return all entries', () => {
      historyService.add('X', 'ADDERE', 'I', 'XI');
      historyService.add('V', 'SUBTRAHERE', 'II', 'III');
      
      const entries = historyService.getAll();
      expect(entries.length).toBe(2);
    });

    it('should return a copy of the history array', () => {
      historyService.add('X', 'ADDERE', 'I', 'XI');
      const entries = historyService.getAll();
      entries.push({
        operand1: 'Y',
        operation: 'ADDERE',
        operand2: 'Z',
        result: 'A',
        timestamp: new Date(),
      });

      expect(historyService.getCount()).toBe(1);
    });
  });

  describe('clear', () => {
    it('should clear all entries', () => {
      historyService.add('X', 'ADDERE', 'I', 'XI');
      historyService.add('V', 'ADDERE', 'I', 'VI');
      
      historyService.clear();
      expect(historyService.getCount()).toBe(0);
      expect(historyService.getAll()).toEqual([]);
    });
  });

  describe('getCount', () => {
    it('should return 0 for empty history', () => {
      expect(historyService.getCount()).toBe(0);
    });

    it('should return correct count after adding entries', () => {
      historyService.add('X', 'ADDERE', 'I', 'XI');
      historyService.add('V', 'ADDERE', 'I', 'VI');
      expect(historyService.getCount()).toBe(2);
    });
  });

  describe('isEmpty', () => {
    it('should return true for empty history', () => {
      expect(historyService.isEmpty()).toBe(true);
    });

    it('should return false after adding entries', () => {
      historyService.add('X', 'ADDERE', 'I', 'XI');
      expect(historyService.isEmpty()).toBe(false);
    });
  });

  describe('removeAt', () => {
    it('should remove entry at specified index', () => {
      historyService.add('X', 'ADDERE', 'I', 'XI');
      historyService.add('V', 'ADDERE', 'I', 'VI');
      historyService.add('III', 'ADDERE', 'I', 'IV');
      
      historyService.removeAt(1);
      expect(historyService.getCount()).toBe(2);
      expect(historyService.getAll()[1].operand1).toBe('III');
    });

    it('should not remove invalid index', () => {
      historyService.add('X', 'ADDERE', 'I', 'XI');
      
      historyService.removeAt(5);
      expect(historyService.getCount()).toBe(1);
    });

    it('should not remove negative index', () => {
      historyService.add('X', 'ADDERE', 'I', 'XI');
      
      historyService.removeAt(-1);
      expect(historyService.getCount()).toBe(1);
    });
  });
});
