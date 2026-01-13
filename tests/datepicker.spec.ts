import { expect, test } from '@playwright/test';
import { DatePicker, DatePicker2 } from '../page-object/date-picker';


test.describe('DATE PICKER PAGE', () => {
    test('Navigate to Date Picker Page From Today', async ({ page }) => {
        const datePicker = new DatePicker(page);
        await datePicker.navigateToDatePicker();
        await datePicker.verifyHeader();
        await datePicker.dateFromToday();
        console.log(page.url());
        await expect(page).toHaveURL(/jquery-date-picker-demo/);
    });

    test('Navigate to Date Picker Page To', async ({ page }) => {
        const datePicker = new DatePicker2(page);
        await datePicker.navigateToDatePicker();
        await datePicker.verifyHeader();
        await datePicker.dateToToday();
        console.log(page.url());
        await expect(page).toHaveURL(/jquery-date-picker-demo/);
    });

});

