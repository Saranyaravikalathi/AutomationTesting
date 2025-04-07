package tests;

import java.net.MalformedURLException;
import java.net.URI;
import java.net.URL;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;

import com.aventstack.extentreports.reporter.ExtentSparkReporter;

import io.appium.java_client.android.AndroidDriver;
import javax.mail.*;
import javax.mail.internet.*;
import javax.mail.search.SubjectTerm;
import javax.mail.search.AndTerm;
import java.util.Properties;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
public class BasicUtil extends ReportGenerator {
    protected static AndroidDriver<WebElement> driver;
    static WebDriverWait wait = null;
 
    static int screenShotCount = 0;
    
    private static final String HOST = "imap.gmail.com";
   public static final String USERNAME = "saranyaravikalathi@gmail.com"; // mail id
   private static final String PASSWORD = "pttj wxhs qekg uaoh"; //password
   
//  public static final String USERNAME = "vskrishnan27@gmail.com"; // mail id
//  private static final String PASSWORD = "pttj wxhs qekg uaoh"; //password

//    public static final String USERNAME = "saranyaravikalathi1509@gmail.com"; // Replace with your Gmail address
//    private static final String PASSWORD = "lwza xmhi abud blfp";
    
    @BeforeTest
    public void setup() throws MalformedURLException {
    	 htmlReporter = new ExtentHtmlReporter("flipkartWiproTestReport.html"); //path
    	  extent = new ExtentReports();
         extent.attachReporter(htmlReporter);
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("appium:app", "C:/Users/testuser/Desktop/ApkFiles/flipkart.apk");
        capabilities.setCapability("appium:deviceName", "Pixel_8a_API_29");
        capabilities.setCapability("platformName", "Android");
        capabilities.setCapability("appium:automationName", "UiAutomator2");
        capabilities.setCapability("appium:platformVersion", "10.0");
        capabilities.setCapability("appium:appPackage", "com.flipkart.android");
        capabilities.setCapability("appium:appActivity", "com.flipkart.android.activity.HomeFragmentHolderActivity");
        //capabilities.setCapability("appium:noReset", true);
       capabilities.setCapability("appium:noReset", false);
      capabilities.setCapability("appium:fullReset", true); // will uninstall the app
        
        
//        //this will retain the login data
        //capabilities.setCapability("appium:noReset", true);
        //capabilities.setCapability("appium:fullReset", false);

        URL url = URI.create("http://127.0.0.1:4723/").toURL();
        driver = new AndroidDriver<>(url, capabilities);
        wait =  new WebDriverWait(driver,30 );
        System.out.println("Driver initialized successfully");
        
    }

//    @Test
//    public void testClickSkipButton() {
//        try {
//            WebDriverWait wait = new WebDriverWait(driver, 30);
//
//            // Locate the Skip button by its text and click it
//            WebElement skipButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("com.flipkart.android:id/skip_button")));
//            skipButton.click();
//            System.out.println("Clicked on Skip button");
//
//            // Add assertions to verify that the next screen appears
//           /* WebElement loginScreen = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("com.flipkart.android:id/login_container")));
//            assert loginScreen.isDisplayed()*/
//            System.out.println("Skip button test passed");
//
//        } catch (Exception e) {
//            System.out.println("Error during test execution: " + e.getMessage());
//            e.printStackTrace();
//        }
//    }

    @AfterTest
    public void tearDown() throws InterruptedException {
        try {
        	extent.flush();
            if (driver != null) {
                Thread.sleep(3000);
                //driver.quit();
                System.out.println("Driver session closed.");
            }
        } catch (Exception e) {
            System.out.println("Error during teardown: " + e.getMessage());
            e.printStackTrace();
        }
    }
    
    
   
    
    public String getOTP() throws Exception
    {
    	String otp = null;
    	Thread.sleep(4000);
        try {
            // Set up IMAP properties
            Properties properties = new Properties();
            properties.put("mail.store.protocol", "imaps");
            properties.put("mail.imap.host", HOST);
            properties.put("mail.imap.port", "993");
            properties.put("mail.imap.ssl.enable", "true");

            // Start an IMAP session
            Session session = Session.getInstance(properties);
            Store store = session.getStore("imaps");
            store.connect(HOST, USERNAME, PASSWORD);

            // Open the inbox folder
            Folder inbox = store.getFolder("INBOX");
            inbox.open(Folder.READ_ONLY);

            // Search for emails with specific subject terms
            SubjectTerm subjectOTP = new SubjectTerm("Flipkart Account");
            SubjectTerm subjectOTP1 = new SubjectTerm("is your verification code for secure access");
            AndTerm andTerm = new AndTerm(subjectOTP, subjectOTP1);
            Message[] messages = inbox.search(andTerm);

            // Filter messages by subject
            if (messages.length == 0) {
                System.out.println("No OTP emails found.");
                return null;
            }
            System.out.println("Found " + messages.length + " messages.");

            // Retrieve the latest OTP email
            Message message = messages[messages.length - 1];

            // Print the subject of the message
            System.out.println("Subject: " + message.getSubject());  // Print the subject

            // Extract the content of the email
            String content = getTextFromMessage(message);

            // Extract OTP using regex
            otp = extractOTP(content);
            if (otp != null) {
                System.out.println("Retrieved OTP: " + otp);
            } else {
                System.out.println("Could not find OTP in the email.");
            }

            // Close connections
            inbox.close(false);
            store.close();
            return otp;
        } catch (Exception e) {
            e.printStackTrace();
        }
		return otp;
        
    }

    // Helper method to extract text from a message
    private static String getTextFromMessage(Message message) throws Exception {
        if (message.isMimeType("text/plain")) {
            return message.getContent().toString();
        } else if (message.isMimeType("multipart/*")) {
            MimeMultipart mimeMultipart = (MimeMultipart) message.getContent();
            return getTextFromMimeMultipart(mimeMultipart);
        }
        return "";
    }

    private static String getTextFromMimeMultipart(MimeMultipart mimeMultipart) throws Exception {
        StringBuilder result = new StringBuilder();
        int count = mimeMultipart.getCount();
        for (int i = 0; i < count; i++) {
            BodyPart bodyPart = mimeMultipart.getBodyPart(i);
            if (bodyPart.isMimeType("text/plain")) {
                result.append(bodyPart.getContent());
            } else if (bodyPart.isMimeType("text/html")) {
                String html = (String) bodyPart.getContent();
                result.append(html);
            }
        }
        return result.toString();
    }

    private static String extractOTP(String content) {
        // Regex pattern for a 6-digit OTP in the message
        Pattern otpPattern = Pattern.compile("\\b\\d{6}\\b"); //otp regex
        Matcher matcher = otpPattern.matcher(content);
        if (matcher.find()) {
            return matcher.group();
        }
        return null;
    }
}

