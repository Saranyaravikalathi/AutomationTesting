const { test, expect }= require('@playwright/test')

test('Home Page', async ({ page }) => {
    await page.goto('https://www.youtube.com/'); 
   // await page.waitForTimeout(3000); // Give some time for redirects if needed
   const pageTitle=await page.title();
   console.log('The page title is :'+pageTitle);
   //await expect(page).toHaveTitle('Youtube');
    console.log('Page URL is: ' + page.url());
    await expect(page).toHaveURL('https://www.youtube.com/'); 
    await page.close();
});
