import RandomUserInfoUtils from "../../utils/RandomUserInfoUtils";
import UserInfo from "../../utils/UserInfo";
import { getExistingUser } from "../../utils/UserUtils";
import AuthenticationWorkflow from "../../workflows/AuthenticationWorkflow";

describe('Create account', () => {

    let existingUser : UserInfo; 

    before('Set up global users', function() {
        existingUser = getExistingUser();
    });

    it('Attempt create account with invalid (can be empty) string' , function() {
        AuthenticationWorkflow.createAccountWithInvalidEmail(RandomUserInfoUtils.getInvalidEmail());
    });

    it('Attempt create account with existing user email', function() {
        AuthenticationWorkflow.createAccountWithExistingUserEmail(existingUser.getEmail());
    })
})