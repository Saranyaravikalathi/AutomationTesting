/*describe('LCP Automation Test Suite', function () {
  this.timeout(20000); // Increased timeout for all tests

  it('Open Url', function (browser, done) {
    browser
      .url('https://dev2.lcp.neartekpod.io/')
      .waitForElementVisible('body', 5000) // Wait until page is visible
      .pause(5000) // Pause to allow elements to load
      .saveScreenshot('./screenshots/open_url.png')
  });

  it('Login Test Cases', function (browser, done) {
    // Test Case 1: Verify UI elements exist
    browser
      .useXpath()
      .waitForElementVisible('//input[@name="username"]', 5000, 'Email input field is visible')
      .waitForElementVisible('//input[@name="password"]', 5000, 'Password input field is visible')
      .waitForElementVisible('//button[@type="submit"]', 5000, 'Continue button is visible')
      .saveScreenshot('./screenshots/login_ui_elements.png');

    // Test Case 2: Attempt login with empty fields
    browser
      .click('//button[@type="submit"]')
      .pause(3000)
      .saveScreenshot('./screenshots/login_empty_fields.png');

    // Test Case 3: Attempt login with invalid email
    browser
      .clearValue('//input[@name="username"]')
      .clearValue('//input[@name="password"]')
      .setValue('//input[@name="username"]', 'saranya@gmail.com')
      .setValue('//input[@name="password"]', 'Password123!')
      .click('//button[@type="submit"]')
      .pause(3000)
      .saveScreenshot('./screenshots/login_invalid_email.png');

    // Test Case 4: Attempt login with incorrect credentials
    browser
      .clearValue('//input[@name="username"]')
      .clearValue('//input[@name="password"]')
      .setValue('//input[@name="username"]', 'saranya.ravikalathi@neartekpod.com')
      .setValue('//input[@name="password"]', 'admin@123')
      .click('//button[@type="submit"]')
      .waitForElementVisible('//span[@id="error-element-password"]', 5000)
      .assert.containsText('//span[@id="error-element-password"]', 'Wrong email or password')
      .pause(3000)
      .saveScreenshot('./screenshots/login_incorrect_credentials.png');

    // Test Case 5: Successful login
    browser
      .clearValue('//input[@name="username"]')
      .clearValue('//input[@name="password"]')
      .setValue('//input[@name="username"]', 'saranya.ravikalathi@neartekpod.com')
      .setValue('//input[@name="password"]', 'Qwerty@123')
      .click('//button[@type="submit"]')
      .pause(5000) 
      .saveScreenshot('./screenshots/successful_login.png')
    
  });
});*/
const fs = require('fs');
const path = require('path');

describe('LCP Automation Test Suite', function () {
  this.timeout(20000); // Increased timeout for all tests

  function attachScreenshot(browser, screenshotName) {
    const screenshotPath = `./screenshots/${screenshotName}.png`;

    browser.saveScreenshot(screenshotPath, function (result) {
      if (result.value) {
        const screenshotData = fs.readFileSync(screenshotPath, 'base64');
        browser.allure.createAttachment('Screenshots', screenshotData, 'image/png');
      }
    });
  }

  it('Open Url', function (browser) {
    browser
      .url('https://dev2.lcp.neartekpod.io/')
      .waitForElementVisible('body', 5000, '✅ Page loaded successfully')
      .pause(5000);

    attachScreenshot(browser, 'open_url'); // Attach screenshot to Allure
  });

  it('Login Test Cases', function (browser) {
    // Test Case 1: Verify UI elements exist
    browser
      .useXpath()
      .waitForElementVisible('//input[@name="username"]', 5000, '✅ Email input field is visible')
      .waitForElementVisible('//input[@name="password"]', 5000, '✅ Password input field is visible')
      .waitForElementVisible('//button[@type="submit"]', 5000, '✅ Continue button is visible');

    attachScreenshot(browser, 'login_ui_elements');

    // Test Case 2: Attempt login with empty fields
    browser
      .click('//button[@type="submit"]')
      .pause(3000);

    attachScreenshot(browser, 'login_empty_fields');

    // Test Case 3: Attempt login with invalid email
    browser
      .clearValue('//input[@name="username"]')
      .clearValue('//input[@name="password"]')
      .setValue('//input[@name="username"]', 'saranya@gmail.com')
      .setValue('//input[@name="password"]', 'Password123!')
      .click('//button[@type="submit"]')
      .pause(3000);

    attachScreenshot(browser, 'login_invalid_email');

    // Test Case 4: Attempt login with incorrect credentials
    browser
      .clearValue('//input[@name="username"]')
      .clearValue('//input[@name="password"]')
      .setValue('//input[@name="username"]', 'saranya.ravikalathi@neartekpod.com')
      .setValue('//input[@name="password"]', 'admin@123')
      .click('//button[@type="submit"]')
      .waitForElementVisible('//span[@id="error-element-password"]', 5000)
      .assert.containsText('//span[@id="error-element-password"]', 'Wrong email or password')
      .pause(3000);

    attachScreenshot(browser, 'login_incorrect_credentials');

    // Test Case 5: Successful login
    browser
      .clearValue('//input[@name="username"]')
      .clearValue('//input[@name="password"]')
      .setValue('//input[@name="username"]', 'saranya.ravikalathi@neartekpod.com')
      .setValue('//input[@name="password"]', 'Qwerty@123')
      .click('//button[@type="submit"]')
      .pause(5000);

    attachScreenshot(browser, 'successful_login');
  });
});

