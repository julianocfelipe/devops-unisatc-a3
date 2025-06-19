import { Page } from 'playwright/test';

export async function loginAsAdmin(page: Page) {
    await page.goto('http://localhost:1337/admin', { timeout: 10000 });

    await page.fill('input[name="email"]', process.env.ADMIN_EMAIL || '');
    await page.fill('input[name="password"]', process.env.ADMIN_PASSWORD || '');

    await Promise.all([
        page.waitForURL('**/admin', { timeout: 10000 }),
        page.click('button[type="submit"]'),
    ]);

    await page.getByRole('heading', { name: 'Hello Super' }).waitFor();
}