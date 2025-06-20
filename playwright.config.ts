import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

/**
 * Read environment variables from .env file.
 * For more information, see https://github.com/motdotla/dotenv
 */
// require('dotenv').config(); 

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: './e2e-tests',
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: 'html',
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like await page.goto('/'). */
        baseURL: 'http://localhost:1337',

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },

        /* Test against mobile viewports. */
        // {
        //   name: 'Mobile Chrome',
        //   use: { ...devices['Pixel 5'] },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: { ...devices['iPhone 12'] },
        // },

        /* Test against branded browsers. */
        // {
        //   name: 'Microsoft Edge',
        //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
        // },
        // {
        //   name: 'Firefox',
        //   use: { ...devices['Desktop Firefox'] },
        // },
        // {
        //   name: 'Safari',
        //   use: { ...devices['Desktop Safari'] },
        // },
    ],

    /* Run your local dev server before starting the tests */
    // Esta opção é útil se você quiser que o Playwright inicie o Strapi para você,
    // mas por enquanto, vamos iniciá-lo manualmente em um terminal separado.
    // webServer: {
    //   command: 'npm run develop',
    //   url: 'http://localhost:1337',
    //   reuseExistingServer: !process.env.CI,
    //   timeout: 120 * 1000, // Dá 120 segundos para o Strapi iniciar
    // },
});