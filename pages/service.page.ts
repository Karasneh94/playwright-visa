import { Page, Locator } from '@playwright/test';

class ServicePage {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    
    }
}

export default ServicePage;
