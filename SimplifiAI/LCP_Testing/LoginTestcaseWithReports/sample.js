// module.exports = {
//     'LCP Automation Script': function (browser) {
      describe('LCP Automation Test Suite', function () {
        // Hook to open the browser and navigate to the URL
        before(function (browser) {
          openUrl(browser);
        });
  
        // Hook to close the browser after all tests are done
        after(function (browser) {
          browser.end();
        });
  
        // Test Case 1: Verify UI elements exist
        it('should verify that UI elements are visible', function (browser) {
          loginPage(browser);
        });
  
        // Test Case 2: Attempt login with empty fields
        it('should show error messages for empty fields', function (browser) {
          browser
            .useXpath()
            .click('//button[@type="submit"]');
          // Add assertions for error messages if needed
        });
  
        // Test Case 3: Attempt login with invalid email
        it('should show error message for invalid email', function (browser) {
          browser
            .useXpath()
            .setValue('//input[@name="username"]', 'saranya@gmail.com')
            .setValue('//input[@name="password"]', 'Password123!')
            .click('//button[@type="submit"]')
            .assert.containsText('//span[@class="ulp-input-error-message"]', 'Wrong email or password');
        });
  
        // Test Case 4: Attempt login with incorrect credentials
        it('should show error message for incorrect credentials', function (browser) {
          browser
            .useXpath()
            .clearValue('//input[@name="username"]')
            .clearValue('//input[@name="password"]')
            .setValue('//input[@name="username"]', 'saranya.ravikalathi@neartekpod.com')
            .setValue('//input[@name="password"]', 'admin@123')
            .click('//button[@type="submit"]')
            .assert.containsText('//span[@class="ulp-input-error-message"]', 'Wrong email or password');
        });
  
        // Test Case 5: Successful login
        it('should log in successfully with valid credentials', function (browser) {
          browser
            .useXpath()
            .clearValue('//input[@name="username"]')
            .clearValue('//input[@name="password"]')
            .setValue('//input[@name="username"]', 'saranya.ravikalathi@neartekpod.com')
            .setValue('//input[@name="password"]', 'Qwerty@123')
            .click('//button[@type="submit"]');
          // Add assertions for successful login if needed
        });
      });
//     },
//   };
  
//   // Function to open the URL
//   function openUrl(browser) {
//     browser
//       .url('https://dev2.lcp.neartekpod.io/')
//       .waitForElementVisible('body', 1000)
//       .pause(3000);
//     console.log('Launched the browser and navigated to the URL');
//   }
  
//   // Function to verify login page elements
//   function loginPage(browser) {
//     browser
//       .useXpath()
//       .assert.visible('//input[@name="username"]', 'Email input field is visible')
//       .assert.visible('//input[@name="password"]', 'Password input field is visible')
//       .assert.visible('//button[@type="submit"]', 'Continue button is visible');
//   }