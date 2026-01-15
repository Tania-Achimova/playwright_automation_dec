import { test, expect } from '../fixture/demoqa-login';
import { blockAds } from '../utilities/abortAd';


test('User land on profile page after login', async ({loggedInPage}) => {
    // await blockAds(loggedInPage);

    await expect(loggedInPage).toHaveURL('https://demoqa.com/profile');
    console.log('Current URL:', loggedInPage.url());
    await expect(loggedInPage.locator('#userName-value')).toHaveText('Test123');
});     