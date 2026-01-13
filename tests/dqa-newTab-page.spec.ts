import { test, expect } from '@playwright/test';
import { NewTabPage } from '../page-object/dqa-new-tab-page';
import { NewWindowPage } from '../page-object/dqa-new-window-page';
import { NewWindowMessagePage } from '../page-object/dqa-new-window-message-page';
import { blockAds } from '../tests/utilities/abortAd';

test.describe('New Tab, New Window, New Window Message Page Tests', () => {
    test('should open a new tab and verify its content', async ({ page }) => {
        await blockAds(page);

        // Navigate to the New Tab page
        const newTabPage = new NewTabPage(page);
        await newTabPage.navigateToNewTabPage();

        const newPage = await newTabPage.newTabOpen();
        const textContent = await newPage.locator('h1').textContent();

        expect(textContent).toContain('This is a sample page');
    });

    test('should open a new window and verify its content', async ({ page }) => {
        await blockAds(page);

        // Navigate to the New Window page
        const newWindowPage = new NewWindowPage(page);
        await newWindowPage.navigateToNewWindowPage();

        const newPage = await newWindowPage.newWindowOpen();
        const textContent = await newPage.locator('h1').textContent();

        expect(textContent).toContain('This is a sample page');
    });

    test('should open a new window message and verify its content', async ({ page }) => {
        await blockAds(page);

        // Navigate to the New Window Message page
        const newWindowMessagePage = new NewWindowMessagePage(page);
        await newWindowMessagePage.navigateToNewWindowMessagePage();

        const newPage = await newWindowMessagePage.newWindowMessageOpen();
        const bodyText = await newPage.locator('body').textContent();

        expect(bodyText).toContain('Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.');
    });
});

