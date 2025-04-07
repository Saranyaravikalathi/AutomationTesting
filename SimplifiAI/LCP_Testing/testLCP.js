const xpaths = require('./xpath.json');
const xpath = require('./xpathAttendence.json')
module.exports = {
    'Checking if input fields are visible': function(browser) {
        console.log('Starting LCP Automation Test Suite...');
        const loginPage = xpaths['LoginPage'];
        browser
            .url(xpaths.url)
            .windowMaximize()
            .waitForElementVisible('body', 10000, '✅ Page loaded successfully')
            .pause(3000)
            .useXpath()
            .assert.visible(loginPage.userName, '✅ Email input field is visible')
            .assert.visible(loginPage.password, '✅ Password input field is visible')
            .assert.visible(loginPage.submitButton, '✅ Continue button is visible')
            .saveScreenshot('reports/ss/open_url.png');
    },

    'Attempting login with empty fields': function(browser) {
        const xpaths = require('./xpath.json');
        const loginPage = xpaths['LoginPage'];

        browser
            .click(loginPage.submitButton)
            .pause(2000)
            .saveScreenshot('reports/ss/login_empty_fields.png');
    },

    'Attempting login with an invalid email': function(browser) {
        const xpaths = require('./xpath.json');
        const loginPage = xpaths['LoginPage'];

        browser
            .clearValue(loginPage.userName)
            .clearValue(loginPage.password)
            .setValue(loginPage.userName, 'saranya@gmail.com')
            .setValue(loginPage.password, 'Password123!')
            .click(loginPage.submitButton)
            .pause(2000)
            .saveScreenshot('reports/ss/login_invalid_email.png');
    },

    'Attempting login with incorrect credentials': function(browser) {
        const xpaths = require('./xpath.json');
        const loginPage = xpaths['LoginPage'];

        browser
            .clearValue(loginPage.userName)
            .clearValue(loginPage.password)
            .setValue(loginPage.userName, 'saranya.ravikalathi@neartekpod.com')
            .setValue(loginPage.password, 'admin@123')
            .click(loginPage.submitButton)
            .waitForElementVisible(loginPage.errorMessage, 5000, '✅ Error message appeared')
            .assert.containsText(loginPage.errorMessage, 'Wrong email or password', '✅ Validation message displayed')
            .saveScreenshot('reports/ss/login_incorrect_credentials.png');
    },

    'Attempting successful login': function(browser) {
        const xpaths = require('./xpath.json');
        const loginPage = xpaths['LoginPage'];
       
        browser
            .clearValue(loginPage.userName)
            .clearValue(loginPage.password)
            .setValue(loginPage.userName, 'saranya.ravikalathi@neartekpod.com')
            .setValue(loginPage.password, 'Qwerty@123')
            .waitForElementVisible(loginPage.submitButton,1000,'✅Login sucessfully')
            .click(loginPage.submitButton)
           
    },
    'View Profile Automation' : function(browser){
        const viewprofile=xpaths.viewProfilePage;
        console.log('✅View Profile is Started.....');
        browser
        .pause(10000)
        .click(viewprofile.viewdrpDown)
        .click(viewprofile.viewClick)
        .pause(2000)
        .assert.titleContains('Profile')
        .assert.containsText(viewprofile.officialDetails.off_Name,'Saranya Ravikalathi')
        .assert.containsText(viewprofile.officialDetails.off_Role,'Admin, Employee, HiringManager, InterviewPanel')
        .assert.containsText(viewprofile.officialDetails.emp_no,'7')
        .assert.containsText(viewprofile.officialDetails.emp_email,'saranya.ravikalathi@neartekpod.com')
        .assert.containsText(viewprofile.officialDetails.report_manager,'Iswaryadevi D, Priyadharshini Murugan')
       // .assert.containsText(viewprofile.officialDetails.assignment,'Simplif')
       // .assert.containsText(viewprofile.officialDetails.joining_date,'27/01/2024')
        .assert.containsText(viewprofile.officialDetails.phone,'7806857271')
       // .assert.containsText(viewprofile.officialDetails.address,'53,Narayana Palayam Street')
        console.log('✅ view profie test cases passed successfully....');
    },
    'Project App': function(browser){
        console.log('✅Project App Running Started...')
        const project=xpaths.ProjectApp;
        browser
        .click(xpaths.Lcpmenu.menu)
        .click(project.projectDrp)
        .waitForElementVisible(project.noSprint, 7000)
        .assert.containsText(project.noSprint, "No Sprint found")
        console.log('✅Project App assertion is passed....');
        
    },
  /*'Create New Project': function (browser) {
  console.log('✅ Create new project running....');

  const newproject = xpaths.ProjectApp.newProject;
  const springboard = xpaths.ProjectApp.SpringBoard;

  browser
    .click(newproject.projectUrl)
    .assert.containsText(newproject.addprojectText, 'Add Project')
    .click(newproject.addProject)

    // Fill the form without using a date picker
    .setValue(newproject.projectName, 'Lcp Automation Testing')
    .setValue(newproject.startDate, '04/03/2025')
    .setValue(newproject.endDate, '10/03/2025')

    // Selecting manager
    .pause(5000)
    .click(newproject.managerName)
    .keys(browser.Keys.ARROW_DOWN)
    .keys(browser.Keys.ENTER)
    .pause(5000)

    // Selecting team member
    .click(newproject.teamMember)
    .pause(10000)
    .keys(browser.Keys.ARROW_DOWN)
    .keys(browser.Keys.ENTER)

    // Validate entered values before clicking save
    .pause(1000)
    .getValue(newproject.projectName, function (result) {
      console.log('Entered Project Name:', result.value);
    })
    .getValue(newproject.startDate, function (result) {
      console.log('Entered Start Date:', result.value);
    })
    .getValue(newproject.endDate, function (result) {
      console.log('Entered End Date:', result.value);
    })
    // Check for error message if project name already exists
.waitForElementVisible(newproject.errormessage, 10000, (result) => {
  if (result.status === 0) {
    console.log('❌ Project name already exists. Clicking Cancel button...');
    browser
      .click(newproject.cancelButton)
      .waitForElementVisible(springboard.textSpring, 10000)
      .url(function (result) {
        console.log('Current URL:', result.value); 
      })
  } else {
    console.log('✅ Project created successfully.');
    browser
      // Click Save Button
      .waitForElementVisible(newproject.saveButton, 10000)
      .moveToElement(newproject.saveButton, 10, 10)
      .pause(1000)
      .click(newproject.saveButton)
      .waitForElementVisible(springboard.springUrl, 100000)
      .waitForElementVisible(springboard.textSpring, 10000)
      .pause(2000)
      .assert.containsText(springboard.textSpring, 'Sprint-Board');
  }
});
  console.log('✅ Create new project flow completed.');
},*/
'Create New Project': function (browser) {
  console.log('✅ Create new project running....');

  const newproject = xpaths.ProjectApp.newProject;
  const sprintboard = xpaths.ProjectApp.SprintBoard;

  browser
    .click(newproject.projectUrl)
    .assert.containsText(newproject.addprojectText, 'Add Project')
    .click(newproject.addProject)
    .pause(5000)

    // Fill only the project name first
    .setValue(newproject.projectName, 'Lcp Automation Testing')
    
    // Check for error message before proceeding
    .pause(10000)
    .isVisible(newproject.errormessage, function (result) {
      if (result.status === 0) {
        console.log('❌ Project name already exists. Clicking Cancel button...');
        browser
          .click(newproject.cancelButton)
          .waitForElementVisible(sprintboard.textSprint, 10000)
          .url(function (result) {
            console.log('Current URL:', result.value);
          });
      } else {
        console.log('✅ Project name is unique. Proceeding with the form...');

        browser
          .setValue(newproject.startDate, '04/03/2025')
          .setValue(newproject.endDate, '11/03/2025')

          // Selecting manager
          .pause(5000)
          .click(newproject.managerName)
          .keys(browser.Keys.ARROW_DOWN)
          .keys(browser.Keys.ENTER)
          .pause(10000)

          // Selecting team member
          browser.waitForElementVisible(newproject.teamMember, 5000)
          .click(newproject.teamMember)
          .pause(2000)
          .click(newproject.optionteamno)
          .pause(2000)
   
          // Validate entered values before clicking save
          .pause(10000)
          .getValue(newproject.projectName, function (result) {
            console.log('Entered Project Name:', result.value);
          })
          .getValue(newproject.startDate, function (result) {
            console.log('Entered Start Date:', result.value);
          })
          .getValue(newproject.endDate, function (result) {
            console.log('Entered End Date:', result.value);
          })

          // Click Save Button
          .waitForElementVisible(newproject.saveButton, 10000)
          .moveToElement(newproject.saveButton, 10, 10)
          .pause(1000)
          .click(newproject.saveButton)
          .waitForElementVisible(sprintboard.sprintUrl, 100000)
          .waitForElementVisible(sprintboard.textSprint, 10000)
          .pause(2000)
          .assert.containsText(sprintboard.textSprint, 'Sprint-Board');

        console.log('✅ Project created successfully.');
      }
    });

  console.log('✅ Create new project flow completed.');
},
'Getting Project Details': function(browser) {
  console.log('✅ Getting project details running....');

  const getprojectdetails = xpaths.ProjectApp.getProjectDetails;

  browser
    .click(getprojectdetails.drpSelectProject)
    .pause(5000)
    .click(getprojectdetails.selectname)
    .pause(5000)
    .click(getprojectdetails.viewprojectDetails)
    .pause(5000)
    browser.getText(getprojectdetails.projectName, function(result) {
      console.log('Project Name:', result.value || 'Not Found');
  })
  .getText(getprojectdetails.startDate, function(result) {
      console.log('Start Date:', result.value || 'Not Found');
  })
  .getText(getprojectdetails.projectmangaer, function(result) {
      console.log('Project Manager:', result.value || 'Not Found');
  })
  .getText(getprojectdetails.projectmangaer, function(result) {
      console.log('Team Members:', result.value || 'Not Found');
  })  
},
'Adding New Sprint': function (browser) {
    console.log('✅ Adding new sprint started....');

    const sprint = xpaths.ProjectApp.SprintBoard;

    browser
      .url(sprint.sprintUrl)

      // Wait for the "Add Sprint" button & Click
      .waitForElementVisible("//a[text()='Add Sprint']", 10000)
      .click("//a[text()='Add Sprint']")
      .pause(5000)

      // select Sprint Start Date 
      .click(sprint.sprintStartDate)
      .pause(3000)
      .setValue(sprint.sprintStartDate,'18/03/2025')
      .pause(5000)
      //select end date
      .click(sprint.sprintEndDate)
      .pause(5000)
      .setValue(sprint.sprintEndDate,'26/03/2025')
      .pause(5000)
      .waitForElementVisible(sprint.sprintaskName, 5000)
      .getText(sprint.sprintaskName, function (result) {
        let taskName = result.value.trim();
        
        if (taskName !== "Select...") {
          console.log("⚠️ Task already exists. Clicking Cancel.");
          browser.click(sprint.sprintCancelbtn);
        } else {
          console.log("✅ No existing task. Setting new task name.");
          browser
          .waitForElementVisible(sprint.sprintaskName, 10000) 
          .click(sprint.sprinttaskBox)
          .pause(2000)
          .setValue(sprint.sprintaskName, "Automate ")
          .pause(2000)
          .click(sprint.sprintSavebtn)
          .pause(3000);
      
        }
      })
      
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
        .pause(3000)
        .setValue(Att.checkInTime, "09:00")
        .pause(3000)
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

};