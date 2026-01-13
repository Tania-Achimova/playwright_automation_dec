// import { test as setup, expect } from '@playwright/test';

// const authFile = './.auth/user.json';

// // setup('Authenticate user', async ({ page }) => {

// //     await page.goto('https://demoqa.com/login', {waitUntil: 'domcontentloaded'}); 
// //     await page.getByPlaceholder('UserName').fill('Test123');
// //     await page.getByPlaceholder('Password').fill('Password1!');
// //     await page.getByRole('button', { name: 'Login', exact: true }).click();

// //     // Verify successful login by checking for the presence of the logout button
// //     await page.waitForURL('https://demoqa.com/profile');
// //     await expect(page.locator('#userName-value')).toHaveText('Test123');

// //     // Save authentication state to a file
// //     await page.context().storageState({ path: authFile });


// // });

// setup('Authenticate user', async ({ page }) => {

//     await page.goto('https://coding.pasv.us/user/login', {waitUntil: 'domcontentloaded'}); 
//     await page.getByPlaceholder('Email').fill('sunbuterfly888@gmail.com');
//     await page.locator('#normal_login_password').fill('111222Test!');
//     await page.getByRole('button', { name: 'Войти', exact: true }).click();

//     // Verify successful login by checking for the presence of the logout button
//     await page.waitForURL('https://coding.pasv.us/profile/69432363065029ae571fafa8');
//     await expect(page.locator('h1:has-text("Tania Achimova")')).toBeVisible();
    
//     // Save authentication state to a file
//     await page.context().storageState({ path: authFile });
// });
