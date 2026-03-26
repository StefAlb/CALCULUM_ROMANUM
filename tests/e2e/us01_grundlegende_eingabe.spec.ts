import { test, expect } from '@playwright/test';

/**
 * User Story 01: Grundlegende Eingabe römischer Zahlen
 * 
 * Akzeptanzkriterien:
 * - Das Eingabefeld akzeptiert nur gültige römische Ziffern (I, V, X, L, C, D, M)
 * - Die Eingabe ist case-insensitive (i und I werden gleich behandelt)
 * - Die maximale Länge der Eingabe ist auf 15 Zeichen begrenzt
 * - Die Eingabe wird sofort in Echtzeit validiert
 * - ARIA-Unterstützung für Accessibility
 */

test.describe('User Story 01: Grundlegende Eingabe', () => {
  test.beforeEach(async ({ calculator }) => {
    await calculator.goto();
  });

  test('sollte gültige römische Zahlen akzeptieren', async ({ calculator }) => {
    // Test gültiger Eingaben
    await calculator.typeOperand1('XII');
    await expect(calculator.page.locator('#roman-input')).toHaveValue('XII');

    await calculator.typeOperand1('mcmxciv');
    await expect(calculator.page.locator('#roman-input')).toHaveValue('MCMXCIV');

    await calculator.typeOperand1('IV');
    await expect(calculator.page.locator('#roman-input')).toHaveValue('IV');
  });

  test('sollte case-insensitive sein', async ({ calculator }) => {
    await calculator.typeOperand1('xii');
    await expect(calculator.page.locator('#roman-input')).toHaveValue('XII');

    await calculator.typeOperand1('iv');
    await expect(calculator.page.locator('#roman-input')).toHaveValue('IV');
  });

  test('sollte ungültige Zeichen ablehnen', async ({ calculator }) => {
    // Zahlen sollten nicht akzeptiert werden
    await calculator.typeOperand1('123');
    await expect(calculator.page.locator('#roman-input')).toHaveValue('');

    // Buchstaben, die keine römischen Ziffern sind
    await calculator.typeOperand1('ABC');
    await expect(calculator.page.locator('#roman-input')).toHaveValue('');

    // Gemischte Eingabe
    await calculator.typeOperand1('X2V');
    await expect(calculator.page.locator('#roman-input')).toHaveValue('X');
  });

  test('sollte maximale Länge von 15 Zeichen durchsetzen', async ({ calculator }) => {
    // 15 Zeichen sollten akzeptiert werden
    await calculator.typeOperand1('MMMMMMMMMMMMMMM');
    await expect(calculator.page.locator('#roman-input')).toHaveValue('MMMMMMMMMMMMMMM');

    // 16. Zeichen sollte nicht akzeptiert werden
    await calculator.typeOperand1('MMMMMMMMMMMMMMMM');
    await expect(calculator.page.locator('#roman-input')).toHaveValue('MMMMMMMMMMMMMMM');
  });

  test('sollte ARIA-Labels haben', async ({ calculator }) => {
    const input = calculator.page.locator('#roman-input');
    await expect(input).toHaveAttribute('aria-label', 'Eingabe römischer Zahl');
  });

  test('sollte Fehlermeldung bei ungültiger Eingabe anzeigen', async ({ calculator }) => {
    await calculator.typeOperand1('ABC');
    
    const errorElement = calculator.page.locator('[role="alert"]');
    await expect(errorElement).toBeVisible();
    await expect(errorElement).toContainText('ERRATA INPUT');
  });

  test('sollte Tab-Navigation unterstützen', async ({ calculator }) => {
    await calculator.page.keyboard.press('Tab');
    const input = calculator.page.locator('#roman-input');
    await expect(input).toBeFocused();
  });
});
