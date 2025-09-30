// features/support/hooks.ts
import { Before, After, BeforeAll, AfterAll, World } from '@cucumber/cucumber';
import { Browser, chromium, BrowserContextOptions } from 'playwright';
import * as playwright from 'playwright';
import { CustomWorld } from './custom-world';

let browser: Browser;
let config: {
  playwright: {
    launchOptions: {
      headless: boolean;
      slowMo: number;
    };
    contextOptions: BrowserContextOptions;
  };
};

BeforeAll(async function () {
  const world = this as World & { parameters: typeof config.playwright };
  config = world.parameters;
  
  const { launchOptions } = config.playwright;
  browser = await chromium.launch(launchOptions);
  playwright.selectors.setTestIdAttribute('data-test-id');
});

Before(async function (this: CustomWorld) {
  const { contextOptions } = config.playwright;
  const context = await browser.newContext(contextOptions);
  this.page = await context.newPage();
});

After(async function (this: CustomWorld) {
  await this.page.close();
});

AfterAll(async function () {
  await browser.close();
});
