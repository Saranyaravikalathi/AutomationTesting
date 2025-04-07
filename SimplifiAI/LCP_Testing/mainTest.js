/*const loginTestCase = require('./testLoginPage.js');
const viewPageTestCase = require('./testViewProfilePage.js');

module.exports = {
    'Login Page Tests': function (browser) {
        loginTestCase(browser); // Ensure loginTestCase is a function
        browser.pause(5000);
    },

    'Profile Page Tests': function (browser) {
        viewPageTestCase(browser); // Ensure viewPageTestCase is a function
    }
};
const loginTestCases = require('./testLoginPage.js');
const viewPageTestCases = require('./viewProfile.js');

module.exports = {
  'Login Page Tests': function (browser) {
    Object.keys(loginTestCases).forEach(testName => {
      console.log(`Executing: ${testName}`);
      console.log(`Browser object:`, browser); 
      loginTestCases[testName](browser); 
    });
    viewPageTestCases(browser);
      }
  }*/     
   /*  'CRM Test': function (browser) {
    console.log('✅ Running CRM Test...');

    // Collect User Input
    let firstName = readlineSync.question("Enter your First Name: ");
    let lastName = readlineSync.question("Enter your Last Name: ");
    let email = readlineSync.question("Enter your Email: ");
    let phoneNo = readlineSync.question("Enter your Phone Number: ");
    let status = readlineSync.question("Enter your Status: ");
    let orgUrl = readlineSync.question("Enter Org URL: ");

    console.log("✔ User input collected. Running CRM Test...");

    if (typeof crmTestCase === 'function') {
        crmTestCase(browser, { firstName, lastName, email, phoneNo, status, orgUrl });
    } else {
        console.error('❌ Error: crmTestCase is not a function.');
    }
},*/
const loginTestCases = require('./testLoginPage.js');
const crmTestCase = require('./crmTest.js');
const viewPageTestCases = require('./viewProfilePage.js');  

module.exports = {
    'Login Page Tests': function (browser) {
        console.log('🚀 Running Login Page Tests...');
        Object.keys(loginTestCases).forEach(testName => {
            loginTestCases[testName](browser);
        });
        console.log('✅ Login Completed.');
     }
    // 'View Profile Test Case': function (browser) {
    //     console.log('🚀 Running View Profile Tests...');
    //     viewPageTestCases(browser);  
    // }
};
