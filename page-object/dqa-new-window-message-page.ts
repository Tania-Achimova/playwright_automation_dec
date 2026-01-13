
import { expect, Locator, Page } from '@playwright/test';


export class NewWindowMessagePage {
    private readonly page: Page;
    public readonly newWindowMessageLink: Locator;  

    constructor(page: Page) {
        this.page = page;
        this.newWindowMessageLink = page.locator('[id="msgWindowButtonWrapper"] > button');
    }
    // Navigate to the New Window Message page
    public async navigateToNewWindowMessagePage(): Promise<void> {
        const newWindowMessage = "https://demoqa.com/browser-windows";
        await this.page.goto(newWindowMessage);
    }
    public async newWindowMessageOpen(): Promise<Page> {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'), // Waits for the new window message to open   
            this.newWindowMessageLink.click() // This will open a new window message
        ]);
        await newPage.waitForLoadState(); // Wait for the new window message to load completely
        return newPage;
    } 
    public async getMessageText(newPage: Page): Promise<string> {
        const bodyLocator = newPage.locator('body[data-new-gr-c-s-check-loaded="14.1268.0"]');

        expect(bodyLocator).toContainText('Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.');

        return await bodyLocator.textContent() || '';   
    }  
}
