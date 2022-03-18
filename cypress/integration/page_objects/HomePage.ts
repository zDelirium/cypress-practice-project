import { HOME_URL } from "../constants/AppConstants";
import { contactUsButton, homeButton, AuthenticationButton, signOutButton } from "../constants/locators/HomePageLocators";

export default class HomePage {

    static visitWebSite() {
        cy
            .visit(HOME_URL)

        cy
            .xpath(homeButton).should('be.visible')
            .xpath(contactUsButton).should('be.visible')
        
        return this;
    }

    static goToHome() {
        cy
            .xpath(homeButton).should('be.visible')
            .click();

        return this;
    }

    static goToAuthentication() {
        cy
            .xpath(AuthenticationButton).should('be.visible')
            .click();

        return this;
    }

    static signOut() {
        cy
            .xpath(signOutButton).should('be.visible')
            .click()
            .should('not.exist')

            .xpath(AuthenticationButton).should('be.visible');

        return this;
    }
}
