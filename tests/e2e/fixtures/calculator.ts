import { test as base, Page } from '@playwright/test';

/**
 * Calculator Fixtures
 * Bietet spezialisierte Methoden für die Interaktion mit dem Rechner
 */
export class CalculatorPage {
  constructor(private page: Page) {}

  // --- Navigations-Methoden ---
  async goto() {
    await this.page.goto('/');
  }

  // --- Eingabefelder ---
  async typeOperand1(value: string) {
    await this.page.fill('#roman-input', value);
  }

  async typeOperand2(value: string) {
    // Zuerst Operation auswählen, um auf das zweite Feld zu wechseln
    await this.page.click('.op-button');
    await this.page.fill('#roman-input', value);
  }

  // --- Operationen ---
  async selectOperation(operation: string) {
    await this.page.click(`button:has-text("${operation}")`);
  }

  // --- Buttons ---
  async clickCalculate() {
    await this.page.click('.calc-button');
  }

  async clickClear() {
    await this.page.click('.clear-button');
  }

  async clickClearEntry() {
    await this.page.click('.clear-entry-button');
  }

  async clickHistory() {
    await this.page.click('.history-toggle');
  }

  // --- Ergebnisse prüfen ---
  async getResult() {
    const element = this.page.locator('.formula-display .result');
    return await element.textContent();
  }

  async getFormula() {
    const element = this.page.locator('.formula-display .formula');
    return await element.textContent();
  }

  async getErrorMessage() {
    const element = this.page.locator('.formula-display .error');
    return await element.textContent();
  }

  async getInputValue() {
    return await this.page.inputValue('#roman-input');
  }

  // --- Historie ---
  async getHistoryEntries() {
    const items = await this.page.locator('.history-item').all();
    return Promise.all(items.map(item => item.textContent()));
  }

  async isHistoryVisible() {
    return await this.page.isVisible('.history-list');
  }

  // --- Tastatur-Events ---
  async pressEnter() {
    await this.page.keyboard.press('Enter');
  }

  async pressEscape() {
    await this.page.keyboard.press('Escape');
  }

  // --- Accessibility ---
  async hasAriaLabel(selector: string, label: string) {
    const element = this.page.locator(selector);
    const ariaLabel = await element.getAttribute('aria-label');
    return ariaLabel === label;
  }

  async hasAriaLive(region: string) {
    const element = this.page.locator(region);
    const ariaLive = await element.getAttribute('aria-live');
    return !!ariaLive;
  }
}

/**
 * Erweiterte Test-Fixtures
 */
export const test = base.extend<{
  calculator: CalculatorPage;
}>({
  calculator: async ({ page }, use) => {
    const calculator = new CalculatorPage(page);
    await use(calculator);
  },
});

export { expect } from '@playwright/test';
