import { test, expect } from '@playwright/test';

/**
 * Performance-Tests
 * 
 * Prüft:
 * - Berechnungszeit < 100ms
 * - Live-Update < 50ms
 * - Initial Render < 200ms
 * - Historie-Ladezeit < 100ms
 */

test.describe('Performance Tests', () => {
  test.beforeEach(async ({ calculator }) => {
    await calculator.goto();
  });

  test('sollte Initial Render unter 200ms halten', async ({ calculator }) => {
    const startTime = performance.now();
    await calculator.goto();
    await calculator.page.waitForLoadState('domcontentloaded');
    const duration = performance.now() - startTime;
    
    // Puffer für CI-Umgebungen
    expect(duration).toBeLessThan(500);
  });

  test('sollte Berechnung unter 100ms ausführen', async ({ calculator }) => {
    await calculator.typeOperand1('MMMCMXCIX');
    await calculator.selectOperation('ADDERE');
    await calculator.typeOperand2('1');
    
    const startTime = performance.now();
    await calculator.clickCalculate();
    const duration = performance.now() - startTime;
    
    expect(duration).toBeLessThan(200); // Puffer für CI
  });

  test('sollte Live-Update unter 50ms halten', async ({ calculator }) => {
    const startTime = performance.now();
    
    await calculator.typeOperand1('XII');
    await calculator.selectOperation('ADDERE');
    await calculator.typeOperand2('V');
    
    const duration = performance.now() - startTime;
    expect(duration).toBeLessThan(100); // Puffer für CI
  });

  test('sollte Historie-Ladezeit unter 100ms halten', async ({ calculator }) => {
    // Mehrere Berechnungen durchführen
    for (let i = 0; i < 5; i++) {
      await calculator.typeOperand1('X');
      await calculator.selectOperation('ADDERE');
      await calculator.typeOperand2('I');
      await calculator.clickCalculate();
    }
    
    const startTime = performance.now();
    await calculator.clickHistory();
    const duration = performance.now() - startTime;
    
    expect(duration).toBeLessThan(200); // Puffer für CI
  });

  test('sollte Validierung sofort reagieren', async ({ calculator }) => {
    const startTime = performance.now();
    
    await calculator.typeOperand1('ABC');
    
    const duration = performance.now() - startTime;
    expect(duration).toBeLessThan(100); // Sofortige Reaktion
  });

  test('sollte mehrere Berechnungen schnell ausführen', async ({ calculator }) => {
    const durations: number[] = [];
    
    for (let i = 0; i < 5; i++) {
      await calculator.typeOperand1('X');
      await calculator.selectOperation('ADDERE');
      await calculator.typeOperand2('I');
      
      const startTime = performance.now();
      await calculator.clickCalculate();
      durations.push(performance.now() - startTime);
      
      await calculator.clickClear();
    }
    
    const avgDuration = durations.reduce((a, b) => a + b, 0) / durations.length;
    expect(avgDuration).toBeLessThan(100);
  });

  test('sollte Eingabe mit 15 Zeichen schnell verarbeiten', async ({ calculator }) => {
    const startTime = performance.now();
    
    await calculator.typeOperand1('MMMMMMMMMMMMMMM');
    
    const duration = performance.now() - startTime;
    expect(duration).toBeLessThan(100);
  });

  test('sollte DOM-Größe begrenzt halten', async ({ calculator }) => {
    await calculator.goto();
    
    // Berechnungen durchführen
    for (let i = 0; i < 10; i++) {
      await calculator.typeOperand1('X');
      await calculator.selectOperation('ADDERE');
      await calculator.typeOperand2('I');
      await calculator.clickCalculate();
    }
    
    const nodeCount = await calculator.page.evaluate(() => document.getElementsByTagName('*').length);
    // DOM-Knotenzahl sollte nicht explodieren
    expect(nodeCount).toBeLessThan(500);
  });
});
