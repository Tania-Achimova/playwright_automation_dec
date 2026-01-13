import { expect, test } from '@playwright/test';

// test.describe('UI tests', () => {
//     test.beforeEach(async ({ page }) => {
//         await page.goto('https://demoqa.com/login');
//     });
//     test('Verify authentication and logout button', async ({ page, browserName }) => {
//         await page.goto('https://demoqa.com/books');
//         const logOutButton = page.locator('#submit');
//         await page.waitForTimeout(2000);
//         await expect(logOutButton).toHaveText('Log out');

//         await page.screenshot({ path: `screenshots/${browserName}-profile.png` });
//         await page.pause();
//     });
// });

    // test('Navigate to Book Store Page From Profile Page', async ({ page }) => {
    //     await page.goto('https://demoqa.com/profile');
    //     await page.locator('h1:has-text("Profile")').isVisible();
    //     await page.getByRole('button', { name: 'Go To Book Store' }).click();
    //     await page.locator('h1:has-text("Book Store")').isVisible();
    //     await page.pause();
    // });

    test.describe('UI tests', () => {
        test.beforeEach(async ({ page }) => {
            await page.goto('https://coding.pasv.us/user/login');
        });
        test('Verify authentication and profile name', async ({ page , browserName }) => {
        
            await page.goto('https://coding.pasv.us/profile/69432363065029ae571fafa8');

            const profileName = page.locator('h1:has-text("Tania Achimova")');
            await page.waitForTimeout(2000);
            await expect(profileName).toBeVisible();
            await page.screenshot({ path: `screenshots/${browserName}-profile.png` });
            await page.pause();
        });
    });