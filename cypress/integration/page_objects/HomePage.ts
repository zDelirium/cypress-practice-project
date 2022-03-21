import { AppConstants } from "../constants/Constants";
import { HomePageLocators } from "../constants/locators/HomePageLocators";

export default class HomePage {

    static visitWebSite() {
        cy
            .visit(AppConstants.HOME_URL)

        cy
            .xpath(HomePageLocators.HOME_BUTTON).should('be.visible')
            .xpath(HomePageLocators.CONTACT_US_BUTTON).should('be.visible')
        
        return this;
    }

    static goToHome() {
        cy
            .xpath(HomePageLocators.HOME_BUTTON).should('be.visible')
            .click();

        return this;
    }

    static goToAuthentication() {
        cy
            .xpath(HomePageLocators.AUTHENTICATION_BUTTON).should('be.visible')
            .click();

        return this;
    }

    static signOut() {
        cy
            .xpath(HomePageLocators.SIGN_OUT_BUTTON).should('be.visible')
            .click()
            .should('not.exist')

            .xpath(HomePageLocators.AUTHENTICATION_BUTTON).should('be.visible');

        return this;
    }
}
