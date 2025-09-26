import { Given, When, Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';
import { CustomWorld } from '../support/custom-world';

Given('the user is on the homepage', async function (this: CustomWorld) {
    await this.page.goto('/');
});

When('the user enters {string} in the search bar and clicks enter', async function (this: CustomWorld, searchTerm: string) {
  const searchBar = this.page.getByTestId('search-form-input');
  await searchBar.fill(searchTerm);
  await this.page.keyboard.press('Enter');
});

Then('the search results for {string} should be displayed', async function (this: CustomWorld, searchTerm: string) {
    const header = this.page.getByTestId('related-queries-header');
    await header.waitFor({ state: 'visible' });
    await expect(header).toContainText(searchTerm);
});