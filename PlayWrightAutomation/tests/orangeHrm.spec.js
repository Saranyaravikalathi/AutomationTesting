const { test, expect } = require('@playwright/test');

test.describe('Orange HRM Test Cases', () => {
    let context, page;

    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();  
        page = await context.newPage();       
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // Login
        await page.locator('//input[@placeholder="Username"]').fill('Admin');
        await page.locator('//input[@placeholder="Password"]').fill('admin123');
        await page.locator('//button[@type="submit"]').click();

        await expect(page.locator('//h6[text()="Dashboard"]')).toBeVisible();
    });

    test('Search the products', async () => {
        await page.locator('//input[@placeholder="Search"]').fill('Admin');
        await page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]').click();
        await page.waitForTimeout(5000);
    });

});
