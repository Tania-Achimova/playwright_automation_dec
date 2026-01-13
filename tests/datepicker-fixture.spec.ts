import { test } from '../page-object/base-page';

test.describe('DATE PICKER PAGE', () => {
    test('Navigate to Date Picker Page From Today', async ({ datePicker }) => {
        await datePicker.navigateToDatePicker();
        await datePicker.verifyHeader();
        await datePicker.dateFromToday();
    });
});