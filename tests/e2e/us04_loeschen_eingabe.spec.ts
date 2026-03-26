import { test, expect } from '@playwright/test';

/**
 * User Story 4: Löschen der Eingabe
 * 
 * Akzeptanzkriterien:
 * - Ein "CLEAR"-Button löscht alle Eingaben
 * - Ein "CLEAR ENTRY"-Button löscht nur den aktuellen Eingabewert
 * - Escape-Taste löscht den aktuellen Eingabewert
 * - Buttons sind über Tastatur bedienbar
 * - Löschen-Aktionen sind für Screenreader ankündbar
 */

test.describe('User Story 4: Löschen der Eingabe', () => {
  test.beforeEach(async ({ calculator }) => {
    await calculator.goto();
  });

  test('sollte CLEAR ENTRY nur aktuelle Eingabe löschen', async ({ calculator }) => {
    await calculator.typeOperand1('XII');
    await calculator.clickClearEntry();
    
    const value = await calculator.getInputValue();
    expect(value).toBe('');
  });

  test('sollte CLEAR alles zurücksetzen', async ({ calculator }) => {
    await calculator.typeOperand1('XII');
    await calculator.selectOperation('ADDERE');
    await calculator.typeOperand2('V');
    await calculator.clickCalculate();
    
    await calculator.clickClear();
    
    // Alle Felder sollten leer sein
    await expect(calculator.page.locator('#roman-input')).toHaveValue('');
    const selectedOp = calculator.page.locator('.op-selected');
    await expect(selectedOp).toHaveCount(0);
  });

  test('sollte Escape-Taste als CLEAR ENTRY behandeln', async ({ calculator }) => {
    await calculator.typeOperand1('XII');
    await calculator.pressEscape();
    
    const value = await calculator.getInputValue();
    expect(value).toBe('');
  });

  test('sollte Escape-Taste zweiten Operanden löschen', async ({ calculator }) => {
    await calculator.typeOperand1('XII');
    await calculator.selectOperation('ADDERE');
    await calculator.typeOperand2('V');
    await calculator.pressEscape();
    
    const value = await calculator.getInputValue();
    expect(value).toBe('');
    // Operand1 sollte noch da sein
    await calculator.selectOperation('ADDERE'); // Button nochmal klicken um Fokus zu setzen
  });

  test('sollte CLEAR-Buttons über Tastatur bedienen können', async ({ calculator }) => {
    await calculator.typeOperand1('XII');
    
    // Tab zu Clear Button
    await calculator.page.keyboard.press('Tab');
    await calculator.page.keyboard.press('Tab');
    await calculator.page.keyboard.press('Tab');
    await calculator.page.keyboard.press('Enter');
    
    const value = await calculator.getInputValue();
    expect(value).toBe('');
  });

  test('sollte ARIA-Labels für Clear-Buttons haben', async ({ calculator }) => {
    const clearButton = calculator.page.locator('.clear-button');
    await expect(clearButton).toHaveAttribute('aria-label', 'Alle Eingaben löschen');
    
    const clearEntryButton = calculator.page.locator('.clear-entry-button');
    await expect(clearEntryButton).toHaveAttribute('aria-label', 'Aktuelle Eingabe löschen');
  });

  test('sollte nach CLEAR wieder für neue Eingabe bereit sein', async ({ calculator }) => {
    await calculator.typeOperand1('XII');
    await calculator.clickClear();
    
    await calculator.typeOperand1('V');
    await expect(calculator.page.locator('#roman-input')).toHaveValue('V');
  });

  test('sollte mehrfaches Klicken auf CLEAR nicht fehlschlagen', async ({ calculator }) => {
    await calculator.clickClear();
    await calculator.clickClear();
    await calculator.clickClear();
    
    const value = await calculator.getInputValue();
    expect(value).toBe('');
  });
});
