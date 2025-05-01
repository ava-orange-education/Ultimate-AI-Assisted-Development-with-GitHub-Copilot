// Prompt: Based on examples, create test cases for both successful and failed login (Few-shot)
// Example 1: Valid login
// Example 2: Invalid login shows error
import { test, expect } from '@playwright/test'

test('Valid login redirects to dashboard', async ({ page }) => {
  await page.goto('https://example.com/login')
  await page.fill('#username', 'admin')
  await page.fill('#password', 'admin123')
  await page.click('button[type="submit"]')
  await expect(page.locator('text=Dashboard')).toBeVisible()
})

test('Invalid login shows error', async ({ page }) => {
  await page.goto('https://example.com/login')
  await page.fill('#username', 'wronguser')
  await page.fill('#password', 'wrongpass')
  await page.click('button[type="submit"]')
  await expect(page.locator('text=Invalid credentials')).toBeVisible()
})
