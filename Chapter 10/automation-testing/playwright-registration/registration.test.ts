// Prompt: Write Playwright test for user registration
import { test, expect } from '@playwright/test'

test('User registration test', async ({ page }) => {
  await page.goto('https://example.com/register')
  await page.fill('#username', 'testuser')
  await page.fill('#email', 'test@example.com')
  await page.fill('#password', 'Password@123')
  await page.click('button[type="submit"]')
  await expect(page.locator('text=Welcome')).toBeVisible()
})
