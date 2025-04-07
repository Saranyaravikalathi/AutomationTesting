package tests;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.Test;

public class EmailLoginTest extends BasicUtil {

	
	
//	
//    @Test
//    public void testEmailLogin() {
//        try {
//            WebDriverWait wait = new WebDriverWait(driver, 30);
//            
//            if(wait!=null)
//            {
//            	return;
//            }
//            
//           List<WebElement> element =  driver.findElements(By.id("com.flipkart.android:id/skip_button"));
//           if(element.size()== 0)
//           {
//        	   return ; // to skip login
//           }
//              
//            // Locate the Skip button by its text and click it
//            WebElement skipButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("com.flipkart.android:id/skip_button")));
//            skipButton.click();
//            System.out.println("Clicked on Skip button");
//
//
//            // Locate and click the "Use Email-ID" option
//            WebElement useEmailOption = wait.until(ExpectedConditions.elementToBeClickable(By.id("com.flipkart.android:id/tv_right_cta")));
//            useEmailOption.click();
//            System.out.println("Clicked on Use Email-ID option");
//
//            // Locate the Email field and enter the email
//            WebElement emailField = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//android.widget.EditText[@content-desc=\"Email ID\"]")));
//            emailField.sendKeys(USERNAME);  // emailid
//            System.out.println("Entered email");
//
//            // Locate the Continue button and click it
//            WebElement continueButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("com.flipkart.android:id/button")));
//            continueButton.click();
//            System.out.println("Clicked on Continue button");
//            
//            
//            WebElement otpField = wait.until(ExpectedConditions.elementToBeClickable(By.className("android.widget.EditText")));
//            Thread.sleep(5000);
//            String flipkartOtp = getOTP();
//            System.out.println("OTP : "+flipkartOtp);
//            
//            otpField.sendKeys(flipkartOtp); 
//            System.out.println("Entered otp");
//            
//            //Verify Button
//            WebElement verifyButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("com.flipkart.android:id/button")));
//            verifyButton.click();
//            System.out.println("Clicked Verify button");
//            
//            
//
//            /* Add assertions to verify the login process was successful
//            WebElement homeScreen = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("com.flipkart.android:id/home_container")));
//            assert homeScreen.isDisplayed()*/
//            System.out.println("Email login test passed");
//
//        } catch (Exception e) {
//            System.out.println("Error during test execution: " + e.getMessage());
//            e.printStackTrace();
//        }
//        
//    }
    
    
    
}
