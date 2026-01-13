import { test as base, chromium, Page } from '@playwright/test';

type MyFixtures = {
    logInPage: Page;
};

export const test = base.extend<MyFixtures>({
    logInPage: async ({}, use) => {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        // Perform login steps here
        await page.goto('https://demoqa.com/login');
        await page.fill('#userName', 'Test123');
        await page.fill('#password', 'Password1!');
        await page.click('#login');

        await use(page);
        await browser.close();
    },
});

export { expect } from '@playwright/test';