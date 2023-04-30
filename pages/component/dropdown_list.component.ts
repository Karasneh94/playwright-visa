import { Locator, Page } from '@playwright/test'

class DropDownList {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async selectOptionBySearch(DDL: Locator, searchLocator: Locator, value: string) {
       await DDL.click();
       await searchLocator.fill(value);
       await this.page.waitForTimeout(2000);
       //await this.page.waitForSelector(".dropdownMenu_X-NJ", { state: 'visible' });
       await this.page.keyboard.press('Enter');
    }

    async selectOption(DDL: string, UL: string, optionValue: string) {
        const dropdownButton = await this.page.$(DDL);
        await dropdownButton?.click();

        const dropdownOtions = await this.page.waitForSelector(UL);
        const options = await dropdownOtions.$$('li');

        for (const option of options) {
            const value = await option.textContent();
            if (value?.trim() === optionValue ) {
                await option.click();
                break;
            }
        }
    }


}

export default DropDownList;