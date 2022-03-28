import RandomUserInfoUtils from "../../utils/RandomUserInfoUtils";
import UserInfo from "../../utils/UserInfo";
import { getExistingUser } from "../../utils/UserUtils";
import LoginWorkflow from "../../workflows/authentication/LoginWorkflow";

describe('Login', () => {
 
    let existingUser : UserInfo;

    before('Set up global users', function() {
        existingUser = getExistingUser();
    }); 

    it('Attempt login with an empty email', function() {
        LoginWorkflow.loginWithEmptyEmail();
    });

    it('Attempt login with a non-empty invalid email', function() {
        LoginWorkflow.loginWithNonEmptyInvalidEmail(RandomUserInfoUtils.getInvalidEmail());
    });

    it('Attempt login with valid email but empty password', function() {
        LoginWorkflow.loginWithValidEmailAndEmptyPassword(RandomUserInfoUtils.getValidEmail());
    });

    it('Attempt login with valid email but non-empty invalid password', function() {
        LoginWorkflow.loginWithValidEmailAndNonEmptyInvalidPassword(
            RandomUserInfoUtils.getValidEmail(), RandomUserInfoUtils.getInvalidPassword());
    });

    it('Attempt login with valid existing email but valid wrong password', function() {
        LoginWorkflow.loginWithValidEmailAndValidWrongPassword(
            existingUser.getEmail(), RandomUserInfoUtils.getValidPassword(existingUser.getPassword()));
    });

    it('Login successfully with existing user email and password', function() {
        LoginWorkflow.loginWithValidCredentials(existingUser);
    });

})