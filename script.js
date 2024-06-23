import { chromium } from 'playwright';

(async () => {
  // Launch a browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  // Open the target webpage
  await page.goto('https://tevisweb.ludwigshafen.de/');
  
  await page.waitForTimeout(3000);
  
  // Find the button and click it
  const button = await page.$('button[aria-label="Aufenthaltsrecht"]');
  await button.click();
  await page.waitForTimeout(2000);

  // Find the second button and click it
  const button1 = await page.$('button[aria-label="Erhöhen der Anzahl des Anliegens Verpflichtungserklärung für Besuchervisum"]');
  await button1.click();
  await page.waitForTimeout(2000);

  const input = await page.$('input[aria-label="Weiter"]');
  await input.click();
  await page.waitForTimeout(2000);

  const okButton = await page.$('#OKButton');

  // Click the button
  await okButton.click();

  await page.waitForTimeout(2000);
  const input2 = await page.$('input[aria-label="Stadtverwaltung Ludwigshafen am Rhein - Abteilung Aufenthaltsrecht auswählen"]');
  await input2.click();
  await page.waitForTimeout(20000);
  
  // Close the browser
  await browser.close();
})();
