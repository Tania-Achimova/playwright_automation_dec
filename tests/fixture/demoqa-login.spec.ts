import { test, expect } from '../fixture/demoqa-login';

test('User land on profile page after login', async ({logInPage}) => {
    await expect(logInPage).toHaveURL('https://demoqa.com/profile');
    console.log('Current URL:', logInPage.url());
    await expect(logInPage.locator('#userName-value')).toHaveText('Test123');
});     