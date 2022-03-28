import AuthenticationPage from "../../page_objects/AuthenticationPage";
import HomePage from "../../page_objects/HomePage";

export default class LogoutWorkflow {
    
    static logout(email: string, password: string) {
        // Login
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .enterSignInEmail(email)
            .enterSignInPassword(password)
            .clickSignInButton();
        
        // Logout
        HomePage
            .clickSignOutButton()
            .validateUserIsNotLoggedIn();
    }


}