import RandomUserInfoUtils from "../../utils/RandomUserInfoUtils";
import UserInfo from "../../utils/UserInfo";
import { 
    getExistingUser,  
    getNewUserWithValidEmailAndOtherNonEmptyInvalidInfo, 
    getNewUserWithValidInfo 
} from "../../utils/UserUtils";
import AuthenticationWorkflow from "../../workflows/AuthenticationWorkflow";

describe('Create account', () => {

    let existingUser:UserInfo, newUserWithValidInfo:UserInfo, newUserWithValidEmailAndInvalidInfo:UserInfo;

    before('Set up global users', function() {
        existingUser = getExistingUser();
        newUserWithValidEmailAndInvalidInfo = getNewUserWithValidEmailAndOtherNonEmptyInvalidInfo();
    });

    beforeEach('Set up local users', function() {
        // Works better for parallel test execution
        newUserWithValidInfo = getNewUserWithValidInfo();
    })

    it('Attempt create account with invalid (can be empty) string' , function() {
        AuthenticationWorkflow.createAccountWithInvalidEmail(RandomUserInfoUtils.getInvalidEmail());
    });

    it('Attempt create account with existing user email', function() {
        AuthenticationWorkflow.createAccountWithExistingUserEmail(existingUser.getEmail());
    });

    it('Attempt create account with valid email and all default fields', function() {
        AuthenticationWorkflow.createAccountWithValidEmailAndDefaultFields(newUserWithValidInfo);
    })

    it('Attempt create account with valid email and invalid first name', function() {
        AuthenticationWorkflow.createAccountWithInvalidFirstName(
            newUserWithValidInfo, RandomUserInfoUtils.getInvalidFirstName()
        );
    });

    it('Attempt create account with valid email and invalid last name', function() {
        AuthenticationWorkflow.createAccountWithInvalidLastName(
            newUserWithValidInfo, RandomUserInfoUtils.getInvalidLastName()
        );
    });

    it('Attempt create account with valid email and invalid password name', function() {
        AuthenticationWorkflow.createAccountWithInvalidPassword(
            newUserWithValidInfo, RandomUserInfoUtils.getInvalidPassword()
        );
    });

    it('Attempt create account with valid email and invalid address', function() {
        AuthenticationWorkflow.createAccountWithInvalidAddress(
            newUserWithValidInfo, RandomUserInfoUtils.getInvalidAddress()
        );
    });

    it('Attempt create account with valid email and invalid city', function() {
        AuthenticationWorkflow.createAccountWithInvalidCity(
            newUserWithValidInfo, RandomUserInfoUtils.getInvalidCity()
        );
    });
    
    it('Attempt create account with valid email and invalid state', function() {
        AuthenticationWorkflow.createAccountWithInvalidState(
            newUserWithValidInfo, RandomUserInfoUtils.getInvalidState()
        );
    });

    it('Attempt create account with valid email and invalid zip code', function() {
        AuthenticationWorkflow.createAccountWithInvalidZipCode(
            newUserWithValidInfo, RandomUserInfoUtils.getInvalidZipCode()
        );
    });

    it('Attempt create account with valid email and invalid country', function() {
        AuthenticationWorkflow.createAccountWithInvalidCountry(
            newUserWithValidInfo, RandomUserInfoUtils.getInvalidCountry()
        );
    });

    it('Attempt create account with valid email and invalid mobile phone number', function() {
        AuthenticationWorkflow.createAccountWithInvalidMobilePhoneNumber(
            newUserWithValidInfo, RandomUserInfoUtils.getInvalidPhoneNumber()
        );
    });

    it('Attempt create account with valid email and multiple invalid other info', function() {
        AuthenticationWorkflow.createAccountWithValidEmailAndMultipleInvalidInfo(newUserWithValidEmailAndInvalidInfo);
    })

    it('Create new account successfully', function() {
        AuthenticationWorkflow.createAccountSuccess(newUserWithValidInfo);
    });
    
})