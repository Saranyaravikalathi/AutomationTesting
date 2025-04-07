package tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.Test;

import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;

public class TestCaseRunner extends BasicUtil {
	
	@Test(priority = 1)
	public void loginTestCase() {
		System.out.println("Running login test case...");
		ExtentTest test1 = extent.createTest("Login Test Case", "Login test case description");
		try
		{
			test1.log(Status.INFO, "Login Test Case Started");
			Cases cases = new Cases();
			cases.wait=wait;
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("com.flipkart.android:id/custom_back_icon")));
			cases.skipAndGotToHomePage();
			test1.log(Status.PASS, "Skipped to HomePage");
			cases.clickAccountsBtn();
			test1.log(Status.PASS, "Navigated to Accounts Page");
			cases.clickLoginBtn();
			test1.log(Status.PASS, "Click Login Button");
			cases.useEmail();
			test1.log(Status.PASS, "Click Email Button to login using email");
			cases.enterEmail();
			test1.log(Status.PASS, "Enter Email");
			cases.clickEmailContinue();
			test1.log(Status.PASS, "Click Email COntinue");
			System.out.println("Please wait...Retreving flipkart otp from gmail inbox...");
			String flipkartOtp = getOTP();
			test1.log(Status.PASS, "Reterving Otp from Gmail");
			cases.enterOtp(flipkartOtp);
			test1.log(Status.PASS, "Enter Otp");
			cases.clickOTPVerifyBtn();
			test1.log(Status.PASS, "Clicked Verify Button");
			test1.log(Status.INFO, "Login Test Case Passed");
		}
		catch(Exception exp)
		{
			test1.log(Status.FAIL, "Login Test Case Passed");
			System.err.println("Exception in login caase..");
		}
	}

	@Test(priority = 2)
	public void editProfile()
	{
		System.out.println("edi profile");
		By editProfileXpath = By.xpath("//android.widget.TextView[@text=\"Edit Profile\"]");
		
		
				
	}
	
	
	@Test(priority = 2)
	public void searchCase() 
	{
		ExtentTest test2 = extent.createTest("Search Test Case", "Search test case description");
		try
		{
			test2.log(Status.INFO, "Search Test Case Started");
			System.out.println("Running search testcase ..");
			Cases cases = new Cases();
			cases.wait=wait;
			test2.log(Status.PASS, "Click Category");
			cases.clickCategory();
			test2.log(Status.PASS, "Naviagted to Category Page");
			cases.clickSearchButton();
			test2.log(Status.PASS,"Clicked Search Button");
			cases.search("redmi");
			test2.log(Status.PASS,"Entered Search word as -> redmi");
			cases.clickNotNow("redmi");
			test2.log(Status.PASS,"Clicked Not now Button");
		}
		catch(Exception exp)
		{
			test2.log(Status.FAIL, "Search Test Case Failed");
			exp.printStackTrace();
			System.out.println("Exception in Search Case ..");
		}
		
		
	}
	
	@Test(priority = 3)
	public void filterCase() {
		ExtentTest test3 = extent.createTest("Filter Test Case", "Filter test case description");
		try 
		{
			System.out.println("Running Filter Test Case...");
			test3.log(Status.INFO,"Filter Test Case Started..");
			Cases cases = new Cases();
			cases.wait=wait;
			cases.clickFilterBtn();
			test3.log(Status.PASS,"Click Filter Button");
			cases.selectRedmiBrand();
			test3.log(Status.PASS,"Select REDMI Brand");
			cases.brandFilterApply();
			test3.log(Status.PASS,"Click Apply Button");
			System.out.println("Redmi Filter Applied...");	
			test3.log(Status.PASS,"Filter Applied");
		} 
		catch (Exception exp) 
		{
			test3.log(Status.FAIL, "Filter Test Case Failed");
			exp.printStackTrace();
			System.out.println("Exception in Search Case ..");
		}
	}
	
	@Test(priority = 4)
	public void sortByCase()
	{
		ExtentTest test4 = extent.createTest("Sort By Test Case", "Sort By test desecrpition");
		try {
			System.out.println("Running Sort By Test Case...");
			test4.log(Status.INFO,"Sort By Test Case Started..");
			Cases cases = new Cases();
			cases.wait=wait;
			cases.clickSortBy();
			test4.log(Status.PASS, "Clciked Sort By Button");
			cases.selectNewestFirst();
			test4.log(Status.PASS, "Selecteed Newest First.");
			System.out.println("Sort by - newest first option selected...");
			test4.log(Status.INFO, "Sort By Test Case Passed");
		} catch (Exception e) {
			test4.log(Status.FAIL, "Sort By Test Case Failed");
		}
	}
	
	@Test(priority = 5)
	public void selectProductCase()
	{
		ExtentTest test5 = extent.createTest("Select Product Test Case");
		try
		{
			test5.log(Status.INFO, "Select Product Test Case Started.");
			System.out.println("Select procuct test cases running...");
			Cases cases = new Cases();
			cases.wait=wait;
			test5.log(Status.PASS, "Select First Product..");
			cases.selectProductOnIndex(0);
			test5.log(Status.PASS, "First Product Selected");
			
			System.out.println("1st product selected ..");
			test5.log(Status.INFO, "Select Product Test Case Passed");
		}
		catch(Exception exp)
		{
			test5.log(Status.FAIL, "Select Product Test Case Failed");
			System.out.println("Exception in select procuct test case...");
		}
	}
	//6 priority
	@Test(priority = 6)
	public void addToFavouritesTestCase()
	{
		ExtentTest test6 = extent.createTest("Add Product to Favourites Test Case");
		try
		{
			test6.log(Status.INFO, "Add Product to Favourites Test Case Started");
			System.out.println("Add to Favorite test cases running...");
			Cases cases = new Cases();
			cases.wait=wait;
			test6.log(Status.PASS, "Adding the product to Favourites");
			cases.addToFav();
			test6.log(Status.PASS, "Product added to Favourites");
			System.out.println("Sucessfully added to favourites");
			test6.log(Status.INFO, "Add Product to Favourites Test Case Passed");
		}
		catch(Exception exp)
		{
			test6.log(Status.FAIL, "Add Product to Favourites Test Case Failed");
//			exp.printStackTrace();
			System.out.println("Exception in addToFavouritesTestCase...");
		}
	}
	
	@Test(priority = 7)
	public void addToCartTestCase()
	{
		ExtentTest test7 = extent.createTest("Add to Cart Test Case");
		try
		{
			test7.log(Status.INFO, "Add to Cart Test Case Started.");
			System.out.println("Add to cart test cases running...");
			Cases cases = new Cases();
			cases.wait=wait;
			test7.log(Status.PASS, "Adding the product to cart");
			cases.addToCart();
			test7.log(Status.PASS, "Product Added to cart");
			System.out.println("Sucessfully added to cart");
			test7.log(Status.INFO, "Add to Cart Test Case Passed.");
		}
		catch(Exception exp)
		{
			test7.log(Status.FAIL, "Add to Cart Test Case Failed.");
			System.out.println("Exception in add to cart...");
		}
	}
	
	@Test(priority = 8)
	public void goToCartTestCase()
	{
		ExtentTest test8 = extent.createTest("View Cart Test Case");
		try
		{
			System.out.println("Go to cart test cases running...");
			Cases cases = new Cases();
			cases.wait=wait;
			test8.log(Status.INFO, "Go to cart Test Case Started");
			test8.log(Status.PASS, "Click Go to cart Button");
			cases.goToCart();
			test8.log(Status.PASS,"Navigating to Cart Page");
			System.out.println("Sucessfully naviagted go to cart");
			test8.log(Status.INFO, "Go to cart Test Case Passed");
		}
		catch(Exception exp)
		{
			test8.log(Status.FAIL, "Go to cart Test Case Failed");
			System.out.println("Exception in go to cart...");
		}
	}
	
	@Test(priority = 9)
	public void placeOrderTestCase()
	{
		ExtentTest test9 = extent.createTest("Place Order from Cart Test Case");
		try
		{
			test9.log(Status.INFO, "Place Order from Cart Test Case Started");
			System.out.println("Running place order test case...");
			Cases cases = new Cases();
			cases.wait=wait;
			test9.log(Status.PASS, "Clicking Place Order Button");
			cases.placeOrder();
			test9.log(Status.PASS, "Placing order Page Success");
			System.out.println("Order placed Sucessfully....");
			test9.log(Status.INFO, "Place Order from Cart Test Case Passed");
		}
		catch(Exception exp)
		{
//			exp.printStackTrace();
			test9.log(Status.FAIL, "Place Order from Cart Test Case Failed");
			System.out.println("Exception in place order test case..");
		}
	}
	
	
	
}
