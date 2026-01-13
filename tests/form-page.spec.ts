import { test, expect, chromium } from '@playwright/test';
import path from 'path';

// test.describe('FORM PAGE', () => {

//     test.beforeEach(async () => {
//         console.log("Before Each Test");
//     });

//     test.beforeAll(async () => {
//         console.log("Before All Tests");
//     });

//     test.afterEach(async ( ) => {
//         console.log("After Each Test");
//     });

//     test.afterAll(async () => {
//         console.log("After All Tests");
//     });

//     test('Test 1', () => {
//         console.log("Test 1");
//     })
//     test('Test 2', () => {
//         console.log("Test 2");
//     })
// });

//DRY DO NOT REPEAT YOURSELF

test.describe('FORM PAGE', () => {
    test('Fill the form', async ({ page }) => {
        //    const browser = await chromium.launch();
        //    const context = await browser.newContext();
        //    const page = await context.newPage();
        await page.pause();
        await page.goto('https://www.lambdatest.com/selenium-playground/input-form-demo');
        await page.locator('#name').fill('Mike Smith');
        // await page.fill('#name', 'Mike Smith'); // Alternative way
        await page.locator("[class='w-full border border-gray-90 text-size-14 rounded mt-10 px-10 py-5'][type='email']")
            .pressSequentially('mike.smith@example.com', { delay: 200 });
        await page.locator("input[placeholder='Password']").fill('Password123');
        await page.locator("[for=\"companyname\"] ~ input#company").fill('LambdaTest');
        await page.locator('id=websitename').fill('www.lambdatest.com');
        await page.selectOption('select[name="country"]', { label: 'United States' });
        await page.locator('label:has-text("City") ~ input#inputCity').fill('San Francisco');
        await page.getByPlaceholder('Address 1').fill('1234 Market St');
        await page.getByPlaceholder('Address 2').fill('Suite 100');
        await page.locator('[for="inputState"] ~ input#inputState').fill('California');
        await page.getByRole('textbox', { name: 'Zip Code' }).fill('94103');
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.locator('h2:has-text("Input form validation")')).toBeVisible();
        await expect(page.locator('.success-msg')).toHaveText('Thanks for contacting us, we will get back to you shortly.');
        await page.pause();
    })

});

test.describe('HTML Form', () => {
    test('Fill the HTML form', async ({ page }) => {
        await page.pause();
        await page.goto('https://testpages.eviltester.com/pages/forms/html-form/');
        await page.pause();
        await page.locator('input[name="username"]').fill('TataCapriz');
        await page.locator('input[name="password"]').fill('Password1234');
        await page.getByText('Comment').fill('This is my comment for testing purpose');
        await page.getByRole('button', { name: 'Choose File' }).click();
        await page.getByText('Checkbox 1').click();
        await page.getByText('Checkbox 2').click();
        await page.getByText('Checkbox 3').click();
        await page.getByText('radio 1').click();
        await page.getByText('radio 2').click();
        await page.getByText('radio 3').click();
        await page.selectOption('select[name="multipleselect[]"]', ['ms3', 'ms1']);
        await page.selectOption('select[name="dropdown"]', 'dd2');
        await page.locator('input[type="image"]').click();
        await page.getByRole('button', { name: 'Cancel' }).click();
        //await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.locator("p:has-text(\"You submitted the form. The details below show the values you entered for processing.\")")).toBeVisible();
        await page.pause();
    })
});

