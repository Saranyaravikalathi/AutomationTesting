package day1;

public enum Locators {
	URL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"),
	//Login Function
	UserName("//input[@name='username']"),
	PassWord("//input[@name='password']"),
	BtnLogin("//button[text()=' Login ']"),
	//search
	Search("//input[@placeholder='Search']"),
    BoxSearch("//ul[@class='oxd-main-menu']//li//a"),
	//Admin page
	SysUserName("(//input[@class='oxd-input oxd-input--active'])[2]"),
	UserRole("(//div[@class='oxd-select-text-input'])[1]"),
	EmployeeName("//input[@placeholder='Type for hints...']"),
	//add user
	BtnUserAdd("//button[text()=' Add ']"),
	AddUserRole("(//div[@class=\"oxd-select-text-input\"])[1]"),
	AddEmployeeName("//input[@placeholder='Type for hints...']"),
	AddUserName("(//input[@class='oxd-input oxd-input--active'])[2]"),
    AddStatus("(//div[text()='-- Select --'])[1]"),
    AddPassword("(//input[@type='password'])[1]"),
    AddConfirmPw("(//input[@type='password'])[2]"),
    AddSave("//button[text()=' Save ']"),
    CancelBtn("//button[text()=' Cancel ']"),
    
    //Get Records
   RecordsFound("//div[@class='orangehrm-container']"),
   Rows("//div[@class='oxd-table']//div[@role='row']"),
   Cells("//div[@class='oxd-table']//div[@class='oxd-table-cell oxd-padding-cell']");
    
		
	
    
	
	private final String value;
	Locators(String value){
		this.value=value;
	}
    public String get() {
        return value;
    }

	

}
