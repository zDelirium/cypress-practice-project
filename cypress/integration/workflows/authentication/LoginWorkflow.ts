import AuthenticationPage from "../../page_objects/AuthenticationPage";
import HomePage from "../../page_objects/HomePage";
import UserInfo from "../../utils/UserInfo";

export default class LoginWorkflow {
    
    static loginWithValidCredentials(existingUser: UserInfo) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .enterSignInEmail(existingUser.getEmail())
            .enterSignInPassword(existingUser.getPassword())
            .clickSignInButton();
        
        HomePage
            .validateUserIsLoggedIn(existingUser);
    }

    static loginWithEmptyEmail() {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .clickSignInButton()
            .validateLoginWithEmptyEmailErrorMessage();
    }

    static loginWithNonEmptyInvalidEmail(invalidEmail: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .enterSignInEmail(invalidEmail)
            .clickSignInButton()
            .validateLoginWithNonEmptyInvalidEmailErrorMessage();
    }

    static loginWithValidEmailAndEmptyPassword(validEmail: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .enterSignInEmail(validEmail)
            .clickSignInButton()
            .validateLoginWithValidEmailAndEmptyPasswordErrorMessage();
    }

    static loginWithValidEmailAndNonEmptyInvalidPassword(validEmail: string, invalidPassword: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .enterSignInEmail(validEmail)
            .enterSignInPassword(invalidPassword)
            .clickSignInButton()
            .validateLoginWithValidEmailAndNonEmptyInvalidPasswordErrorMessage();
    }

    static loginWithValidEmailAndValidWrongPassword(validEmail: string, wrongPassword: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .enterSignInEmail(validEmail)
            .enterSignInPassword(wrongPassword)
            .clickSignInButton()
            .validateLoginWithValidEmailAndValidWrongPasswordErrorMessage();
    }
}