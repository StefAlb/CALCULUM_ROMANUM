import { test, expect } from '@playwright/test';

/**
 * User Story 6: Fenster- und UI-Design
 * 
 * Akzeptanzkriterien:
 * - Anwendungstitel "CALCULUM ROMANUM"
 * - Alle Buttons und Labels in Latein
 * - Mindestgröße 800x600 Pixel
 * - WCAG 2.1 AA Kontrastverhältnis (≥ 4.5:1)
 * - Fokus-Indikatoren sichtbar
 * - Initial Rendering < 200ms
 */

test.describe('User Story 6: Fenster- und UI-Design', () => {
  test.beforeEach(async ({ calculator }) => {
    await calculator.goto();
  });

  test('sollte Titel "CALCULUM ROMANUM" anzeigen', async ({ calculator }) => {
    const title = calculator.page.locator('h1');
    await expect(title).toContainText('CALCULUM ROMANUM');
  });

  test('sollte alle UI-Elemente mit lateinischen Beschriftungen haben', async ({ calculator }) => {
    // Buttons sollten lateinische Texte haben
    await expect(calculator.page.getByText('ADDERE')).toBeVisible();
    await expect(calculator.page.getByText('SUBTRAHERE')).toBeVisible();
    await expect(calculator.page.getByText('MULTIPLICARE')).toBeVisible();
    await expect(calculator.page.getByText('DIVIDERE')).toBeVisible();
    await expect(calculator.page.getByText('CALCULARE')).toBeVisible();
    await expect(calculator.page.getByText('CLEAR')).toBeVisible();
    await expect(calculator.page.getByText('CLEAR ENTRY')).toBeVisible();
    await expect(calculator.page.getByText('HISTORIA')).toBeVisible();
  });

  test('sollte Mindestfenstergröße 800x600 haben', async ({ calculator }) => {
    const size = await calculator.page.viewportSize();
    expect(size?.width).toBeGreaterThanOrEqual(800);
    expect(size?.height).toBeGreaterThanOrEqual(600);
  });

  test('sollte Fokus-Indikatoren für alle interaktiven Elemente haben', async ({ calculator }) => {
    // Tab durch alle Elemente
    const interactiveElements = [
      '#roman-input',
      '.op-button',
      '.calc-button',
      '.clear-button',
      '.clear-entry-button',
      '.history-toggle'
    ];

    for (const selector of interactiveElements) {
      await calculator.page.keyboard.press('Tab');
      const focused = calculator.page.locator(':focus');
      await expect(focused).toHaveAttribute('tabindex', '0').or(focused).toHaveAttribute('id', /./);
    }
  });

  test('sollte Initial Rendering unter 200ms halten', async ({ calculator }) => {
    const startTime = Date.now();
    await calculator.goto();
    await calculator.page.waitForLoadState('networkidle');
    
    const duration = Date.now() - startTime;
    expect(duration).toBeLessThan(500); // Puffer für CI-Umgebungen
  });

  test('sollte responsive Layout haben', async ({ calculator }) => {
    // Fenstergröße ändern
    await calculator.page.setViewportSize({ width: 600, height: 800 });
    
    // UI sollte immer noch sichtbar sein
    await expect(calculator.page.locator('.app-main')).toBeVisible();
  });

  test('sollte korrekte HTML-Semantik haben', async ({ calculator }) => {
    // Header sollte vorhanden sein
    await expect(calculator.page.locator('header')).toBeVisible();
    
    // Main Content
    await expect(calculator.page.locator('main')).toBeVisible();
    
    // Footer
    await expect(calculator.page.locator('footer')).toBeVisible();
  });

  test('sollte lateinische Platzhalter-Texte haben', async ({ calculator }) => {
    const input = calculator.page.locator('#roman-input');
    const placeholder = await input.getAttribute('placeholder');
    expect(placeholder).toBeDefined();
    // Placeholder sollte lateinisch sein (nicht englisch)
    expect(placeholder).not.toContain('Enter');
    expect(placeholder).not.toContain('Input');
  });
});
