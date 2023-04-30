import { Page, Locator } from '@playwright/test';

class LoginPage {
    page: Page;
    cookieButton: Locator;
    publicServicesButton: Locator;
    constructor(page: Page) {
        this.page = page;
        this.cookieButton = page.locator('//div[@id="cookie-banner"]//button[@ng-click="acceptAll()"]');
        this.publicServicesButton = page.locator('//ul[@class="nav navbar-nav"]//a[@href="guest/index.html#/dashboard"]');
    }

    async navigate() {
        await this.page.goto('https://echannelsplatform.tahaluf.ae/');
    }

}

export default LoginPage;