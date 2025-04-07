const xpaths = require('./xpath.json');
module.exports = {
    'Login Test': function (browser) {
      browser
        .url('https://dev2.lcp.neartekpod.io/')
        //.useXpath()
        .windowMaximize()
        .pause(3000)
        .waitForElementVisible('input[name="username"]',5000)
        .setValue('input[name="username"]', 'saranya.ravikalathi@neartekpod.com')
        .pause(5000)
        .waitForElementVisible('input[name="password"]', 5000) // Ensure visibility
        .setValue('input[name="password"]', 'Qwerty@123')
        .waitForElementVisible('button[type="submit"]', 5000)
        .click('button[type="submit"]')
        
    },
    "click project" : function(browser){
        browser
        .url("https://dev2.lcp.neartekpod.io/projects")
        .pause(3000)
        .click("//select[@id='projectDropdown']/option[text()='lcp demo']")
        .pause();

    }
}