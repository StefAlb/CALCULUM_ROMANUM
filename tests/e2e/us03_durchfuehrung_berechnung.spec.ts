import { test, expect } from '@playwright/test';

/**
 * User Story 03: Durchführung einer Berechnung
 * 
 * Akzeptanzkriterien:
 * - Ein "CALCULARE"-Button löst die Berechnung aus
 * - Das Ergebnis wird als römische Zahl angezeigt
 * - Fehlermeldungen: ERRATA INPUT, DIVISIO PER ZERO, LIMITUM EXCESSUM
 * - Berechnung erfolgt innerhalb von 100ms
 * - Enter-Taste im Eingabefeld löst Berechnung aus
 * - ARIA live region für Fehlermeldungen
 */

test.describe('User Story 03: Durchführung einer Berechnung', () => {
  test.beforeEach(async ({ calculator }) => {
    await calculator.goto();
  });

  test('sollte Addition berechnen', async ({ calculator }) => {
    await calculator.typeOperand1('XII');
    await calculator.selectOperation('ADDERE');
    await calculator.typeOperand2('V');
    await calculator.clickCalculate();

    const result = await calculator.getResult();
    expect(result).toBe('XVII');
  });

  test('sollte Subtraktion berechnen', async ({ calculator }) => {
    await calculator.typeOperand1('XX');
    await calculator.selectOperation('SUBTRAHERE');
    await calculator.typeOperand2('VIII');
    await calculator.clickCalculate();

    const result = await calculator.getResult();
    expect(result).toBe('XII');
  });

  test('sollte Multiplikation berechnen', async ({ calculator }) => {
    await calculator.typeOperand1('IV');
    await calculator.selectOperation('MULTIPLICARE');
    await calculator.typeOperand2('III');
    await calculator.clickCalculate();

    const result = await calculator.getResult();
    expect(result).toBe('XII');
  });

  test('sollte Division berechnen', async ({ calculator }) => {
    await calculator.typeOperand1('XV');
    await calculator.selectOperation('DIVIDERE');
    await calculator.typeOperand2('III');
    await calculator.clickCalculate();

    const result = await calculator.getResult();
    expect(result).toBe('V');
  });

  test('sollte Fehler bei ungültiger Eingabe anzeigen', async ({ calculator }) => {
    await calculator.typeOperand1('ABC');
    await calculator.selectOperation('ADDERE');
    await calculator.typeOperand2('V');
    await calculator.clickCalculate();

    const error = await calculator.getErrorMessage();
    expect(error).toContain('ERRATA INPUT');
  });

  test('sollte Berechnung mit Enter-Taste auslösen', async ({ calculator }) => {
    await calculator.typeOperand1('XII');
    await calculator.selectOperation('ADDERE');
    await calculator.typeOperand2('V');
    await calculator.pressEnter();

    const result = await calculator.getResult();
    expect(result).toBe('XVII');
  });

  test('sollte Berechnungszeit unter 100ms halten', async ({ calculator }) => {
    const startTime = Date.now();

    await calculator.typeOperand1('MMMCMXCIX');
    await calculator.selectOperation('ADDERE');
    await calculator.typeOperand2('I');
    await calculator.clickCalculate();

    const duration = Date.now() - startTime;
    expect(duration).toBeLessThan(100);
  });

  test('sollte ARIA live Region für Ergebnisse haben', async ({ calculator }) => {
    const formulaDisplay = calculator.page.locator('.formula-display');
    const ariaLive = await formulaDisplay.getAttribute('aria-live');
    expect(ariaLive).toBe('polite');
  });

  test('sollte CALCULARE-Button deaktivieren wenn Daten fehlen', async ({ calculator }) => {
    const button = calculator.page.locator('.calc-button');
    await expect(button).toBeDisabled();

    await calculator.typeOperand1('XII');
    await expect(button).toBeDisabled();

    await calculator.selectOperation('ADDERE');
    await expect(button).toBeDisabled();

    await calculator.typeOperand2('V');
    await expect(button).toBeEnabled();
  });
});
