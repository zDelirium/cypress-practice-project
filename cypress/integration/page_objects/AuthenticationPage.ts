import { AuthenticationPageLocators } from "../constants/locators/AuthenticationPageLocators";
import BasePage from "./BasePage";

export default class AuthenticationPage extends BasePage {    
    
    static enterCreateAccountEmail(email: string) {
        AuthenticationPage.fillTextInTextField(AuthenticationPageLocators.CREATE_ACCOUNT_EMAIL_TEXT_FIELD, email);
        return this;
    }

    static clickCreateAccountButton() {
        this.clickButton(AuthenticationPageLocators.CREATE_ACCOUNT_BUTTON);
        return this;
    }
    
    static enterSignInEmail(email: string) {
        this.fillTextInTextField(AuthenticationPageLocators.SIGN_IN_EMAIL_TEXT_FIELD, email);
        return this;
    }
    
    static enterSignInPassword(password: string) {
        this.fillTextInTextField(AuthenticationPageLocators.SIGN_IN_PASSWORD_TEXT_FIELD, password);
        return this;
    }
    
    static clickSignInButton() {
        this.clickButton(AuthenticationPageLocators.SIGN_IN_BUTTON);
        return this;
    }
    
    static validateCreateAccountWithInvalidEmailErrorMessage() {
        this.expectTextInElement(AuthenticationPageLocators.CREATE_ACCOUNT_ERROR_MESSAGE_BOX, 'Invalid email address');
        return this;
    }

    static validateCreateAccountWithExistingUserEmailErrorMessage() {
        this.expectTextInElement(AuthenticationPageLocators.CREATE_ACCOUNT_ERROR_MESSAGE_BOX, 
            'An account using this email address has already been registered. Please enter a valid password or request a new one.');
        return this;
    }

    static validateLoginWithEmptyEmailErrorMessage() {
        this.expectTextInElement(AuthenticationPageLocators.SIGN_IN_ERROR_MESSAGE_BOX, 'An email address required');
        return this;
    }
    
    static validateLoginWithNonEmptyInvalidEmailErrorMessage() {
        this.expectTextInElement(AuthenticationPageLocators.SIGN_IN_ERROR_MESSAGE_BOX, 'Invalid email address');
        return this;
    }
    
    static validateLoginWithValidEmailAndEmptyPasswordErrorMessage() {
        this.expectTextInElement(AuthenticationPageLocators.SIGN_IN_ERROR_MESSAGE_BOX, 'Password is required');
        return this;
    }

    static validateLoginWithValidEmailAndNonEmptyInvalidPasswordErrorMessage() {
        this.expectTextInElement(AuthenticationPageLocators.SIGN_IN_ERROR_MESSAGE_BOX, 'Invalid password');
        return this;
    }

    static validateLoginWithValidEmailAndValidWrongPasswordErrorMessage() {
        this.expectTextInElement(AuthenticationPageLocators.SIGN_IN_ERROR_MESSAGE_BOX, 'Authentication failed');
        return this;
    }
    
}