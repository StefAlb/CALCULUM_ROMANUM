import { test, expect } from '@playwright/test';

/**
 * Integrationstests
 * 
 * Kombiniert mehrere User Stories in End-to-End-Szenarien
 */

test.describe('Integration Tests', () => {
  test.beforeEach(async ({ calculator }) => {
    await calculator.goto();
  });

  test('vollständiger Berechnungs-Workflow', async ({ calculator }) => {
    // 1. Eingabe ersten Operanden
    await calculator.typeOperand1('XII');
    await expect(calculator.page.locator('#roman-input')).toHaveValue('XII');

    // 2. Operation auswählen
    await calculator.selectOperation('ADDERE');
    await expect(calculator.page.locator('.op-selected')).toContainText('ADDERE');

    // 3. Eingabe zweiten Operanden
    await calculator.typeOperand2('V');
    await expect(calculator.page.locator('#roman-input')).toHaveValue('V');

    // 4. Berechnung ausführen
    await calculator.clickCalculate();
    await expect(calculator.getResult()).toBe('XVII');

    // 5. Historie prüfen
    await calculator.clickHistory();
    const entries = await calculator.getHistoryEntries();
    expect(entries.length).toBe(1);
    expect(entries[0]).toContain('XII');
    expect(entries[0]).toContain('ADDERE');
    expect(entries[0]).toContain('V');
    expect(entries[0]).toContain('XVII');
  });

  test('mehrere Berechnungen in Folge', async ({ calculator }) => {
    // Erste Berechnung
    await calculator.typeOperand1('X');
    await calculator.selectOperation('ADDERE');
    await calculator.typeOperand2('I');
    await calculator.clickCalculate();
    expect(await calculator.getResult()).toBe('XI');

    // Zweite Berechnung
    await calculator.clickClear();
    await calculator.typeOperand1('V');
    await calculator.selectOperation('MULTIPLICARE');
    await calculator.typeOperand2('III');
    await calculator.clickCalculate();
    expect(await calculator.getResult()).toBe('XV');

    // Historie sollte beide Einträge haben
    await calculator.clickHistory();
    const entries = await calculator.getHistoryEntries();
    expect(entries.length).toBe(2);
  });

  test('Fehlerbehandlung und Wiederherstellung', async ({ calculator }) => {
    // Ungültige Eingabe
    await calculator.typeOperand1('ABC');
    await calculator.selectOperation('ADDERE');
    await calculator.typeOperand2('V');
    await calculator.clickCalculate();
    
    const error = await calculator.getErrorMessage();
    expect(error).toContain('ERRATA');

    // Bereinigen und korrekte Berechnung
    await calculator.clickClear();
    await calculator.typeOperand1('XII');
    await calculator.selectOperation('ADDERE');
    await calculator.typeOperand2('V');
    await calculator.clickCalculate();
    
    expect(await calculator.getResult()).toBe('XVII');
  });

  test('Tastatur-Only Workflow', async ({ calculator }) => {
    // Nur Tastatur verwenden
    await calculator.page.keyboard.type('XII');
    await calculator.page.keyboard.press('Tab');
    await calculator.page.keyboard.press('Tab');
    await calculator.page.keyboard.press('Enter'); // ADDERE auswählen
    await calculator.page.keyboard.press('Tab');
    await calculator.page.keyboard.type('V');
    await calculator.page.keyboard.press('Enter'); // Berechnen
    
    expect(await calculator.getResult()).toBe('XVII');
  });

  test('Historie laden und weiterrechnen', async ({ calculator }) => {
    // Erste Berechnung
    await calculator.typeOperand1('X');
    await calculator.selectOperation('ADDERE');
    await calculator.typeOperand2('I');
    await calculator.clickCalculate();

    // Historie laden
    await calculator.clickHistory();
    await calculator.page.locator('.history-item').first().click();

    // Mit geladenen Werten weiterrechnen
    await calculator.selectOperation('MULTIPLICARE');
    await calculator.typeOperand2('II');
    await calculator.clickCalculate();

    // Ergebnis sollte 22 sein (11 * 2)
    expect(await calculator.getResult()).toBe('XXII');
  });

  test('Escape-Taste in verschiedenen Zuständen', async ({ calculator }) => {
    // Eingabe löschen
    await calculator.typeOperand1('XII');
    await calculator.pressEscape();
    expect(await calculator.getInputValue()).toBe('');

    // Mit Operation
    await calculator.typeOperand1('XII');
    await calculator.selectOperation('ADDERE');
    await calculator.typeOperand2('V');
    await calculator.pressEscape();
    expect(await calculator.getInputValue()).toBe('');
  });

  test('Grenzwert-Tests (3999)', async ({ calculator }) => {
    // Maximaler gültiger Wert
    await calculator.typeOperand1('MMMCMXCIX');
    await calculator.selectOperation('ADDERE');
    await calculator.typeOperand2('I');
    await calculator.clickCalculate();

    // Sollte LIMITUM EXCESSUM anzeigen
    const error = await calculator.getErrorMessage();
    expect(error).toContain('LIMITUM');
  });
});
