// Prompt: "Using the following example, write a Playwright test for login functionality that includes error handling for invalid credentials."

const { test, expect } = require('@playwright/test');

test('login with invalid credentials', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://example.com/login');
    
    // Enter invalid username and password
    await page.fill('#username', 'invalidUser');
    await page.fill('#password', 'invalidPassword');
    
    // Click the login button
    await page.click('#loginButton');
    
    // Wait for the error message to appear
    const errorMessage = await page.waitForSelector('.error-message');
    
    // Assert that the error message is displayed
    expect(await errorMessage.textContent()).toContain('Invalid username or password');
});

test('login with valid credentials', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://example.com/login');
    
    // Enter valid username and password
    await page.fill('#username', 'validUser');
    await page.fill('#password', 'validPassword');
    
    // Click the login button
    await page.click('#loginButton');
    
    // Wait for navigation after login
    await page.waitForNavigation();
    
    // Check if login was successful by verifying the presence of a logout button
    const logoutButton = await page.$('#logout-button');
    expect(logoutButton).not.toBeNull();
});