import { World, setWorldConstructor } from '@cucumber/cucumber';
import { Page, BrowserContextOptions } from 'playwright';
import { LaunchOptions } from 'playwright-core';

export interface PlaywrightParameters {
  launchOptions: LaunchOptions;
  contextOptions: BrowserContextOptions;
}

export class CustomWorld extends World {
  public page!: Page;
  // Use the 'declare' modifier to correctly overwrite the base property
  declare public parameters: {
    playwright: PlaywrightParameters;
  };
}

setWorldConstructor(CustomWorld);