test.describe('PRACTICE Form', () => {
    test('Fill the Practice form', async ({ page }) => {
        //await page.pause();
        await page.goto('https://demoqa.com/automation-practice-form');
        //await page.pause();
        await page.locator('#firstName').fill('Tata');
        await page.locator('#lastName').fill('Capriz');
        await page.locator('#userEmail').fill('tatacapriz@example.com');
        await page.locator('[for="gender-radio-1"]').click();
        await page.locator('[for="gender-radio-2"]').click();
        await page.locator('[for="gender-radio-3"]').click();
        await page.locator('#userNumber').fill('1234567890');
        await page.locator('#dateOfBirthInput').click();
        await page.locator('.react-datepicker__month-select').selectOption('1');
        await page.locator('.react-datepicker__year-select').selectOption('2000');
        await page.locator('.react-datepicker__day--015').click();
        await page.locator('#subjectsInput').fill('Maths');
        await page.locator('#subjectsInput').press('Enter');
        await page.locator('label[for="hobbies-checkbox-1"]').click();
        await page.locator('label[for="hobbies-checkbox-2"]').click();
        await page.locator('label[for="hobbies-checkbox-3"]').click();
        await page.locator('#uploadPicture').click();

        const filePath = path.resolve(__dirname, '../data/il_340x270.4585494486_r3e7.webp');
        await page.setInputFiles('#uploadPicture', filePath);

        await page.locator('#currentAddress').click();
        await page.locator('#currentAddress').fill('1234 Elm Street, Springfield, IL');
        await page.locator('#state').click();
        await page.locator('[id="react-select-3-input"]').fill('NCR');
        await page.locator('[id="react-select-3-input"]').fill('Uttar Pradesh');
        await page.locator('[id="react-select-3-input"]').fill('Haryana');
        await page.locator('[id="react-select-3-input"]').fill('Rajasthan');
        await page.getByText('Select City').isDisabled();
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText('Thanks for submitting the form');
        await page.pause();
    })
});

test.describe('REGISTRATION PAGE', () => {
    test('Registration Test', async ({ page }) => {
        await page.pause();
        await page.goto('https://demoqa.com/register');
        await page.locator('h1:has-text("Register")').isVisible();
        await page.locator('h4:has-text("Register to Book Store")').isVisible();
        await page.locator('#firstname').fill('Tata');
        await page.locator('#lastname').fill('Capriz');
        await page.locator('#userName').fill('TataCapriz');
        await page.locator('input[id="password"]').fill('Password1234!');
        await page.frameLocator('iframe[title="reCAPTCHA"]').locator('#recaptcha-anchor').click();
        await page.getByRole('button', { name: 'Register' }).click();
        //await expect(page.locator('.main-header')).toHaveText('User Name');
        await page.pause();
    })
});

test.describe('LOGIN PAGE', () => {
    test('Login Test', async ({ page }) => {
        await page.pause();
        await page.goto('https://demoqa.com/login');
        await page.locator('h1:has-text("Login")').isVisible();
        await page.locator('h2:has-text("Welcome,")').isVisible();
        await page.locator('h5:has-text("Login in Book Store")').isVisible();
        await page.locator('#userName').fill('TataCapriz');
        await page.locator('input[id="password"]').fill('Password1234!');
        await page.getByRole('button', { name: 'Login' }).click();
        //await expect(page.getByText('User Name')).toHaveText('TataCapriz');
        await page.pause();

    })
});

test.describe('DATE PICKER PAGE', () => {
    test.only('Navigate to Date Picker Page From Today', async ({ page }) => {
        await page.goto('https://demoqa.com/date-picker');
        //await page.pause();
        await page.locator('h1:has-text("Date Picker")').isVisible();
        await page.locator('#datePickerMonthYearInput').click();
        await page.locator('.react-datepicker__month-select').selectOption('11');
        await page.locator('.react-datepicker__year-select').selectOption('2025');
        await page.locator('.react-datepicker__day--011').click();
        await expect(page.locator('#datePickerMonthYearInput')).toHaveValue('12/11/2025');

        await page.locator('#dateAndTimePickerInput').click();
        await page.locator('.react-datepicker__month-read-view').click();
        await page.locator('.react-datepicker__month-option >> text=December').click();
        await page.locator('.react-datepicker__year-read-view').click();
        await page.locator('.react-datepicker__year-option >> text=2025').click();
        await page.locator('.react-datepicker__day--011').click();
        await page.locator('.react-datepicker__time-list-item >> text=10:30').click();
        await expect(page.locator('#dateAndTimePickerInput')).toHaveValue('December 11, 2025 10:30 AM');
        await page.pause();
    })
});

