
import { expect, Locator, Page } from '@playwright/test';


export class NewWindowPage {
    private readonly page: Page;
    public readonly newWindowLink: Locator;


    constructor(page: Page) {
        this.page = page;
        this.newWindowLink = page.locator('[id="windowButtonWrapper"] > button');
    }
    // Navigate to the New Window page
    public async navigateToNewWindowPage(): Promise<void> {
        const url = "https://demoqa.com/browser-windows";
        await this.page.goto(url);
    }
    public async newWindowOpen(): Promise<Page> {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'), // Waits for the new window to open   
            this.newWindowLink.click() // This will open a new window
        ]);
        await newPage.waitForLoadState(); // Wait for the new window to load completely
        return newPage;
    }
}