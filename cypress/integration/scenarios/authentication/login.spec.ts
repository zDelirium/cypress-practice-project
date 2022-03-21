import { CredentialConstants } from "../../constants/Constants";
import AuthenticationWorkflow from "../../workflows/AuthenticationWorkflow";


describe('Login', () => {

    it('login successfully with valid credentials', function() {
        AuthenticationWorkflow.loginWithValidCredentials(
            CredentialConstants.EXISTING_USER_EMAIL, CredentialConstants.EXISTING_USER_PASSWORD);
    });

})