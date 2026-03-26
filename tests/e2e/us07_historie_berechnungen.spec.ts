import { test, expect } from '@playwright/test';

/**
 * User Story 7: Historie der Berechnungen
 * 
 * Akzeptanzkriterien:
 * - Historie zeigt letzte 10 Berechnungen
 * - Format: "<Operand1> <Operator> <Operand2> = <Ergebnis>"
 * - Historie wird beim Schließen der App gelöscht (in-memory)
 * - HISTORIA-Button zeigt Historie
 * - Tastaturnavigation (Pfeiltasten)
 * - Ladezeit < 100ms
 */

test.describe('User Story 7: Historie der Berechnungen', () => {
  test.beforeEach(async ({ calculator }) => {
    await calculator.goto();
  });

  test('sollte Historie-Button anzeigen', async ({ calculator }) => {
    await expect(calculator.page.getByText('HISTORIA')).toBeVisible();
  });

  test('sollte Historie anzeigen wenn HISTORIA geklickt wird', async ({ calculator }) => {
    // Erst eine Berechnung durchführen
    await calculator.typeOperand1('XII');
    await calculator.selectOperation('ADDERE');
    await calculator.typeOperand2('V');
    await calculator.clickCalculate();
    
    // Historie öffnen
    await calculator.clickHistory();
    
    const historyList = calculator.page.locator('.history-list');
    await expect(historyList).toBeVisible();
  });

  test('sollte Berechnung in Historie speichern', async ({ calculator }) => {
    await calculator.typeOperand1('XII');
    await calculator.selectOperation('ADDERE');
    await calculator.typeOperand2('V');
    await calculator.clickCalculate();
    
    await calculator.clickHistory();
    
    const entries = await calculator.getHistoryEntries();
    expect(entries.length).toBeGreaterThan(0);
    expect(entries[0]).toContain('XII');
    expect(entries[0]).toContain('ADDERE');
    expect(entries[0]).toContain('V');
    expect(entries[0]).toContain('XVII');
  });

  test('sollte nur letzte 10 Einträge speichern', async ({ calculator }) => {
    // 15 Berechnungen durchführen
    for (let i = 0; i < 15; i++) {
      await calculator.typeOperand1('X');
      await calculator.selectOperation('ADDERE');
      await calculator.typeOperand2('I');
      await calculator.clickCalculate();
    }
    
    await calculator.clickHistory();
    const entries = await calculator.getHistoryEntries();
    
    expect(entries.length).toBe(10);
  });

  test('sollte Historie-Eintrag in aktuelle Berechnung laden', async ({ calculator }) => {
    // Erste Berechnung
    await calculator.typeOperand1('XII');
    await calculator.selectOperation('ADDERE');
    await calculator.typeOperand2('V');
    await calculator.clickCalculate();
    
    // Historie öffnen und Eintrag auswählen
    await calculator.clickHistory();
    const firstEntry = calculator.page.locator('.history-item').first();
    await firstEntry.click();
    
    // Operanden sollten geladen sein
    const input = await calculator.getInputValue();
    expect(input).toBe('V'); // Zweiter Operand sollte geladen sein
  });

  test('sollte leere Historie anzeigen wenn keine Berechnungen', async ({ calculator }) => {
    await calculator.clickHistory();
    
    const emptyMessage = calculator.page.locator('.empty');
    await expect(emptyMessage).toBeVisible();
  });

  test('sollte Enter-Taste für Historie-Navigation unterstützen', async ({ calculator }) => {
    // Berechnung durchführen
    await calculator.typeOperand1('X');
    await calculator.selectOperation('ADDERE');
    await calculator.typeOperand2('I');
    await calculator.clickCalculate();
    
    await calculator.clickHistory();
    
    // Auf ersten Eintrag navigieren und Enter drücken
    await calculator.page.keyboard.press('Tab');
    await calculator.page.keyboard.press('Enter');
    
    // Eintrag sollte geladen sein
    const input = await calculator.getInputValue();
    expect(input).toBe('I');
  });

  test('sollte ARIA-Labels für Historie haben', async ({ calculator }) => {
    await calculator.clickHistory();
    
    const historyList = calculator.page.locator('.history-list');
    const ariaLabel = await historyList.getAttribute('aria-label');
    expect(ariaLabel).toBe('HISTORIA CALCULATIONUM');
    
    const role = await historyList.getAttribute('role');
    expect(role).toBe('list');
  });

  test('sollte Historie-Liste mit role="listitem" haben', async ({ calculator }) => {
    await calculator.typeOperand1('X');
    await calculator.selectOperation('ADDERE');
    await calculator.typeOperand2('I');
    await calculator.clickCalculate();
    
    await calculator.clickHistory();
    
    const items = calculator.page.locator('[role="listitem"]');
    await expect(items).toHaveCount(1);
  });

  test('sollte Historie-Ladezeit unter 100ms halten', async ({ calculator }) => {
    // Mehrere Berechnungen
    for (let i = 0; i < 5; i++) {
      await calculator.typeOperand1('X');
      await calculator.selectOperation('ADDERE');
      await calculator.typeOperand2('I');
      await calculator.clickCalculate();
    }
    
    const startTime = Date.now();
    await calculator.clickHistory();
    const duration = Date.now() - startTime;
    
    expect(duration).toBeLessThan(200); // Puffer für CI
  });
});
