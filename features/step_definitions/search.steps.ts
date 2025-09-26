import { Given, When, Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';
import { CustomWorld } from '../support/custom-world';

Given('the user is on the homepage', async function (this: CustomWorld) {
    await this.page.goto('/');
});

When('the user enters {string} in the search bar and clicks enter', async function (this: CustomWorld, searchTerm: string) {
  const searchBar = this.page.getByTestId('search-form-input');
  switch (searchTerm){
    case "semrush ai": 
    await searchBar.fill("semrush ai");
    break;
    case "seeemrush aai":
    await searchBar.fill("seeemrush aai");
    break;
    case "SEmRuSh aI":
    await searchBar.fill("SEmRuSh aI");
  }
  await this.page.keyboard.press('Enter');
});

Then('the search results for {string} should be displayed', async function (this: CustomWorld, searchTerm: string) {
    const header = this.page.getByTestId('related-queries-header').first();
    await header.waitFor({ state: 'visible' });
    switch (searchTerm){
    case "semrush ai": 
    await expect(header).toContainText("semrush ai");
    break;
    case "seeemrush aai":
    await expect(header).toContainText("seeemrush aai");
    break;
    case "SEmRuSh aI":
    await expect(header).toContainText("SEmRuSh aI");
    }
});

When('the user clicks filter button {string} that button should be highlighted', { timeout: 10 * 1000 }, async function (this: CustomWorld, filterName: string) {
    const filterBtn = this.page.getByLabel('Search menu').first();
    switch (filterName){
        case "images":
        const imagesTab = filterBtn.locator('a[href^="/images"]');
        await imagesTab.click();
        await this.page.waitForLoadState('networkidle');
        await expect(imagesTab).toHaveClass('tab tab--highlighted tab--highlight-bar tab--icon');
        break;
        case "news":
        const newsTab = filterBtn.locator('a[href^="/news"]');
        await newsTab.click();
        await this.page.waitForLoadState('networkidle');
        await expect(newsTab).toHaveClass('tab tab--highlighted tab--highlight-bar tab--icon');
        case "videos":
        const videosTab = filterBtn.locator('a[href^="/videos"]');
        await videosTab.click();
        await this.page.waitForLoadState('networkidle');
        await expect(videosTab).toHaveClass('tab tab--highlighted tab--highlight-bar tab--icon');
    }
});