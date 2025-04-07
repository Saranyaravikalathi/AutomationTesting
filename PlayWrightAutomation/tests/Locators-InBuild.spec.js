const { test, expect } = require('@playwright/test');
test('Build-in Locators', async ({ page }) => {
    //open the url
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //getByAltText - to locate an element the image alternatively text
    const logo = await page.getByAltText("company-branding");
    console.log('The logo element is :' + logo);
    await expect(logo).toBeVisible();
    //getByPlaceholder()-to locate an element from placeholder attribute
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    //getByRole -to loacted by explicit and implicit accessibility attributes
    await page.getByRole('button',{type:"submit"}).click();
    //getByText()-it will return the text 
    const name=await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();
    await expect(await page.getByText(name)).toBeVisible();
    await page.close();

})