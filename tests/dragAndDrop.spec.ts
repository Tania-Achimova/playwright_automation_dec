import { test } from '@playwright/test';
import { DragAndDrop } from '../page-object/dragAndDrop';

test.describe('DATE PICKER', () => {
    test('Drag and Drop Element Test', async ({ page }) => {
        const dragAndDrop = new DragAndDrop(page);

        // Navigate to the drag and drop demo page
        const url = 'https://www.lambdatest.com/selenium-playground/drag-and-drop-demo';
        await page.goto(url);
        await page.pause();

        // Perform drag and drop action
        await dragAndDrop.dragAndDropElement('Draggable 1');
        await dragAndDrop.dragAndDropElement('Draggable 2');

        // Alternative drag and drop method
        await page.reload();

        await dragAndDrop.dragAndDropElementOption2('Draggable 1');
        await dragAndDrop.dragAndDropElementOption2('Draggable 2');

        await page.pause();
    });
});