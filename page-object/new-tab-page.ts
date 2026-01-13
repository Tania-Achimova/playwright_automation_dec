import { Page, Locator } from '@playwright/test';

export class NewTabPage {
   private readonly page: Page;
   public readonly newTabLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.newTabLink = page.locator('a[href="/windows/new"]');
    }

    // Navigate to the New Tab page
    public async navigateToNewTabPage(): Promise<void> {
        const url = 'https://practice.expandtesting.com/windows';
        await this.page.goto(url);

    }

    public async NewTabOpen(): Promise<Page> {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'), // Waits for the new tab to open
            this.newTabLink.click() // This will open a new tab
        ]);

        await newPage.waitForLoadState('domcontentloaded'); // Wait for the new tab to load completely
        return newPage;
    }
}