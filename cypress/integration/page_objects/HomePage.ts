import { AppConstants } from "../constants/Constants";
import { HomePageLocators } from "../constants/locators/HomePageLocators";
import UserInfo from "../utils/UserInfo";
import BasePage from "./BasePage";

export default class HomePage extends BasePage {

    static visitWebSite() {
        cy
            .visit(AppConstants.HOME_URL);

        this.expectElementToBeVisible(HomePageLocators.HOME_BUTTON);
        return this;
    }

    static goToHome() {
        this.clickButton(HomePageLocators.HOME_BUTTON);
        return this;
    }

    static goToAuthentication() {
        this.clickButton(HomePageLocators.AUTHENTICATION_BUTTON);
        return this;
    }

    
    static clickSignOutButton() {
        this.clickButton(HomePageLocators.SIGN_OUT_BUTTON);
        return this;
    }
        
    static validateUserIsLoggedIn(user: UserInfo) {
        this.expectElementToBeVisible(HomePageLocators.SIGN_OUT_BUTTON);

        const userFullName = user.getFirstName() + ' ' + user.getLastName();
        this.expectTextInElement(HomePageLocators.MY_ACCOUNT_SIGNED_IN_BUTTON, userFullName);

        return this;
    }

    static validateUserIsNotLoggedIn() {
        this.expectElementToBeVisible(HomePageLocators.AUTHENTICATION_BUTTON);
        this.expectElementToNotExist(HomePageLocators.SIGN_OUT_BUTTON);
        return this;
    }
}
