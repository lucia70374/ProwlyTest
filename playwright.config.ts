import { defineConfig } from '@playwright/test';

export default defineConfig({
    retries: process.env.CI ? 1 : 0, // Retry once on CI
  use: {
    trace: 'on-first-retry',
    video: 'on-first-retry',
  },
});
