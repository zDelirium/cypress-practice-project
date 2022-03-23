import AuthenticationPage from "../page_objects/AuthenticationPage";
import HomePage from "../page_objects/HomePage";
import UserInfo from "../utils/UserInfo";

export default class AuthenticationWorkflow {

    static createAccountWithInvalidEmail(invalidEmail: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        // Test with empty email
        AuthenticationPage
            .clickCreateAccountButton()
            .validateCreateAccountWithInvalidEmailErrorMessage();
        
        // Test with non-empty invalid email
        AuthenticationPage
            .fillCreateAccountEmail(invalidEmail)
            .clickCreateAccountButton()
            .validateCreateAccountWithInvalidEmailErrorMessage();
    }

    static createAccountWithExistingUserEmail(existingUserEmail: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();
        
        AuthenticationPage
            .fillCreateAccountEmail(existingUserEmail)
            .clickCreateAccountButton()
            .validateCreateAccountWithExistingUserEmailErrorMessage();
    }

    static loginWithValidCredentials(existingUser: UserInfo) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .fillSignInEmail(existingUser.getEmail())
            .fillSignInPassword(existingUser.getPassword())
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
            .fillSignInEmail(invalidEmail)
            .clickSignInButton()
            .validateLoginWithNonEmptyInvalidEmailErrorMessage();
    }

    static loginWithValidEmailAndEmptyPassword(validEmail: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .fillSignInEmail(validEmail)
            .clickSignInButton()
            .validateLoginWithValidEmailAndEmptyPasswordErrorMessage();
    }

    static loginWithValidEmailAndNonEmptyInvalidPassword(validEmail: string, invalidPassword: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .fillSignInEmail(validEmail)
            .fillSignInPassword(invalidPassword)
            .clickSignInButton()
            .validateLoginWithValidEmailAndNonEmptyInvalidPasswordErrorMessage();
    }

    static loginWithValidEmailAndValidWrongPassword(validEmail: string, wrongPassword: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .fillSignInEmail(validEmail)
            .fillSignInPassword(wrongPassword)
            .clickSignInButton()
            .validateLoginWithValidEmailAndValidWrongPasswordErrorMessage();
    }

    static logout(email: string, password: string) {
        // Login
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .fillSignInEmail(email)
            .fillSignInPassword(password)
            .clickSignInButton();
        
        // Logout
        HomePage
            .clickSignOutButton()
            .validateUserIsNotLoggedIn();
    }

}