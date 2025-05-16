// GitHub Copilot Prompt:
// Write a Playwright test case for automating a login page.
// Include scenarios for successful login, incorrect password, and missing email.

const { test, expect } = require('@playwright/test');

test.describe('Login Page Tests', () => {

    test('should login successfully with valid credentials', async ({ page }) => {
        await page.goto('https://example.com/login');
        await page.fill('#email', 'user@example.com');
        await page.fill('#password', 'password123');
        await page.click('button[type="submit"]');
        await expect(page).toHaveURL('https://example.com/dashboard');
    });

    test('should show error for incorrect password', async ({ page }) => {
        await page.goto('https://example.com/login');
        await page.fill('#email', 'user@example.com');
        await page.fill('#password', 'wrongpassword');
        await page.click('button[type="submit"]');
        await expect(page.locator('.error')).toHaveText('Invalid credentials');
    });

    test('should show error for missing email', async ({ page }) => {
        await page.goto('https://example.com/login');
        await page.fill('#password', 'password123');
        await page.click('button[type="submit"]');
        await expect(page.locator('.error')).toHaveText('Email is required');
    });

});
