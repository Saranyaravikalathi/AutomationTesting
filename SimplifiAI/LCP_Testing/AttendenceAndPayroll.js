const xpath = require('./xpathAttendence.json')
module.exports = {
    'loginfunction': function (browser) {
        const login = xpath.login;
        browser.url(login.url)
            .pause(1000)  
            .useXpath()  
            .windowMaximize()
            .assert.visible(login.username_Xpath,"email input field is visible")
            .setValue(login.username_Xpath, login.username)  
            .setValue(login.password_Xpath, login.password)
            .pause(3000)  
            .click(login.submit_btn)
            .pause(2000)
            .assert.visible(login.menuIcon,"menu icon field is visible")
            .click(login.menuIcon)
            .pause(5000)
    },
    'Attendance In-Out Function': function (browser) {
        const xpath = require('./xpathAttendence.json');
        const Att = xpath.Attendance;
 
        browser
            .useXpath()
            .pause(3000)
            .click(Att.menu)
            .pause(2000)
            .click(Att.checkInButton)
            .pause(5000)
            .setValue(Att.checkInTime, "09:00")
            .pause(1000)
            .setValue(Att.checkOutTime, "06:00")
            .pause(1000)
            .assert.visible(Att.saveButton,"save button is visible or not" )
            .click(Att.saveButton)
            .pause(3000)
           
    },
   
    'Leave Request Functionality': function (browser) {
        const xpath = require('./xpathAttendence.json');
        const AE = xpath.Leave;
 
        browser
            .useXpath()
            .click(AE.attendance1)
            .click(AE.myLeaves)
            .assert.visible(AE.applyLeave, "Add New Leave button is visible")
            .click(AE.applyLeave)
            .pause(3000)
            .click(AE.fromDate)
            .click("//div[@aria-label='Choose Tuesday, March 18th, 2025']")
            .click(AE.toDate)
            .click("//div[@aria-label='Choose Saturday, March 22nd, 2025']")
            .click(AE.leaveType)
            .assert.visible(AE.leaveType, "Leave Type dropdown is visible")
            .click(AE.selectLeaveType)
            .setValue(AE.reason, "festival leave")
            .click(AE.submit_btn)
            .assert.visible(AE.submit_btn, "Submit button is visible")
            .pause(10000)
           
    },
   "payrollFunction" :function(browser){
    const xpath = require('./xpathAttendence.json');
    const Pr = xpath.payroll;
    browser
    .useXpath()
    .click(Pr.payroll_btn)
    .pause(3000)
    .click(Pr.AdminField)
    .pause(1000)
    .setValue(Pr.searchBox,"iswarya")
    .pause(3000)
    .click(Pr.plusIcon)
    .pause(3000)
    .setValue(Pr.designation,"employee")
    .pause(1000)
    .setValue(Pr.basicSalary,"12000")
    .pause(1000)
    .setValue(Pr.Allowance,"3000")
    .pause(1000)
    .click(Pr.generate_btn)
    .pause(3000)
    .acceptAlert()
    .pause(10000)
    }
}