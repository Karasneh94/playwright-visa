import { Page, Locator } from '@playwright/test';
import DropDownList from './component/dropdown_list.component';

class ServicePage {
    dropdownList: DropDownList;
    page: Page;
    applicantEnglishName: Locator;
    applicantArabicName: Locator;
    applicantMobileNumber: Locator;
    applicantEmail: Locator;
    preferredLanguageDDL: string;
    emirateDepartmentDDL: string;
    preferredLanguageUL: string;
    emirateDepartmentUL: string;
    beneficiaryEnglishName: Locator;
    beneficiaryArabicName: Locator;
    currentNationalityDDL: string;
    currentNationalityUL: string;
    occupationDDL: Locator;
    occupationSearch: Locator;
    constructor(page: Page) {

        this.page = page;
        this.applicantEnglishName = page.locator('//input[@name="englishApplicantName"]');
        this.applicantArabicName = page.locator('//input[@name="arabicApplicantName"]');
        this.applicantMobileNumber = page.locator('//input[@name="applicantMobile"]');
        this.applicantEmail = page.locator('//input[@name="applicantEmail"]');
        this.preferredLanguageDDL = '//label[@for="language1"]/following::a[1]';
        this.preferredLanguageUL = '//label[@for="language1"]/following::ul[1]';
        this.emirateDepartmentDDL = '//tahaluf-dropdownlist[@datasource="goldenVisaAdminRegions"]//div[@class="ng-scope"]';
        this.emirateDepartmentUL ='//tahaluf-dropdownlist[@datasource="goldenVisaAdminRegions"]//ul[@role="listbox"]';
        this.beneficiaryEnglishName = page.locator('//input[@name="englishName"]');
        this.beneficiaryArabicName = page.locator('//input[@name="arabicName"]');
        this.currentNationalityDDL = '//label[@for="currentNationality"]/following::a[1]';
        this.currentNationalityUL = '//label[@for="currentNationality"]/following::ul[1]';
        this.occupationDDL = page.locator('//label[@for="professions"]/following::a[1]');
        this.occupationSearch = page.locator('//label[@for="professions"]/following::input[2]');


    }

    async fillFields(id: number) {

        switch (id) {
            case 783: {
                this.dropdownList = new DropDownList(this.page);

                //Applicant Information
                await this.applicantEnglishName.fill('Ahmed Karasneh');
                await this.applicantArabicName.fill('احمد كراسنه');
                await this.applicantMobileNumber.fill('504032022');
                await this.applicantEmail.fill('karasneh@gmail.com');
                await this.dropdownList.selectOption(this.preferredLanguageDDL, this.preferredLanguageUL, 'ENGLISH');

                //Identification Information For Service Beneficiary
                await this.dropdownList.selectOption(this.emirateDepartmentDDL, this.emirateDepartmentUL, 'ABU DHABI');

                //Personal Information For Service Beneficiary
                await this.beneficiaryEnglishName.fill('Ahmed Karasneh');
                await this.beneficiaryArabicName.fill('احمد كراسنه');
                await this.dropdownList.selectOption(this.currentNationalityDDL, this.currentNationalityUL, 'JORDAN');
                await this.dropdownList.selectOptionBySearch(this.occupationDDL, this.occupationSearch, 'SOFTWARE ENGINEER');
                break;
            }
            case 784: {

                break;
            }
            case 464: {

                break;
            }
            default: {
                console.log('Service Does Not Exist');
                break;
            }
        }


    }



}

export default ServicePage;
