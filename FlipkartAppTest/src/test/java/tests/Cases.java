package tests;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.NoSuchElementException;

public class Cases extends BasicUtil {

	
	public WebDriverWait wait;
	
	public void clickCategory() throws Exception
	{
		Thread.sleep(2000);
		WebElement categoryBtn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//android.view.ViewGroup[@content-desc=\"Categories\"]/android.widget.ImageView")));
		categoryBtn.click();
		System.out.println("Category Button clicked...");
	}
	
	public void clickSearchButton() throws Exception
	{
		Thread.sleep(3000);
		WebElement searchBtn = wait.until(ExpectedConditions.elementToBeClickable(By.id("com.flipkart.android:id/search_icon")));
		searchBtn.click();
		System.out.println("Clicked Search button...");
	}
	
	public void search(String wrd)
	{
		System.out.println("Searching a product : "+wrd);
	     WebElement searchTextBox = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//android.widget.EditText[@text=\"Search for products\"]")));
         searchTextBox.sendKeys(wrd);
         driver.pressKey(new KeyEvent(AndroidKey.ENTER));
        
		
	}
	
	public void clickFilterBtn()
	{
		
		String brandTextViewStr = "//android.widget.TextView[@text=\"Brand\"]";
		By brandTextXpathObj = By.xpath(brandTextViewStr);
		
		WebElement brandFilterBtn = wait.until(ExpectedConditions.elementToBeClickable(brandTextXpathObj));
		brandFilterBtn.click();
	}
	
	public void selectRedmiBrand()
	{
		String redmiBrandXpathStr = "//android.view.ViewGroup[@content-desc=\"REDMI\"]/android.widget.ImageView";
		By redmiBranxObj = By.xpath(redmiBrandXpathStr);
		WebElement redmiBrndBtn = wait.until(ExpectedConditions.elementToBeClickable(redmiBranxObj));
		redmiBrndBtn.click();
	}
	
	public void brandFilterApply()
	{
		String applyBtnXpathStr = "//android.widget.TextView[@text=\"Apply\"]";
		By applyBtnXpathObj = By.xpath(applyBtnXpathStr);
		WebElement applyBtnFIkter = wait.until(ExpectedConditions.elementToBeClickable(applyBtnXpathObj));
		applyBtnFIkter.click();
	}
	
	public void clickSortBy()
	{
		String sortByXpathStr = "//android.widget.TextView[@text=\"Sort By\"]";
		By sortByXpathObj = By.xpath(sortByXpathStr);
		WebElement sortByBtn = wait.until(ExpectedConditions.elementToBeClickable(sortByXpathObj));
		sortByBtn.click();
	}
	
	public void selectNewestFirst()
	{
		String newestFirstSortByStr = "//android.view.ViewGroup[@content-desc=\"Newest First\"]" ;
		By newestFirstSortByObj = By.xpath(newestFirstSortByStr);
		WebElement newsetFirstBtn = wait.until(ExpectedConditions.elementToBeClickable(newestFirstSortByObj));
		newsetFirstBtn.click();
	}

	public void selectProductOnIndex(int position) throws Exception {
		Thread.sleep(5000);
		List<WebElement> elements = driver.findElements(By.xpath("//android.view.ViewGroup[contains(@content-desc, 'REDMI')]"));
		if (!elements.isEmpty()) {
		    elements.get(position).click(); 
		}
	}

	public void addToFav() throws Exception
	{
		Thread.sleep(3000);	
		// wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.xpath("//android.view.ViewGroup[contains(@content-desc, 'REDMI')]")));
		//String addToFavStr = "//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup";
			String addToFavStr = "//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup";
		By addToFavObj = By.xpath(addToFavStr);

		WebElement addToFavBtn = wait.until(ExpectedConditions.elementToBeClickable(addToFavObj));
		addToFavBtn.click();
		
		try
		{
			String doneBtnStr = "//android.view.ViewGroup[@content-desc=\"Done\"]";
			By doneBtnXpathObj = By.xpath(doneBtnStr);
			
			WebElement doneBtn = wait.until(ExpectedConditions.elementToBeClickable(doneBtnXpathObj));
			doneBtn.click();
		}
		catch(Exception exp)
		{
			
		}
		
		
	}
	
	
	public void addToCart()
	{
		System.out.println("Waiting for add to cart btn loading..");
	    //By addToCardXpathObj = By.xpath("//android.widget.TextView[@text=\"Add to cart\"]");
	    By addToCardXpathObj = By.xpath("//android.widget.FrameLayout[@resource-id=\"com.flipkart.android:id/main_content\"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]");
		wait.until(ExpectedConditions.visibilityOfElementLocated(addToCardXpathObj)).click();
	   // driver.findElement(addToCardXpathObj).click();
	    System.out.println("Item added to cart...");
	}

