import { CreateAccountPageLocators } from "../constants/locators/CreateAccountPageLocators";
import BasePage from "./BasePage";

export default class CreateAccountPage extends BasePage {

    static clickRegisterButton() {
        this.clickButton(CreateAccountPageLocators.REGISTER_BUTTON);
        return this;
    }

    // Text fields
    static enterPersonalInformationFirstName(firstName: string) {
        this.fillTextInTextField(CreateAccountPageLocators.PERSONAL_INFORMATION_FIRST_NAME_TEXT_FIELD, firstName);
        return this;
    }

    static enterPersonalInformationLastName(lastName: string) {
        this.fillTextInTextField(CreateAccountPageLocators.PERSONAL_INFORMATION_LAST_NAME_TEXT_FIELD, lastName);
        return this;
    }

    static enterPassword(password: string) {
        this.fillTextInTextField(CreateAccountPageLocators.PASSWORD_TEXT_FIELD, password);
        return this;
    }

    static enterAddress(address: string) {
        this.fillTextInTextField(CreateAccountPageLocators.ADDRESS_TEXT_FIELD, address);
        return this;
    }

    static enterCity(city: string) {
        this.fillTextInTextField(CreateAccountPageLocators.CITY_TEXT_FIELD, city);
        return this;
    }

    static selectState(state: string) {
        this.selectOptionInDropdown(CreateAccountPageLocators.STATE_DROPDOWN_MENU, state);
        return this;
    }

    static enterZipCode(zipCode: string) {
        this.fillTextInTextField(CreateAccountPageLocators.ZIP_CODE_TEXT_FIELD, zipCode);
        return this;
    }

    static selectCountry(country: string) {
        this.selectOptionInDropdown(CreateAccountPageLocators.COUNTRY_DROPDOWN_MENU, country);
        return this;
    }

    static enterMobilePhoneNumber(mobilePhoneNumber: string) {
        this.fillTextInTextField(CreateAccountPageLocators.MOBILE_PHONE_TEXT_FIELD, mobilePhoneNumber);
        return this;
    }
    
    // Error messages
    static validateNumberOfErrorsCreateAccountForm(expectedNbOfErrors: number) {
        if (expectedNbOfErrors < 1) {
            throw new Error('This method expects at least 1 error');
        }
        let nbErrorsErrorMessage:string = expectedNbOfErrors == 1 ? 'There is 1 error' : 'There are ' + expectedNbOfErrors + ' errors';
        this.expectTextInElement(CreateAccountPageLocators.ERROR_MESSAGE_BOX, nbErrorsErrorMessage);
        return this;
    }

    static validateEmptyFirstNameErrorMessage() {
        this.expectTextInElement(CreateAccountPageLocators.ERROR_MESSAGE_BOX, 'firstname is required');
        return this;
    }

    static validateNonEmptyInvalidFirstNameErrorMessage() {
        this.expectTextInElement(CreateAccountPageLocators.ERROR_MESSAGE_BOX, 'firstname is invalid');
        return this;
    }

    static validateEmptyLastNameErrorMessage() {
        this.expectTextInElement(CreateAccountPageLocators.ERROR_MESSAGE_BOX, 'lastname is required');
        return this;
    }

    static validateNonEmptyInvalidLastNameErrorMessage() {
        this.expectTextInElement(CreateAccountPageLocators.ERROR_MESSAGE_BOX, 'lastname is invalid');
        return this;
    }

    static validateEmptyPasswordErrorMessage() {
        this.expectTextInElement(CreateAccountPageLocators.ERROR_MESSAGE_BOX, 'passwd is required');
        return this;
    }

    static validateNonEmptyInvalidPasswordErrorMessage() {
        this.expectTextInElement(CreateAccountPageLocators.ERROR_MESSAGE_BOX, 'passwd is invalid');
        return this;
    }

    static validateEmptyAddressErrorMessage() {
        this.expectTextInElement(CreateAccountPageLocators.ERROR_MESSAGE_BOX, 'address1 is required');
        return this;
    }

    static validateNonEmptyInvalidAddressErrorMessage() {
        this.expectTextInElement(CreateAccountPageLocators.ERROR_MESSAGE_BOX, 'address1 is invalid');
        return this;
    }

    static validateEmptyCityErrorMessage() {
        this.expectTextInElement(CreateAccountPageLocators.ERROR_MESSAGE_BOX, 'city is required');
        return this;
    }

    static validateNonEmptyInvalidCityErrorMessage() {
        this.expectTextInElement(CreateAccountPageLocators.ERROR_MESSAGE_BOX, 'city is invalid');
        return this;
    }

    static validateInvalidStateErrorMessage() {
        this.expectTextInElement(CreateAccountPageLocators.ERROR_MESSAGE_BOX,
                'This country requires you to choose a State');
        return this;
    }

    static validateInvalidZipCodeErrorMessage() {
        this.expectTextInElement(CreateAccountPageLocators.ERROR_MESSAGE_BOX,
                "The Zip/Postal code you've entered is invalid. It must follow this format: 00000");
        return this;
    }

    static validateThreeInvalidCountryErrorMessages() {
        this.expectTextInElement(CreateAccountPageLocators.ERROR_MESSAGE_BOX, 'id_country is required');
        this.expectTextInElement(CreateAccountPageLocators.ERROR_MESSAGE_BOX, 'Country cannot be loaded with address->id_country')
        this.expectTextInElement(CreateAccountPageLocators.ERROR_MESSAGE_BOX, 'Country is invalid');
        return this;
    }

    static validateEmptyPhoneNumberErrorMessage() {
        this.expectTextInElement(CreateAccountPageLocators.ERROR_MESSAGE_BOX,
                'You must register at least one phone number');
        return this;
    }

    static validateNonEmptyInvalidMobilePhoneNumberErrorMessage() {
        this.expectTextInElement(CreateAccountPageLocators.ERROR_MESSAGE_BOX, 'phone_mobile is invalid');
        return this;
    }

    
}