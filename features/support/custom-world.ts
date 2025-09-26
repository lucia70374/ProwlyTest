import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { Page, Browser, chromium } from 'playwright';

export class CustomWorld extends World {
  public page!: Page;
  public browser!: Browser;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
