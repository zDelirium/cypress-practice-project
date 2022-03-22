import { CredentialConstants } from "../../constants/Constants";
import { UserInfo } from "../../utils/UserInfo";
import AuthenticationWorkflow from "../../workflows/AuthenticationWorkflow";

describe('Login', () => {

    let existingUser : UserInfo;

    before('set up user credentials', function() {
        existingUser = new UserInfo(CredentialConstants.EXISTING_USER_EMAIL, CredentialConstants.EXISTING_USER_PASSWORD)
    }); 

    it('attempt login with an empty email', function() {
        AuthenticationWorkflow.loginWithEmptyEmail();
    });

    it('attempt login with a non-empty invalid email', function() {
        AuthenticationWorkflow.loginWithNonEmptyInvalidEmail(CredentialConstants.INVALID_USER_EMAIL);
    });

    it('attempt login with valid email but empty password', function() {
        AuthenticationWorkflow.loginWithValidEmailAndEmptyPassword(existingUser.getEmail());
    });

    it('attempt login with valid email but non-empty invalid password', function() {
        AuthenticationWorkflow.loginWithValidEmailAndNonEmptyInvalidPassword(
            existingUser.getEmail(), CredentialConstants.INVALID_USER_PASSWORD);
    });

    it('attempt login with valid email but valid wrong password', function() {
        AuthenticationWorkflow.loginWithValidEmailAndValidWrongPassword(
            existingUser.getEmail(), CredentialConstants.WRONG_USER_PASSWORD);
    });

    it('login successfully with existing user email and password', function() {
        AuthenticationWorkflow.loginWithValidCredentials(
            existingUser.getEmail(), existingUser.getPassword());
    });


})