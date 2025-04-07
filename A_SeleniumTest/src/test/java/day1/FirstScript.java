package day1;

import java.time.Duration;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class FirstScript {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		//EdgeDriver driver = new EdgeDriver();
		ChromeDriver driver=new ChromeDriver();
		driver.get(Locators.URL.get());
		driver.manage().window().maximize();
		Thread.sleep(2000);
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
		WebElement username = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Locators.UserName.get())));
		username.sendKeys("Admin");
		WebElement password = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Locators.PassWord.get())));
		password.sendKeys("admin123");
		WebElement btnClick = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Locators.BtnLogin.get())));
		btnClick.click();
		Thread.sleep(2000);
		// Search
		WebElement search = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Locators.Search.get())));
		search.sendKeys("Admin");
		List<WebElement> suggestions = wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath(Locators.BoxSearch.get())));
		for (WebElement suggestion : suggestions) {
			String text = suggestion.getText();
			System.out.println("Suggestion: " + text);
			if (text.contains("Admin")) {
				suggestion.click();
				break;
			}
		}
		// Add User
		WebElement userAddbtn = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Locators.BtnUserAdd.get())));
		userAddbtn.click();
		WebElement addUserRole = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Locators.AddUserRole.get())));
		addUserRole.sendKeys(Keys.ARROW_DOWN);
		WebElement addEmployeeName = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Locators.AddEmployeeName.get())));
		addEmployeeName.sendKeys("Saranya");
		WebElement addUsername = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Locators.AddUserName.get())));
		addUsername.sendKeys("Saranya");
		WebElement addStatus = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Locators.AddStatus.get())));
		addStatus.sendKeys(Keys.ARROW_DOWN);
		WebElement passwordAdd=wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Locators.AddPassword.get())));
		passwordAdd.sendKeys("Saranya@1509");
		WebElement confirmPassword=wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Locators.AddConfirmPw.get())));
		confirmPassword.sendKeys("Saranya@1509");
		Thread.sleep(5000);
		WebElement addSave=wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Locators.AddSave.get())));
		addSave.click();
		WebElement btnCancel= wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Locators.CancelBtn.get())));
		btnCancel.click();
		System.out.println("User added sucessfully");

		WebElement table = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='orangehrm-container']")));
        List<WebElement> rows = wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.xpath(Locators.Rows.get())));
        System.out.println("Rows found: " + rows.size());
        Set<String> uniqueRows = new HashSet<>(); 
        for (WebElement row : rows) {
            List<WebElement> cells = row.findElements(By.xpath(Locators.Cells.get()));
            StringBuilder rowData = new StringBuilder();

            for (WebElement cell : cells) {
                String cellText = cell.getText().trim();
                if (cellText.isEmpty()) {
                    cellText = cell.getAttribute("innerText").trim();
                }
                rowData.append(cellText).append(" | ");
            }
            if (uniqueRows.add(rowData.toString())) {
                System.out.println(rowData);
            }
            System.out.println(
            		
            		);
        }

        driver.quit();

	}

}
