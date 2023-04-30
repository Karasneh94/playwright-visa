import { Page } from '@playwright/test'

class PersonData {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}

export default PersonData;