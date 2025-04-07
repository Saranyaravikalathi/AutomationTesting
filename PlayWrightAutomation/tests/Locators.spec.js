import {test,expect} from "@playwright/test"
 test('Open the Url', async ({page}) =>{
    await page.goto('https://www.demoblaze.com/');
    const pageTitle = await page.title();
    console.log("Page title is : "+pageTitle);
    await expect(page).toHaveTitle('STORE')
 }),
 test('Login', async({page})=>{
    await page.goto('https://www.demoblaze.com/');
    await page.locator("//a[@id='login2']").click();
    //pass username and password
    await page.locator('#loginusername').fill('Saranya_15');
    await page.fill('#loginpassword','Saranya@15');
    await page.click('//button[text()="Log in"]');
    const LogoutVisible =await page.locator('//a[text()="Log out"]');
    await expect(LogoutVisible).toBeVisible();
    await page.close();

 })