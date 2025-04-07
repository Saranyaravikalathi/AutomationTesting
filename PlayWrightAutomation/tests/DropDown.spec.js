const {test,expect} = require('@playwright/test');

test('Dropdown Demo',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveTitle('Automation Testing Practice');
    //Select single DropDown
    await expect(page.locator('#country')).toBeEnabled();
    //we can pass label and visible Text
   // await page.locator('#country').selectOption({label:'United Kingdom'});
   //we can pass as Visible Text
   //await page.locator('#country').selectOption('India');
   //passing value for the attribute
   //await page.locator('#country').selectOption({value:'uk'});
   //By using Index
   //await page.locator('#country').selectOption({index:5});
   //another menthod to select drp down
   //await page.selectOption('#country','uk');
   
   //Assertions
   //1) check num of option in drp - Approach 1
   /*const options = await page.locator('#country option');
   await page.waitForTimeout(2000);
   await expect(options).toHaveCount(10);*/
   //2) get all the options in array formatand find the length of the array
   /*const options=await page.$$('#country option');
   console.log("Number of Options: "+options.length);
   await expect(options.length).toBe(10);*/

   //3 Check presence of value in the drp or not
   const content=await page.locator('#country').textContent();
   await expect(content.includes('India')).toBeTruthy();

   await page.waitForTimeout(10000);
    
});