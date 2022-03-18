import { signInEmailTextField, signInPasswordTextField, signInButton} from "../constants/locators/AuthenticationPageLocators";
import { signOutButton } from "../constants/locators/HomePageLocators";


export default class AuthenticationPage {


    static fillSignInEmail(email: string) {
        cy
            .xpath(signInEmailTextField).should('be.visible').should('be.enabled')
            .clear().type(email);

        return this;
    }

    static fillSignInPassword(password: string) {
        cy
            .xpath(signInPasswordTextField).should('be.visible').should('be.enabled')
            .clear().type(password);

        return this;
    }

    static clickSignInButton() {
        cy
            .xpath(signInButton).should('be.visible').should('be.enabled')
            .click()

        return this;
    }

    static validateSuccessfulLogin() {
        cy
            .xpath(signOutButton).should('be.visible')

        return this;
    }
}