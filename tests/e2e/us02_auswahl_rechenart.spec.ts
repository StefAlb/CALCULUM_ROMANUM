import { test, expect } from '@playwright/test';

/**
 * User Story 02: Auswahl der Grundrechenart
 * 
 * Akzeptanzkriterien:
 * - Vier klar beschriftete Buttons für die Grundrechenarten
 * - Beschriftungen in Latein: ADDERE, SUBTRAHERE, MULTIPLICARE, DIVIDERE
 * - Die ausgewählte Operation wird visuell hervorgehoben
 * - Buttons sind über Tastatur bedienbar (Tab + Enter/Space)
 * - Visueller Fokus-Indikator vorhanden
 */

test.describe('User Story 02: Auswahl der Grundrechenart', () => {
  test.beforeEach(async ({ calculator }) => {
    await calculator.goto();
  });

  test('sollte alle vier Operations-Buttons anzeigen', async ({ calculator }) => {
    await expect(calculator.page.getByText('ADDERE')).toBeVisible();
    await expect(calculator.page.getByText('SUBTRAHERE')).toBeVisible();
    await expect(calculator.page.getByText('MULTIPLICARE')).toBeVisible();
    await expect(calculator.page.getByText('DIVIDERE')).toBeVisible();
  });

  test('sollte Operation auswählen können', async ({ calculator }) => {
    await calculator.selectOperation('ADDERE');
    const selectedButton = calculator.page.locator('.op-selected');
    await expect(selectedButton).toContainText('ADDERE');
  });

  test('sollte nur eine Operation gleichzeitig ausgewählt haben', async ({ calculator }) => {
    await calculator.selectOperation('ADDERE');
    await calculator.selectOperation('SUBTRAHERE');
    
    const selectedButtons = calculator.page.locator('.op-selected');
    await expect(selectedButtons).toHaveCount(1);
    await expect(selectedButtons).toContainText('SUBTRAHERE');
  });

  test('sollte aria-pressed Attribut setzen', async ({ calculator }) => {
    await calculator.selectOperation('MULTIPLICARE');
    
    const button = calculator.page.getByText('MULTIPLICARE');
    await expect(button).toHaveAttribute('aria-pressed', 'true');
  });

  test('sollte Enter-Taste für Auswahl unterstützen', async ({ calculator }) => {
    // Tab zu Button
    await calculator.page.keyboard.press('Tab');
    await calculator.page.keyboard.press('Tab');
    await calculator.page.keyboard.press('Tab');
    
    // Enter drücken
    await calculator.page.keyboard.press('Enter');
    
    const selectedButton = calculator.page.locator('.op-selected');
    await expect(selectedButton).toBeVisible();
  });

  test('sollte Space-Taste für Auswahl unterstützen', async ({ calculator }) => {
    await calculator.page.keyboard.press('Tab');
    await calculator.page.keyboard.press('Tab');
    await calculator.page.keyboard.press('Space');
    
    const selectedButton = calculator.page.locator('.op-selected');
    await expect(selectedButton).toBeVisible();
  });

  test('sollte Fokus-Indikator bei Tastaturnavigation zeigen', async ({ calculator }) => {
    await calculator.page.keyboard.press('Tab');
    await calculator.page.keyboard.press('Tab');
    
    const focusedElement = calculator.page.locator(':focus');
    await expect(focusedElement).toHaveClass(/op-button/);
  });

  test('sollte zwischen Operationen wechseln können', async ({ calculator }) => {
    await calculator.selectOperation('ADDERE');
    await calculator.selectOperation('DIVIDERE');
    
    const selectedButton = calculator.page.locator('.op-selected');
    await expect(selectedButton).toContainText('DIVIDERE');
  });
});
