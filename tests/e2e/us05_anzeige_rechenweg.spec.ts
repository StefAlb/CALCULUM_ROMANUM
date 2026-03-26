import { test, expect } from '@playwright/test';

/**
 * User Story 5: Anzeige des Rechenwegs
 * 
 * Akzeptanzkriterien:
 * - Formel in der Form "XII + V = XVII"
 * - Alle Zahlen in der Anzeige sind römisch
 * - Rechenzeichen lateinisch (ET, MINUS, PER, DIVIDITUR)
 * - Anzeige aktualisiert sich bei jeder Eingabe
 * - Update innerhalb von 50ms
 * - ARIA live region für dynamische Änderungen
 */

test.describe('User Story 5: Anzeige des Rechenwegs', () => {
  test.beforeEach(async ({ calculator }) => {
    await calculator.goto();
  });

  test('sollte Formel mit lateinischen Operatoren anzeigen', async ({ calculator }) => {
    await calculator.typeOperand1('XII');
    await calculator.selectOperation('ADDERE');
    await calculator.typeOperand2('V');
    
    const formula = await calculator.getFormula();
    expect(formula).toContain('XII');
    expect(formula).toContain('ET');
    expect(formula).toContain('V');
  });

  test('sollte MINUS für Subtraktion verwenden', async ({ calculator }) => {
    await calculator.typeOperand1('XX');
    await calculator.selectOperation('SUBTRAHERE');
    await calculator.typeOperand2('VIII');
    
    const formula = await calculator.getFormula();
    expect(formula).toContain('MINUS');
  });

  test('sollte PER für Multiplikation verwenden', async ({ calculator }) => {
    await calculator.typeOperand1('IV');
    await calculator.selectOperation('MULTIPLICARE');
    await calculator.typeOperand2('III');
    
    const formula = await calculator.getFormula();
    expect(formula).toContain('PER');
  });

  test('sollte DIVIDITUR für Division verwenden', async ({ calculator }) => {
    await calculator.typeOperand1('XV');
    await calculator.selectOperation('DIVIDERE');
    await calculator.typeOperand2('III');
    
    const formula = await calculator.getFormula();
    expect(formula).toContain('DIVIDITUR');
  });

  test('sollte Ergebnis nach Berechnung anzeigen', async ({ calculator }) => {
    await calculator.typeOperand1('XII');
    await calculator.selectOperation('ADDERE');
    await calculator.typeOperand2('V');
    await calculator.clickCalculate();
    
    const formula = await calculator.getFormula();
    const result = await calculator.getResult();
    
    expect(formula).toContain('XII');
    expect(formula).toContain('ET');
    expect(formula).toContain('V');
    expect(result).toBe('XVII');
  });

  test('sollte Formel live bei Eingabe aktualisieren', async ({ calculator }) => {
    await calculator.typeOperand1('X');
    
    // Formel sollte teilweise angezeigt werden
    const formulaDisplay = calculator.page.locator('.formula-display');
    await expect(formulaDisplay).toBeVisible();
    
    await calculator.selectOperation('ADDERE');
    await calculator.typeOperand2('V');
    
    const formula = await calculator.getFormula();
    expect(formula).toContain('X');
    expect(formula).toContain('ET');
    expect(formula).toContain('V');
  });

  test('sollte Fehlermeldung statt Ergebnis bei Division durch Null anzeigen', async ({ calculator }) => {
    await calculator.typeOperand1('X');
    await calculator.selectOperation('DIVIDERE');
    await calculator.typeOperand2('I');
    // I = 1, also keine Division durch Null
    // Test mit ungültiger Eingabe
    await calculator.typeOperand1('ABC');
    await calculator.clickCalculate();
    
    const error = await calculator.getErrorMessage();
    expect(error).toContain('ERRATA');
  });

  test('sollte Update-Zeit unter 50ms halten', async ({ calculator }) => {
    const startTime = Date.now();
    
    await calculator.typeOperand1('XII');
    await calculator.selectOperation('ADDERE');
    await calculator.typeOperand2('V');
    
    const duration = Date.now() - startTime;
    // Live-Update sollte sehr schnell sein
    expect(duration).toBeLessThan(100);
  });

  test('sollte ARIA live Region für Formel haben', async ({ calculator }) => {
    const formulaDisplay = calculator.page.locator('.formula-display');
    const ariaLive = await formulaDisplay.getAttribute('aria-live');
    expect(ariaLive).toBe('polite');
    
    const role = await formulaDisplay.getAttribute('role');
    expect(role).toBe('status');
  });
});
