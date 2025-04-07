const xpaths = require('../xpath.json');
const viewprofile = xpaths.viewProfilePage;

function viewPageTestCases(browser) {
  browser
    .waitForElementVisible(viewprofile.viewClick,'profile',5000)
    .click(viewprofile.viewClick)
    .click(viewprofile.viewdrpDown)
    .end();
}

module.exports = viewPageTestCases;
