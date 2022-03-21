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
            .xpath(HomePageLocators.SIGN_OUT_BUTTON).should('be.visible')

        return this;
    }
}