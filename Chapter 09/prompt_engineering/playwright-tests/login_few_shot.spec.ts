// Prompt: "Write a Playwright test for login functionality. Include both positive and negative test cases, ensuring proper error messages are displayed for invalid credentials."

import { test, expect } from '@playwright/test';

// Positive test case: Successful login
test('should login successfully with valid credentials', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://example.com/login');
  
  // Fill in valid credentials
  await page.fill('#username', 'testuser@example.com');
  await page.fill('#password', 'correctPassword123');
  
  // Click login button
  await page.click('#loginButton');
  
  // Wait for the dashboard to load
  await page.waitForSelector('#dashboard');
  
  // Assert that we're on the dashboard page
  expect(await page.isVisible('#dashboard')).toBeTruthy();
  expect(await page.isVisible('#welcome-message')).toBeTruthy();
  
  // Verify user info is displayed correctly
  const welcomeText = await page.textContent('#welcome-message');
  expect(welcomeText).toContain('Welcome, Test User');
});

// Negative test case: Invalid username
test('should show appropriate error for invalid username', async ({ page }) => {
  await page.goto('https://example.com/login');
  
  // Fill in invalid username
  await page.fill('#username', 'nonexistent@example.com');
  await page.fill('#password', 'anyPassword123');
  
  await page.click('#loginButton');
  
  // Check for error message
  const errorMessage = await page.waitForSelector('.error-message');
  expect(await errorMessage.textContent()).toContain('Invalid username or password');
  
  // Ensure we're still on the login page
  expect(page.url()).toContain('/login');
});

// Negative test case: Invalid password
test('should show appropriate error for invalid password', async ({ page }) => {
  await page.goto('https://example.com/login');
  
  // Valid username but wrong password
  await page.fill('#username', 'testuser@example.com');
  await page.fill('#password', 'wrongPassword123');
  
  await page.click('#loginButton');
  
  // Check for error message
  const errorMessage = await page.waitForSelector('.error-message');
  expect(await errorMessage.textContent()).toContain('Invalid username or password');
  
  // Ensure we're still on the login page
  expect(page.url()).toContain('/login');
});

// Edge case: Empty fields
test('should validate required fields', async ({ page }) => {
  await page.goto('https://example.com/login');
  
  // Leave fields empty and try to submit
  await page.click('#loginButton');
  
  // Check for validation messages
  const usernameError = await page.waitForSelector('#username-error');
  const passwordError = await page.waitForSelector('#password-error');
  
  expect(await usernameError.textContent()).toContain('Username is required');
  expect(await passwordError.textContent()).toContain('Password is required');
  
  // Ensure we're still on the login page
  expect(page.url()).toContain('/login');
});

// Edge case: Account locked
test('should handle locked account', async ({ page }) => {
  await page.goto('https://example.com/login');
  
  // Use credentials of a locked account
  await page.fill('#username', 'locked@example.com');
  await page.fill('#password', 'password123');
  
  await page.click('#loginButton');
  
  // Check for account locked message
  const errorMessage = await page.waitForSelector('.error-message');
  expect(await errorMessage.textContent()).toContain('Account locked. Please reset your password');
  
  // Verify that the reset password link is available
  const resetLink = await page.waitForSelector('a.reset-password');
  expect(await resetLink.textContent()).toContain('Reset Password');
});