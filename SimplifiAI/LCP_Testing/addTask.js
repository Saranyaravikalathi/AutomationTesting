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
    /*'Add new task': function (browser) {
    const xpaths = require('./xpath.json');
    const addtask = xpaths.ProjectApp.newTask;

    browser
      .url(addtask.addtaskUrl)
      .pause(5000)
      .click(addtask.selectProject)
      .keys(browser.Keys.ARROW_DOWN)
      .keys(browser.Keys.ENTER)
      .click(addtask.selectProject)
      .pause(2000)
      //select sprint
      .waitForElementVisible(addtask.selectSprint, 10000)
      .click(addtask.selectSprint)
      .keys(browser.Keys.ARROW_DOWN)
      .keys(browser.Keys.ENTER)
      .pause(2000)

      .waitForElementVisible(addtask.selectMembers, 10000)
      .click(addtask.selectMembers)
      .keys(browser.Keys.ARROW_DOWN)
      .keys(browser.Keys.ENTER)
      .pause(1000)

      // click Add Task button
      .pause(3000)
      .click(addtask.addTaskButton)
      .pause(3000)
    },*/
    'Claim Expense ' : function(browser){
      const expense = xpaths.Expense;
      browser
      .url(expense.expenseUrl)
      .pause(5000)
      .setValue(expense.expenseStartDate,'2025-03-06')
      .pause(2000)
      .setValue(expense.expenseEnddate,'2025-03-06')
      .click(expense.expenseType)
      .pause(3000)
      .click(expense.addExpensebtn)
      .pause()

    }
  };