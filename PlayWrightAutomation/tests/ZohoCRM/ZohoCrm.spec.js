const { test, expect } = require('@playwright/test');
const xpaths = require('./crmZoho.json');

test.describe('CRM Zoho Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(xpaths.openPage.url);
        await expect(page).toHaveURL(xpaths.openPage.url);
        await expect(page).toHaveTitle(xpaths.openPage.title);
    });

    test('Sign In and Search for Leads', async ({ page }) => {
        // Navigate to Sign-In page
        const linkSignIn = xpaths.signIp.signInLink;
        await expect(page.locator(linkSignIn)).toBeEnabled();
        await page.locator(linkSignIn).click();

        // Fill email 
        const emailField = xpaths.signIp.emailSign;
        await expect(page.locator(emailField)).toBeEnabled();
        await page.locator(emailField).fill('saranyaravikalathi@gmail.com');

        // Click Next 
        const btnNext = xpaths.signIp.nextButton;
        await expect(page.locator(btnNext)).toBeEnabled();
        await page.locator(btnNext).click();

        // Fill password
        const passwordField = xpaths.signIp.passwordField;
        await page.waitForSelector(passwordField);
        await expect(page.locator(passwordField)).toBeEnabled();
        await page.locator(passwordField).fill('Saranya@1509');

        // Click Sign In
        const btnSignin = xpaths.signIp.signinButton;
        await expect(page.locator(btnSignin)).toBeEnabled();
        await page.waitForSelector(btnSignin, { state: 'visible', timeout: 10000 });
        await page.locator(btnSignin).click();

        // Search for leads
        const searchBar = xpaths.Homesearch.searchBar;
        await page.waitForSelector(searchBar, { state: 'visible', timeout: 30000 });
        await page.locator(searchBar).fill('leads');
        await page.keyboard.press('Enter');
        await page.waitForTimeout(2000);

    });
    test('Create Leads', async ({ page }) => {
        const leadsCreate=xpaths.Leads.createLead;
        await page.waitForSelector(leadsCreate, { state: 'visible', timeout: 30000 });
        await page.locator(leadsCreate).click();
        await page.waitForTimeout(15000);

    });
});
