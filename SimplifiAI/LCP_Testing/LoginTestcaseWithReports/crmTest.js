const xpaths = require('../xpath.json');
//const readlineSync = require("readline-sync");
const user = require('../mainTest');

module.exports = function (browser) {
    const crmxpath = xpaths.CRM;
    // let firstName = readlineSync.question("Enter your First Name: ");
    // let lastName = readlineSync.question("Enter your Last Name: ");
    // let email = readlineSync.question("Enter your Email: ");
    // let phoneNo = readlineSync.question("Enter your Phone Number: ");
    // let status = readlineSync.question("Enter your Status: ");
    // let orgUrl = readlineSync.question("Enter Org URL: ");

    browser
        .url(xpaths.crmpage)  
        .waitForElementVisible("body", 15000)
        .click(crmxpath.crmAddButton) 
        .setValue(crmxpath.firstNameField, user.firstName) 
        .setValue(crmxpath.lastNameField, user.lastName)   
        .setValue(crmxpath.emailField, user.email)         
        .setValue(crmxpath.phoneField, user.phoneNo)       
        .setValue(crmxpath.statusField, user.status)       
        .setValue(crmxpath.orgUrlField, user.orgUrl)       
        .click(crmxpath.submitButton) 
        .pause(3000)
        .end(); 
};

