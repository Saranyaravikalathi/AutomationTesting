package tests;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import java.net.URL;

public class EditProfileTest extends BasicUtil {


    @Test
    public void editProfileTest() {
        try {
            // Wait for app to load
//            Thread.sleep(5000);
            
            // 1. Scroll to and click Edit Profile
            scrollToEditProfile();
            
            // 2. Wait for edit profile page to load
            Thread.sleep(5000);
            
            
            
            // 3. Find and enter last name
            enterLastName("TestLastName");
            
            // 4. Find and click submit button
            clickSubmit();
            
        } catch (Exception e) {
            System.err.println("Test failed: " + e.getMessage());
            e.printStackTrace();
        }
    }

    private void enterLastName(String lastName) {
        System.out.println("Entering last name...");
        MobileElement lastNameField = findElementWithMultipleStrategies(new String[]{
            "new UiSelector().resourceId(\"lastName\")",
            "new UiSelector().className(\"android.widget.EditText\").text(\"Last Name\")",
            "new UiSelector().className(\"android.widget.EditText\").descriptionContains(\"last name\")",
            "new UiSelector().className(\"android.widget.EditText\").instance(1)"  // Adjust instance number as needed
        });
        
        if (lastNameField != null) {
            lastNameField.clear();
            lastNameField.sendKeys(lastName);
            System.out.println("Last name entered successfully");
            
            try {
                driver.hideKeyboard();
            } catch (Exception e) {
                System.out.println("Keyboard was not visible or could not be hidden");
            }
        } else {
            throw new RuntimeException("Could not find last name field");
        }
    }
    
    private MobileElement findElementWithMultipleStrategies(String[] selectors) {
        for (String selector : selectors) {
            try {
                MobileElement element = (MobileElement) driver.findElementByAndroidUIAutomator(selector);
                if (element != null && element.isDisplayed()) {
                    System.out.println("Found element using selector: " + selector);
                    return element;
                }
            } catch (Exception e) {
                System.out.println("Selector failed: " + selector);
            }
        }
        return null;
    }
    
    private void scrollToEditProfile() {
        System.out.println("Scrolling to Edit Profile...");
        String uiScrollable = "new UiScrollable(new UiSelector().scrollable(true).instance(0))"
                + ".scrollIntoView(new UiSelector().text(\"Edit Profile\").instance(0))";
        
        try {
            MobileElement editProfileElement = (MobileElement) driver.findElementByAndroidUIAutomator(uiScrollable);
            System.out.println("Found Edit Profile element");
            editProfileElement.click();
            System.out.println("Clicked Edit Profile successfully");
        } catch (Exception e) {
            System.err.println("Failed to find or click Edit Profile: " + e.getMessage());
            throw e;
        }
    }

    private void clickSubmit() {
        System.out.println("Clicking Submit button...");
        try {
            MobileElement submitButton = (MobileElement) driver.findElementByAndroidUIAutomator(
                "new UiSelector().text(\"Submit\")");
            submitButton.click();
            System.out.println("Submit button clicked successfully");
        } catch (Exception e) {
            System.err.println("Failed to click Submit button: " + e.getMessage());
            throw e;
        }
    }
}