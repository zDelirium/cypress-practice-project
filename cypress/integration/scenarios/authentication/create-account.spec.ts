import RandomUserInfoUtils from "../../utils/RandomUserInfoUtils";
import UserInfo from "../../utils/UserInfo";
import { 
    getExistingUser,  
    getNewUserWithValidEmailAndOtherNonEmptyInvalidInfo, 
    getNewUserWithValidInfo 
} from "../../utils/UserUtils";
import CreateAccountWorkflow from "../../workflows/authentication/CreateAccountWorkflow";

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
        CreateAccountWorkflow.createAccountWithInvalidEmail(RandomUserInfoUtils.getInvalidEmail());
    });

    it('Attempt create account with existing user email', function() {
        CreateAccountWorkflow.createAccountWithExistingUserEmail(existingUser.getEmail());
    });

    it('Attempt create account with valid email and all default fields', function() {
        CreateAccountWorkflow.createAccountWithValidEmailAndDefaultFields(newUserWithValidInfo);
    })

    it('Attempt create account with valid email and invalid first name', function() {
        CreateAccountWorkflow.createAccountWithInvalidFirstName(
            newUserWithValidInfo, RandomUserInfoUtils.getInvalidFirstName()
        );
    });

    it('Attempt create account with valid email and invalid last name', function() {
        CreateAccountWorkflow.createAccountWithInvalidLastName(
            newUserWithValidInfo, RandomUserInfoUtils.getInvalidLastName()
        );
    });

    it('Attempt create account with valid email and invalid password name', function() {
        CreateAccountWorkflow.createAccountWithInvalidPassword(
            newUserWithValidInfo, RandomUserInfoUtils.getInvalidPassword()
        );
    });

    it('Attempt create account with valid email and invalid address', function() {
        CreateAccountWorkflow.createAccountWithInvalidAddress(
            newUserWithValidInfo, RandomUserInfoUtils.getInvalidAddress()
        );
    });

    it('Attempt create account with valid email and invalid city', function() {
        CreateAccountWorkflow.createAccountWithInvalidCity(
            newUserWithValidInfo, RandomUserInfoUtils.getInvalidCity()
        );
    });
    
    it('Attempt create account with valid email and invalid state', function() {
        CreateAccountWorkflow.createAccountWithInvalidState(
            newUserWithValidInfo, RandomUserInfoUtils.getInvalidState()
        );
    });

    it('Attempt create account with valid email and invalid zip code', function() {
        CreateAccountWorkflow.createAccountWithInvalidZipCode(
            newUserWithValidInfo, RandomUserInfoUtils.getInvalidFormatZipCode(), RandomUserInfoUtils.getInvalidZipCode()
        );
    });

    it('Attempt create account with valid email and invalid country', function() {
        CreateAccountWorkflow.createAccountWithInvalidCountry(
            newUserWithValidInfo, RandomUserInfoUtils.getInvalidCountry()
        );
    });

    it('Attempt create account with valid email and invalid mobile phone number', function() {
        CreateAccountWorkflow.createAccountWithInvalidMobilePhoneNumber(
            newUserWithValidInfo, RandomUserInfoUtils.getInvalidPhoneNumber()
        );
    });

    it('Attempt create account with valid email and multiple invalid other info', function() {
        CreateAccountWorkflow.createAccountWithValidEmailAndMultipleInvalidInfo(newUserWithValidEmailAndInvalidInfo);
    })

    it('Create new account successfully', function() {
        CreateAccountWorkflow.createAccountSuccess(newUserWithValidInfo);
    });
    
})