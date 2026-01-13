import { test, expect, FrameLocator } from '@playwright/test';

test.describe('IFrame Tests', () => {
    test('should interact with elements inside an iframe', async ({ page }) => {
        // Navigate to a page with an iframe
        await page.goto('https://www.lambdatest.com/selenium-playground/nested-frames');

        // Get the iframe locator (frame-bottom)
        const frameBottom: FrameLocator = page.frameLocator('[name="frame-bottom"]');

        // Get the text inside the iframe and verify its text content
        const leftFrameText: string | null = await frameBottom.frameLocator('[name="frame-left"]').locator('body').textContent();

        const middleFrameText: string | null = await frameBottom.frameLocator('[name="frame-middle"]').locator('body').textContent();

        const rightFrameText: string | null = await frameBottom.frameLocator('[name="frame-right"]').locator('body').textContent();

        console.log('Left Frame Text:', leftFrameText);
        console.log('Middle Frame Text:', middleFrameText);
        console.log('Right Frame Text:', rightFrameText);

        // Assertions to verify the text content
        expect(leftFrameText).toContain('Left');
        expect(middleFrameText).toContain('Middle');
        expect(rightFrameText).toContain('Right');
    });
});