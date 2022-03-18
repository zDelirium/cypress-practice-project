import AuthenticationPage from "../page_objects/AuthenticationPage";
import HomePage from "../page_objects/HomePage";

export default class AuthenticationWorkflow {

    static loginWithValidCredentials(email: string, password: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .fillSignInEmail(email)
            .fillSignInPassword(password)
            .clickSignInButton()
            .validateSuccessfulLogin();
    }

}