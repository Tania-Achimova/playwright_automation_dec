// import { FullConfig, chromium } from "@playwright/test";

// async function globalSetup(config: FullConfig) {
//     const browser = await chromium.launch();
//     const context = await browser.newContext();
//     const page = await context.newPage();

//     // Perform login steps
//     await page.goto('https://demoqa.com/login', { waitUntil: 'domcontentloaded'});
//     await page.getByPlaceholder('UserName').fill('Test123');
//     await page.getByPlaceholder('Password').fill('Password1!');
//     await page.getByRole('button', { name: 'Login', exact: true }).click();

//     // Verify successful login by checking for the presence of the logout button
//     await page.waitForURL('https://demoqa.com/profile');
//     const user = await page.locator('#userName-value').innerText();
//     if (user !== 'Test123') {
//         throw new Error('Login failed during global setup');
//     }
//     // Save authentication state to a file
//     await context.storageState({ path: './.auth/user.json' });
//     await browser.close();
// }

// export default globalSetup;