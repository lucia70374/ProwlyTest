import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
    // Force headless mode in CI
    headless: process.env.CI !== undefined
  },
});
