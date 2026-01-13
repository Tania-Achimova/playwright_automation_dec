import { expect } from '../fixture/lc-login';
import { test } from '../fixture/lc-login';

test('User land on profile page after login', async ({loggedInPage}) => {
    await expect(loggedInPage).toHaveURL(/.*\profile\//);
    console.log('Current URL:', loggedInPage.url());
    await expect(loggedInPage.locator('.me-2 ~ h1')).toContainText('Tania Achimova');

});