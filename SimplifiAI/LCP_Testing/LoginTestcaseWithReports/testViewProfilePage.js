const xpaths = require('../xpath.json');

module.exports =  {
     'View Profile Verification':function (browser) {
        const loginPage=xpaths['LoginPage'];
        const viewpage = xpaths.viewProfilePage; 
        const editProfilebutton=xpaths.emplyeeDetails;
        const viewEmployee=xpaths.viewEmployeeDetails;  
        browser
          .url(xpaths.url)
          .waitForElementPresent(loginPage.userName, 10000)
          .setValue(loginPage.userName,'saranya.ravikalathi@neartekpod.com')
          .waitForElementPresent(loginPage.password,1000)
          .setValue(loginPage.password,'Qwerty@123')
          .click(loginPage.submitButton)
          .waitForElementVisible(viewpage.dropdown , 15000)
          .click(viewpage.dropdown)
          .waitForElementVisible(viewpage.viewprofile , 10000)
          .click(viewpage.viewprofile)
          .pause(5000) 
          .click(viewpage.viewBack)
          .click(xpaths.Lcpmenu)
          //Add Employee Details
          .click(editProfilebutton.employeeXpath)
          .click(editProfilebutton.addEmployee)
          .setValue(editProfilebutton.employeeName ,'Saranya Ramesh')
          .setValue(editProfilebutton.employeeRoledrpdown ,'Admin,Employee,Project Manager,CRM')
          .setValue(editProfilebutton.employeeNo ,7)
          .setValue(editProfilebutton.address ,'53,Narayana Palayam Street')
          .setValue(editProfilebutton.Phone , '7806857271')
          .setValue(editProfilebutton.email ,'saranya@gmail.com')
          .setValue(viewEmployee.searchEmployee,'7')
          .click(editProfilebutton.infoEmplyee)
          .waitForElementVisible(viewEmployee.getName , 5000)
          .getText(viewEmployee.getName, function(result) {
              console.log('Employee Name:', result.value);
            })
          .waitForElementVisible(viewEmployee.getRole , 5000)
          .getText(viewEmployee.getRole , function(result) {
              console.log('Employee Role:', result.value);
            })
              
            .waitForElementVisible(viewEmployee.getEmployeeNo , 5000)
            .getText(viewEmployee.getEmployeeNo , function(result) {
                console.log('Employee Number:', result.value);
              })
            .waitForElementVisible(viewEmployee.getPhone, 5000)
            .getText(viewEmployee.getPhone, function(result) {
                console.log('Employee Phone Number:', result.value);
              })
            .waitForElementVisible(viewEmployee.getEmail, 5000)
            .getText(viewEmployee.getEmail, function(result) {
                console.log('Employee Email id:', result.value);
              })
            .waitForElementVisible(viewEmployee.getAddress, 5000)
            .getText(viewEmployee.getAddress, function(result) {
                console.log('Employee Address:', result.value);
            })
            
}
};
