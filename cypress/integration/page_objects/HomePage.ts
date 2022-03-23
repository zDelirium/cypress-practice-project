import { AppConstants } from "../constants/Constants";
import { HomePageLocators } from "../constants/locators/HomePageLocators";
import UserInfo from "../utils/UserInfo";

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

    
    static clickSignOutButton() {
        cy
            .xpath(HomePageLocators.SIGN_OUT_BUTTON).should('be.visible')
            .click()
            
            return this;
        }
        
    static validateUserIsLoggedIn(user: UserInfo) {
        cy
            .xpath(HomePageLocators.SIGN_OUT_BUTTON).should('be.visible');

        cy
            .xpath(HomePageLocators.MY_ACCOUNT_SIGNED_IN_BUTTON)
            .should('be.visible')
            .contains(user.getFirstName() + ' ' + user.getLastName());

        return this;
    }

    static validateUserIsNotLoggedIn() {
        cy
            .xpath(HomePageLocators.SIGN_OUT_BUTTON).should('not.exist');

        cy    
            .xpath(HomePageLocators.AUTHENTICATION_BUTTON).should('be.visible');

        return this;
    }
}
