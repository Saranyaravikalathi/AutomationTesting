import { test, expect } from '@playwright/test';

test.describe('Orange Hrm Test Cases', () => {
    let page, context;

    test.beforeAll('Login to the Website', async ({ browser }) => {
        context = await browser.newContext();  
        page = await context.newPage(); 
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await expect(page).toHaveTitle('OrangeHRM');

        await page.locator('//input[@placeholder="Username"]').fill('Admin');
        await page.waitForTimeout(3000);

        await page.locator('//input[@placeholder="Password"]').fill('admin123');
        await page.waitForTimeout(3000);

        await page.locator('//button[@type="submit"]').click();
    });
    test('Navigate to dashboard',async()=>{
        await expect(page.locator('//h6[text()="Dashboard"]')).toBeVisible();
    });

});
