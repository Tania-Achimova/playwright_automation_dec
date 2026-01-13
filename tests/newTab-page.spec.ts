import { test, expect } from '@playwright/test';
import { NewTabPage } from '../page-object/new-tab-page';
import { blockAds } from './utilities/abortAd';

test.describe('New Tab Page Tests', () => {
    test('should open a new tab and verify its content', async ({ page }) => {
        await blockAds(page);

        // Navigate to the New Tab page
        const newTabPage = new NewTabPage(page);
        await newTabPage.navigateToNewTabPage();

        const newPage = await newTabPage.NewTabOpen();
        const textContent = await newPage.locator('h1').textContent();

        expect(textContent).toContain('Example of a new window page for Automation Testing Practice');

    });
});
