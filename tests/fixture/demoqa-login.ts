import { test as base, chromium, Page } from '@playwright/test';
import { blockAds } from '../utilities/abortAd';

type MyFixtures = {
    loggedInPage: Page;
};

export const test = base.extend<MyFixtures>({
    loggedInPage: async ({}, use) => {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        // Perform login steps here
        // await blockAds(page);

        await page.goto('https://demoqa.com/login');
        await page.locator('#userName').fill('Test123');
        await page.locator('#password').fill('Password1!');
        await page.locator('#login').click();

        await use(page);
        await browser.close();
    },
});

export { expect } from '@playwright/test';