import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/custom-world';

Given('the user is on the homepage', async function (this: CustomWorld) {
    await this.page.goto('/');
});

When ('the user accepts cookies', async function (this: CustomWorld) {
    // Dismiss cookie banner if present
    const cookieButton = this.page.getByRole('button', { name: 'Accept all'});
    if (await cookieButton.isVisible().catch(() => false)) {
        await cookieButton.click();
        await this.page.waitForTimeout(500);
    }
});

When('the user enters {string} in the search bar and clicks enter', { timeout: 6000 }, async function (this: CustomWorld, searchTerm: string) {
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
        break;
    }
    await this.page.keyboard.press('Enter');
});

Then('the search results for {string} should be displayed'{ timeout: 6000 }, async function (this: CustomWorld, searchTerm: string) {
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
        break;
    }
});

When('the user clicks filter button {string} that button should be highlighted'{ timeout: 6000 }, async function (this: CustomWorld, filterName: string) {
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
        break;
        case "videos":
            const videosTab = filterBtn.locator('a[href^="/videos"]');
            await videosTab.click();
            await this.page.waitForLoadState('networkidle');
            await expect(videosTab).toHaveClass('tab tab--highlighted tab--highlight-bar tab--icon');
        break;
    }
    await this.page.screenshot({ path: `screenshots/after-${filterName}-tab-click.png` })
});

When('the user clicks the search button {string} with no input he should see a prompt {string}'{ timeout: 6000 }, async function (this: CustomWorld, searchTerm: string, message: string) {
    const searchBar = this.page.getByTestId('search-form-input');
    await searchBar.fill(searchTerm);
    const searchButton = this.page.getByTestId('search-form-submit');
    await searchButton.click();
    const validationMessage = await searchBar.evaluate((el) => {
        return (el as HTMLInputElement).validationMessage;
    });

    expect(validationMessage).toBe(message);
    await this.page.screenshot({ path: `screenshots/after-empty-search-attempt.png` });
});