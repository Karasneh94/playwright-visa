import {Page, Locator} from '@playwright/test';

class PublicServicesPage {
    page: Page;
    tourismCard: Locator;
    startServiceButton_783: Locator;
    startServiceButton_784: Locator;
    startServiceButton_464: Locator;
    constructor(page: Page) {
        this.page = page;
        this.tourismCard = page.locator('//h4[normalize-space()="Tourism" or normalize-space()="السياحة"]');
        this.startServiceButton_783 = page.locator('//a[@href="#/serviceCards/783?administrativeRegionId=1"]/following::button[1]');
        this.startServiceButton_784 = page.locator('//a[@href="#/serviceCards/784?administrativeRegionId=1"]/following::button[1]');
        this.startServiceButton_464 = page.locator('//a[@href="#/serviceCards/464?administrativeRegionId=1"]/following::button[1]');

    }


    async selectTourismVisaService(id: number) {
        switch(id) { 
            case 783: { 
                await this.startServiceButton_783.click(); 
               break; 
            } 
            case 784: { 
                await this.startServiceButton_784.click(); 
               break; 
            } 
            case 464: { 
                await this.startServiceButton_464.click(); 
                break; 
             } 
            default: { 
               console.log('Service Does Not Exist');
               break; 
            } 
         } 
        
    }


}

export default PublicServicesPage;