import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login.page';
import PublicServicesPage from '../pages/public_services.page';
import ServicePage from '../pages/service.page';


test.describe('Happy Scenario', () => {
  let loginPage: LoginPage;
  let publicServicesPage: PublicServicesPage;
  let servicePage: ServicePage;

  test('Navigate to the 783 service', async ({ page }) => {
    loginPage = new LoginPage(page);
    publicServicesPage = new PublicServicesPage(page);
    servicePage = new ServicePage(page);

    await loginPage.navigate();
    await loginPage.cookieButton.click();
    await loginPage.publicServicesButton.click();
    await publicServicesPage.tourismCard.click();
    await publicServicesPage.selectTourismVisaService(783)
    await servicePage.fillFields(783);
    
    
    // await expect(page).toHaveTitle('ICP Smart Services');
    // await page.getByRole('link', { name: 'Public Services' }).click();
  });

})

