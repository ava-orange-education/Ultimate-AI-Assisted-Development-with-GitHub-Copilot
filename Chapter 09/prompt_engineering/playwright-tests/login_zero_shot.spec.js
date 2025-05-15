// Prompt: "Write a Playwright test for login functionality."

test('login functionality', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://example.com/login');
    
    // Fill in the username and password
    await page.fill('#username', 'your-username');
    await page.fill('#password', 'your-password');
    
    // Click the login button
    await page.click('#login-button');
    
    // Wait for navigation after login
    await page.waitForNavigation();
    
    // Check if login was successful by verifying the presence of a logout button
    const logoutButton = await page.$('#logout-button');
    expect(logoutButton).not.toBeNull();
});