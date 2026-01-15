import { test, expect } from '../fixture/demoqa-login';


test('User land on profile page after login', async ({loggedInPage}) => {
    await expect(loggedInPage).toHaveURL('https://demoqa.com/profile');
    console.log('Current URL:', loggedInPage.url());
    await expect(loggedInPage.locator('[id="userName-value"]')).toContainText('Test123');
});     