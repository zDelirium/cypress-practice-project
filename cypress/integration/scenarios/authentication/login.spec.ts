import { CredentialConstants } from "../../constants/Constants";
import AuthenticationWorkflow from "../../workflows/AuthenticationWorkflow";

describe('Login', () => {

    it('attempt login with an empty email', function() {
        AuthenticationWorkflow.loginWithEmptyEmail();
    });

    it('attempt login with a non-empty invalid email', function() {
        AuthenticationWorkflow.loginWithNonEmptyInvalidEmail(CredentialConstants.INVALID_USER_EMAIL);
    });

    it('attempt login with valid email but empty password', function() {
        AuthenticationWorkflow.loginWithValidEmailAndEmptyPassword(CredentialConstants.EXISTING_USER_EMAIL);
    });

    it('attempt login with valid email but non-empty invalid password', function() {
        AuthenticationWorkflow.loginWithValidEmailAndNonEmptyInvalidPassword(
            CredentialConstants.EXISTING_USER_EMAIL, CredentialConstants.INVALID_USER_PASSWORD);
    });

    it('attempt login with valid email but valid wrong password', function() {
        AuthenticationWorkflow.loginWithValidEmailAndValidWrongPassword(
            CredentialConstants.EXISTING_USER_EMAIL, CredentialConstants.WRONG_USER_PASSWORD);
    });

    it('login successfully with existing user email and password', function() {
        AuthenticationWorkflow.loginWithValidCredentials(
            CredentialConstants.EXISTING_USER_EMAIL, CredentialConstants.EXISTING_USER_PASSWORD);
    });


})