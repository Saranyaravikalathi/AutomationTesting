describe('LCP Automation Test Suite', function () {

  it('Open Url', function (browser) {
    browser
    //   .url('https://dev2.lcp.neartekpod.io/')
    //   .waitForElementVisible('body', 1000)
    //   .pause(3000)
    //  // console.log('Launch the browser')
    .url('https://dev2.lcp.neartekpod.io/')
    .waitForElementVisible('body', 10000) // Wait up to 10 seconds for the body to load
    .pause(3000)
    .perform(() => {
      console.log('Launched the browser and navigated to the URL');
    });
  });
  it('Login Test Cases', function (browser) {
    browser
    // Test Case 1: Verify UI elements exist
            .useXpath()
            .assert.visible('//input[@name="username"]', 'Email input field is visible')
            .assert.visible('//input[@name="password"]', 'Password input field is visible')
            .assert.visible('//button[@type="submit"]', 'Continue button is visible');
      
          // Test Case 2: Attempt login with empty fields
          browser
            .useXpath()
            .click('//button[@type="submit"]')
      
          // Test Case 3: Attempt login with invalid email
          browser
            .useXpath()
            .setValue('//input[@name="username"]', 'saranya@gmail.com') 
            .setValue('//input[@name="password"]', 'Password123!')
            .click('//button[@type="submit"]')
            //.waitForElementVisible('//span[@class="ulp-input-error-message"]', 10000) 
            //.assert.containsText('', 'Wrong email or password'); 
      
          // Test Case 4: Attempt login with incorrect credentials
         browser
            .useXpath()
            .clearValue('//input[@name="username"]')
            .clearValue('//input[@name="password"]')
            .setValue('//input[@name="username"]', 'saranya.ravikalathi@neartekpod.com') 
            .setValue('//input[@name="password"]', 'admin@123') 
            .click('//button[@type="submit"]')
           .assert.containsText('//span[@id="error-element-password"]', 'Wrong email or password');
        
          // Test Case 5: Successful login
          browser
            .useXpath()
            .clearValue('//input[@name="username"]')
            .clearValue('//input[@name="password"]')
            .setValue('//input[@name="username"]', 'saranya.ravikalathi@neartekpod.com') 
            .setValue('//input[@name="password"]', 'Qwerty@123') 
            .click('//button[@type="submit"]')
            //.waitForElementVisible('.dashboard', 5000) 
           //.assert.urlContains('/dashboard'); 
      
          // Test Case 6: Verify Forgot Password Link
          
        });
});
  