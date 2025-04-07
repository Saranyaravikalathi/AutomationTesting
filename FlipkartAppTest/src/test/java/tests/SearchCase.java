package tests;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.Test;

import ch.qos.logback.core.util.Duration;
import io.appium.java_client.MobileBy;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;

public class SearchCase extends BasicUtil {
	
	@Test
	public void search()
	{
		try
		{
			System.out.println("Running search testcase ..");
			WebDriverWait wait = new WebDriverWait(driver,15 );
			
			WebElement categoryBtn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//android.view.ViewGroup[@content-desc=\"Categories\"]/android.widget.ImageView")));
			categoryBtn.click();
			
			WebElement searchBtn = wait.until(ExpectedConditions.elementToBeClickable(By.id("com.flipkart.android:id/search_icon")));
			searchBtn.click();
			
            WebElement searchTextBox = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//android.widget.EditText[@text=\"Search for products\"]")));
            searchTextBox.sendKeys("redmi");
            driver.pressKey(new KeyEvent(AndroidKey.ENTER));

			wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.xpath("//android.view.ViewGroup[contains(@content-desc, 'REDMI')]")));

			
			//sort by yeluthanum
			
			
			
			
			//filter yeluthanum
			
			String filterXpathStr = "//android.widget.TextView[@text=\"Filter\"]";
			By filterXpathObj = By.xpath(filterXpathStr);
			
			String brandTextViewStr = "//android.widget.TextView[@text=\"Brand\"]";
			By brandTextXpathObj = By.xpath(brandTextViewStr);
			
//			WebElement filterBtn = wait.until(ExpectedConditions.elementToBeClickable(filterXpathObj));
//			filterBtn.click();
			
			WebElement brandFilterBtn = wait.until(ExpectedConditions.elementToBeClickable(brandTextXpathObj));
			brandFilterBtn.click();
			
			
			String redmiBrandXpathStr = "//android.view.ViewGroup[@content-desc=\"REDMI\"]/android.widget.ImageView";
			String applyBtnXpathStr = "//android.widget.TextView[@text=\"Apply\"]";
			
			By redmiBranxObj = By.xpath(redmiBrandXpathStr);
			By applyBtnXpathObj = By.xpath(applyBtnXpathStr);
			
			WebElement redmiBrndBtn = wait.until(ExpectedConditions.elementToBeClickable(redmiBranxObj));
			redmiBrndBtn.click();
			
			
			WebElement applyBtnFIkter = wait.until(ExpectedConditions.elementToBeClickable(applyBtnXpathObj));
			applyBtnFIkter.click();
			
			
			Thread.sleep(3000);
			List<WebElement> elements = driver.findElements(By.xpath("//android.view.ViewGroup[contains(@content-desc, 'REDMI')]"));
			if (!elements.isEmpty()) {
			    elements.get(0).click(); 
			    
			    
			    // add to favoirites have to write here
			    String addToFavStr = "//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup";
			    By addToFavObj = By.xpath(addToFavStr);
			    
				WebElement addToFavBtn = wait.until(ExpectedConditions.elementToBeClickable(addToFavObj));
				addToFavBtn.click();
			    
			    
			    
			    //add tp cart part
			    System.out.println("Waiting for add to cart btn loading..");
			    By addToCardXpathObj = By.xpath("//android.widget.TextView[@text=\"Add to cart\"]");
			    wait.until(ExpectedConditions.visibilityOfElementLocated(addToCardXpathObj));
			    driver.findElement(addToCardXpathObj).click();
			    System.out.println("Item added to cart...");
			
			    By goToCartXpathObj = By.xpath("//android.widget.TextView[@text=\"Go to cart\"]");
			   	wait.until(ExpectedConditions.elementToBeClickable(goToCartXpathObj)).click();
			    System.out.println("Going to add to cart activity..");
			    
			    String placeOrderXpath = "//android.widget.TextView[@text=\"Place order \"]";
			    By placeOrderXpathObj = By.xpath(placeOrderXpath);
			   // wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(placeOrderXpathObj));
			    driver.findElement(placeOrderXpathObj).click();
			    
			    
			    
			    
			    
			    
			} else {
			    System.out.println("No elements");
			}
			
			
			
			
			
			
		}
		catch(Exception exp)
		{
			exp.printStackTrace();
		}
		
	}
}
