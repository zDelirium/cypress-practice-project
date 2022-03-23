import { AuthenticationPageLocators } from "../constants/locators/AuthenticationPageLocators";
import { HomePageLocators } from "../constants/locators/HomePageLocators";


export default class AuthenticationPage {    
    
    static fillSignInEmail(email: string) {
        cy
            .xpath(AuthenticationPageLocators.SIGN_IN_EMAIL_TEXT_FIELD).should('be.visible').should('be.enabled')
            .clear().type(email);
        
        return this;
    }
    
    static fillSignInPassword(password: string) {
        cy
            .xpath(AuthenticationPageLocators.SIGN_IN_PASSWORD_TEXT_FIELD).should('be.visible').should('be.enabled')
            .clear().type(password);
        
        return this;
    }
    
    static clickSignInButton() {
        cy
            .xpath(AuthenticationPageLocators.SIGN_IN_BUTTON).should('be.visible').should('be.enabled')
            .click()
        
        return this;
    }
    
    static validateSuccessfulLogin() {
        cy
            .xpath(HomePageLocators.SIGN_OUT_BUTTON).should('be.visible');
        
        return this;
    }
    
    static validateLoginWithEmptyEmailErrorMessage() {
        this.validateErrorMessage(AuthenticationPageLocators.SIGN_IN_ERROR_MESSAGE_BOX, 'An email address required');
        return this;
    }
    
    static validateLoginWithNonEmptyInvalidEmailErrorMessage() {
        this.validateErrorMessage(AuthenticationPageLocators.SIGN_IN_ERROR_MESSAGE_BOX, 'Invalid email address');
        return this;
    }
    
    static validateLoginWithValidEmailAndEmptyPasswordErrorMessage() {
        this.validateErrorMessage(AuthenticationPageLocators.SIGN_IN_ERROR_MESSAGE_BOX, 'Password is required');
        return this;
    }

    static validateLoginWithValidEmailAndNonEmptyInvalidPasswordErrorMessage() {
        this.validateErrorMessage(AuthenticationPageLocators.SIGN_IN_ERROR_MESSAGE_BOX, 'Invalid password');
        return this;
    }

    static validateLoginWithValidEmailAndValidWrongPasswordErrorMessage() {
        this.validateErrorMessage(AuthenticationPageLocators.SIGN_IN_ERROR_MESSAGE_BOX, 'Authentication failed');
        return this;
    }
    
    private static validateErrorMessage(errorMessageBoxLocator: string, errorMessage: string) : void {
        cy
            .xpath(errorMessageBoxLocator)
            .should('be.visible')
            .should('contain.text', errorMessage);
    }
}