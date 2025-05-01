// Prompt: Write a Playwright test to verify login page loads (Zero-shot)
import { test, expect } from '@playwright/test'

test('Login page should load', async ({ page }) => {
  await page.goto('https://example.com/login')
  await expect(page.locator('text=Login')).toBeVisible()
})
