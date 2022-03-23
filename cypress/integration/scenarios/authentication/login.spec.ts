import RandomUserInfoUtils from "../../utils/RandomUserInfoUtils";
import { existingUser } from "../../utils/UserUtils";
import AuthenticationWorkflow from "../../workflows/AuthenticationWorkflow";

describe('Login', () => {
 
    it('Attempt login with an empty email', function() {
        AuthenticationWorkflow.loginWithEmptyEmail();
    });

    it('Attempt login with a non-empty invalid email', function() {
        AuthenticationWorkflow.loginWithNonEmptyInvalidEmail(RandomUserInfoUtils.getInvalidEmail());
    });

    it('Attempt login with valid email but empty password', function() {
        AuthenticationWorkflow.loginWithValidEmailAndEmptyPassword(RandomUserInfoUtils.getValidEmail());
    });

    it('Attempt login with valid email but non-empty invalid password', function() {
        AuthenticationWorkflow.loginWithValidEmailAndNonEmptyInvalidPassword(
            RandomUserInfoUtils.getValidEmail(), RandomUserInfoUtils.getInvalidPassword());
    });

    it('Attempt login with valid email but valid wrong password', function() {
        AuthenticationWorkflow.loginWithValidEmailAndValidWrongPassword(
            existingUser.getEmail(), RandomUserInfoUtils.getValidPassword(existingUser.getPassword()));
    });

    it('Login successfully with existing user email and password', function() {
        AuthenticationWorkflow.loginWithValidCredentials(
            existingUser.getEmail(), existingUser.getPassword());
    });

})