	public void goToCart() throws Exception {
		By cartMenuxpathObj = By.xpath("//android.widget.TextView[@text=\"Cart\"]");
		 By goToCartXpathObj = By.xpath("//android.widget.TextView[@text=\"Go to cart\"]");
		 if(isElementPresent(goToCartXpathObj,3))
		 {
			 wait.until(ExpectedConditions.elementToBeClickable(goToCartXpathObj)).click(); 
		 }
		 else
		 {
			
			 	int attempts = 0,maxAttempts=8;
		        while (attempts < maxAttempts && !isElementPresent(cartMenuxpathObj, 3)) {
		            driver.navigate().back();
		            attempts++;
		            Thread.sleep(1000);
		        }
		        wait.until(ExpectedConditions.elementToBeClickable(cartMenuxpathObj)).click(); 
			
		 }
		 
		 System.out.println("Going to add to cart activity..");
	}
	

	private boolean isElementPresent(By locator,long time) {
        try {
            // Using shorter wait time for checks to avoid long delays
            WebDriverWait shortWait = new WebDriverWait(driver, time);
            return shortWait.until(ExpectedConditions.presenceOfElementLocated(locator)) != null;
        } catch (TimeoutException | NoSuchElementException e) {
            return false;
        }
    }
	
	public void placeOrder() throws Exception
	{
		Thread.sleep(3000);
		String placeOrderXpath = "//android.widget.TextView[@text=\"Place order \"]";
		By placeOrderXpathObj = By.xpath(placeOrderXpath);
		// wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(placeOrderXpathObj));
		driver.findElement(placeOrderXpathObj).click();
	}

	public boolean isLoginPage() {
      List<WebElement> element =  driver.findElements(By.id("com.flipkart.android:id/skip_button"));
      return element.size() > 0;
	}
	
	public void skipLanguageSelection()
	{
	      WebElement skipButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("com.flipkart.android:id/skip_button")));
	      skipButton.click();
	      System.out.println("Clicked on Skip button");
	}
	
	public void skipAndGotToHomePage()
	{
	      WebElement skipButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("com.flipkart.android:id/custom_back_icon")));
	      skipButton.click();
	      System.out.println("Clicked on skipAndGotToHomePage button");
	}
	
	public void useEmail()
	{
	      WebElement useEmailOption = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("com.flipkart.android:id/tv_right_cta")));
	      useEmailOption.click();
	      System.out.println("Clicked on Use Email-ID option");
	}
	
	public void selectMobileCategory()
	{
	      WebElement useEmailOption = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//android.widget.TextView[@text=\"Mobiles\"]")));
	      useEmailOption.click();
	      System.out.println("Mobile category selected..");
	}
	
	public void enterEmail()
	{
	      WebElement emailField = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//android.widget.EditText[@content-desc=\"Email ID\"]")));
	      emailField.sendKeys(USERNAME);  // emailid
	      System.out.println("Entered email : "+USERNAME);
	}
	
	public void clickEmailContinue()
	{
		WebElement continueButton = wait
				.until(ExpectedConditions.elementToBeClickable(By.id("com.flipkart.android:id/button")));
		continueButton.click();
		System.out.println("Clicked on Continue button");
	}
	
	public void enterOtp(String otp) throws Exception
	{
		WebElement otpField = wait
				.until(ExpectedConditions.elementToBeClickable(By.className("android.widget.EditText")));
		Thread.sleep(3000);
		System.out.println("OTP : " + otp);
		otpField.sendKeys(otp);
		System.out.println("Entered otp");
	}
	
	public void clickOTPVerifyBtn()
	{
		WebElement verifyButton = wait
				.until(ExpectedConditions.elementToBeClickable(By.id("com.flipkart.android:id/button")));
		verifyButton.click();
		System.out.println("Clicked Verify button");
	}
	
	public void clickNotNow(String wrd)
	{
		try
		{
	    WebElement clickNotnowBtn = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("com.flipkart.android:id/not_now_button")));
	      clickNotnowBtn.click();
	      System.out.println("Clicked on not now button");
	      wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.xpath("//android.view.ViewGroup[contains(@content-desc, '"+wrd+"')]")));
	
		}
		catch(Exception exp)
		{
			
		}
	}
	
	public void clickAccountsBtn()
	{
	    WebElement accountsBtn = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//android.view.ViewGroup[@content-desc=\"Account\"]/android.widget.ImageView")));
	      accountsBtn.click();
	      System.out.println("Clicked on Accounts button");
	}
	public void clickLoginBtn()
	{
	    WebElement loginBtn = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//android.widget.TextView[@text=\"Log In\"]")));
	    loginBtn.click();
	    System.out.println("Clicked on Accounts button");
	}
	
	
}
