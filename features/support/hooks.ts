import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { Browser, chromium, BrowserContextOptions } from 'playwright';
import * as playwright from 'playwright';
import { CustomWorld } from './custom-world';

let browser: Browser;

BeforeAll(async function () {
  // Launch the browser once for all scenarios
  browser = await chromium.launch({
    headless: false, // Set Playwright options here, e.g., to run in headed mode
    slowMo: 50,      // or to slow down execution
  });
  playwright.selectors.setTestIdAttribute('data-test-id');
});

Before(async function (this: CustomWorld) {
  // Set context options for each scenario
  const contextOptions: BrowserContextOptions = {
    // Example of setting a base URL for each page
    baseURL: 'https://www.ecosia.org/',
    viewport: { width: 1280, height: 720 },
  };

  const context = await browser.newContext(contextOptions);
  this.page = await context.newPage();
});

After(async function (this: CustomWorld) {
  // Close the page after each scenario
  await this.page.close();
});

AfterAll(async function () {
  // Close the browser after all scenarios
  await browser.close();
});
