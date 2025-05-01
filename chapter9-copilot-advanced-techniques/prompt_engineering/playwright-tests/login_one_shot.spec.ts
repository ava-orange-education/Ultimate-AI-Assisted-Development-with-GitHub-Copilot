// Prompt: Test login with valid credentials (One-shot)
// Example: login with user 'admin' and password 'admin123'
import { test, expect } from '@playwright/test'

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://example.com/login')
  await page.fill('#username', 'admin')
  await page.fill('#password', 'admin123')
  await page.click('button[type="submit"]')
  await expect(page.locator('text=Dashboard')).toBeVisible()
})
