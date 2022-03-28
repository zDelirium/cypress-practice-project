import AuthenticationPage from "../page_objects/AuthenticationPage";
import CreateAccountPage from "../page_objects/CreateAccountPage";
import HomePage from "../page_objects/HomePage";
import UserInfo from "../utils/UserInfo";

// TODO Refactor into multiple files cuz this looks like a damn mess
export default class AuthenticationWorkflow {

    static createAccountWithInvalidEmail(invalidEmail: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        // Test with empty email
        AuthenticationPage
            .clickCreateAccountButton()
            .validateCreateAccountWithInvalidEmailErrorMessage();
        
        // Test with non-empty invalid email
        AuthenticationPage
            .enterCreateAccountEmail(invalidEmail)
            .clickCreateAccountButton()
            .validateCreateAccountWithInvalidEmailErrorMessage();
    }

    static createAccountWithExistingUserEmail(existingUserEmail: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();
        
        AuthenticationPage
            .enterCreateAccountEmail(existingUserEmail)
            .clickCreateAccountButton()
            .validateCreateAccountWithExistingUserEmailErrorMessage();
    }

    static createAccountWithValidEmailAndDefaultFields(newUser: UserInfo) {
        HomePage
            .visitWebSite()
            .goToAuthentication();
        
        AuthenticationPage
            .enterCreateAccountEmail(newUser.getEmail())
            .clickCreateAccountButton()
        
        CreateAccountPage
            .clickRegisterButton()
            .validateEmptyFirstNameErrorMessage()
            .validateEmptyLastNameErrorMessage()
            .validateEmptyPasswordErrorMessage()
            .validateEmptyAddressErrorMessage()
            .validateEmptyCityErrorMessage()
            .validateInvalidStateErrorMessage()
            .validateInvalidFormatZipCodeErrorMessage()
            .validateEmptyPhoneNumberErrorMessage()
            .validateNumberOfErrorsCreateAccountForm(8);

    }

    static createAccountWithInvalidFirstName(newUser: UserInfo, invalidFirstName: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .enterCreateAccountEmail(newUser.getEmail())
            .clickCreateAccountButton();

        CreateAccountPage
            // Fill form with valid fields except first name
            .enterPersonalInformationLastName(newUser.getLastName())
            .enterPassword(newUser.getPassword())
            .selectCountry(newUser.getCountry())
            .enterAddress(newUser.getAddress())
            .enterCity(newUser.getCity())
            .selectState(newUser.getState())
            .enterZipCode(newUser.getZipCode())
            .enterMobilePhoneNumber(newUser.getMobilePhoneNumber())

            // Validate empty first name error message
            .clickRegisterButton()
            .validateEmptyFirstNameErrorMessage()
            .validateNumberOfErrorsCreateAccountForm(1)

            // Validate invalid first name message
            .enterPersonalInformationFirstName(invalidFirstName)
            .enterPassword(newUser.getPassword())
            .clickRegisterButton()
            .validateNonEmptyInvalidFirstNameErrorMessage()
            .validateNumberOfErrorsCreateAccountForm(1);
    }

    static createAccountWithInvalidLastName(newUser: UserInfo, invalidLastName: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .enterCreateAccountEmail(newUser.getEmail())
            .clickCreateAccountButton();

        CreateAccountPage
            // Fill form with valid fields except last name
            .enterPersonalInformationFirstName(newUser.getFirstName())
            .enterPassword(newUser.getPassword())
            .selectCountry(newUser.getCountry())
            .enterAddress(newUser.getAddress())
            .enterCity(newUser.getCity())
            .selectState(newUser.getState())
            .enterZipCode(newUser.getZipCode())
            .enterMobilePhoneNumber(newUser.getMobilePhoneNumber())

            // Validate empty last name error message
            .clickRegisterButton()
            .validateEmptyLastNameErrorMessage()
            .validateNumberOfErrorsCreateAccountForm(1)

            // Validate invalid last name message
            .enterPersonalInformationLastName(invalidLastName)
            .enterPassword(newUser.getPassword())
            .clickRegisterButton()
            .validateNonEmptyInvalidLastNameErrorMessage()
            .validateNumberOfErrorsCreateAccountForm(1);
    }

    static createAccountWithInvalidPassword(newUser: UserInfo, invalidPassword: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .enterCreateAccountEmail(newUser.getEmail())
            .clickCreateAccountButton();

        CreateAccountPage
            // Fill form with valid fields except password
            .enterPersonalInformationFirstName(newUser.getFirstName())
            .enterPersonalInformationLastName(newUser.getLastName())
            .selectCountry(newUser.getCountry())
            .enterAddress(newUser.getAddress())
            .enterCity(newUser.getCity())
            .selectState(newUser.getState())
            .enterZipCode(newUser.getZipCode())
            .enterMobilePhoneNumber(newUser.getMobilePhoneNumber())

            // Validate empty password error message
            .clickRegisterButton()
            .validateEmptyPasswordErrorMessage()
            .validateNumberOfErrorsCreateAccountForm(1)

            // Validate invalid password message
            .enterPassword(invalidPassword)
            .clickRegisterButton()
            .validateNonEmptyInvalidPasswordErrorMessage()
            .validateNumberOfErrorsCreateAccountForm(1);
    }

    static createAccountWithInvalidAddress(newUser: UserInfo, invalidAddress: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .enterCreateAccountEmail(newUser.getEmail())
            .clickCreateAccountButton();

        CreateAccountPage
            // Fill form with valid fields except address
            .enterPersonalInformationFirstName(newUser.getFirstName())
            .enterPersonalInformationLastName(newUser.getLastName())
            .enterPassword(newUser.getPassword())
            .selectCountry(newUser.getCountry())
            .enterCity(newUser.getCity())
            .selectState(newUser.getState())
            .enterZipCode(newUser.getZipCode())
            .enterMobilePhoneNumber(newUser.getMobilePhoneNumber())

            // Validate empty address error message
            .clickRegisterButton()
            .validateEmptyAddressErrorMessage()
            .validateNumberOfErrorsCreateAccountForm(1)

            // Validate invalid address message
            .enterAddress(invalidAddress)
            .enterPassword(newUser.getPassword())
            .clickRegisterButton()
            .validateNonEmptyInvalidAddressErrorMessage()
            .validateNumberOfErrorsCreateAccountForm(1);
    }

    static createAccountWithInvalidCity(newUser: UserInfo, invalidCity: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .enterCreateAccountEmail(newUser.getEmail())
            .clickCreateAccountButton();

        CreateAccountPage
            // Fill form with valid fields except city
            .enterPersonalInformationFirstName(newUser.getFirstName())
            .enterPersonalInformationLastName(newUser.getLastName())
            .enterPassword(newUser.getPassword())
            .selectCountry(newUser.getCountry())
            .enterAddress(newUser.getAddress())
            .selectState(newUser.getState())
            .enterZipCode(newUser.getZipCode())
            .enterMobilePhoneNumber(newUser.getMobilePhoneNumber())

            // Validate empty city error message
            .clickRegisterButton()
            .validateEmptyCityErrorMessage()
            .validateNumberOfErrorsCreateAccountForm(1)

            // Validate invalid city message
            .enterCity(invalidCity)
            .enterPassword(newUser.getPassword())
            .clickRegisterButton()
            .validateNonEmptyInvalidCityErrorMessage()
            .validateNumberOfErrorsCreateAccountForm(1);
    }

    static createAccountWithInvalidState(newUser: UserInfo, invalidState: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .enterCreateAccountEmail(newUser.getEmail())
            .clickCreateAccountButton();

        CreateAccountPage
            // Fill form with valid fields except state
            .enterPersonalInformationFirstName(newUser.getFirstName())
            .enterPersonalInformationLastName(newUser.getLastName())
            .enterPassword(newUser.getPassword())
            .selectCountry(newUser.getCountry())
            .enterAddress(newUser.getAddress())
            .enterCity(newUser.getCity())
            .selectState(invalidState)
            .enterZipCode(newUser.getZipCode())
            .enterMobilePhoneNumber(newUser.getMobilePhoneNumber())

            // Validate invalid state city error message
            .clickRegisterButton()
            .validateInvalidStateErrorMessage()
            .validateNumberOfErrorsCreateAccountForm(1)

    }

    static createAccountWithInvalidZipCode(newUser: UserInfo, invalidFormatZipCode: string, invalidZipCode: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .enterCreateAccountEmail(newUser.getEmail())
            .clickCreateAccountButton();

        CreateAccountPage
            // Fill form with valid fields except zip code
            .enterPersonalInformationFirstName(newUser.getFirstName())
            .enterPersonalInformationLastName(newUser.getLastName())
            .enterPassword(newUser.getPassword())
            .selectCountry(newUser.getCountry())
            .enterAddress(newUser.getAddress())
            .enterCity(newUser.getCity())
            .selectState(newUser.getState())
            .enterMobilePhoneNumber(newUser.getMobilePhoneNumber())

            // Validate empty zip code error message (same as invalid case)
            .clickRegisterButton()
            .validateInvalidFormatZipCodeErrorMessage()
            .validateNumberOfErrorsCreateAccountForm(1)

            // Validate invalid format zip code message
            .enterZipCode(invalidFormatZipCode)
            .enterPassword(newUser.getPassword())
            .clickRegisterButton()
            .validateInvalidFormatZipCodeErrorMessage()
            .validateNumberOfErrorsCreateAccountForm(1)

            // Validate invalid format zipcode
            .enterZipCode(invalidZipCode)
            .enterPassword(newUser.getPassword())
            .clickRegisterButton()
            .validateTwoInvalidZipCodeErrorMessages()
            .validateNumberOfErrorsCreateAccountForm(2);


    }

    static createAccountWithInvalidCountry(newUser: UserInfo, invalidCountry: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .enterCreateAccountEmail(newUser.getEmail())
            .clickCreateAccountButton();

        CreateAccountPage
            // Fill form with valid fields except country
            .enterPersonalInformationFirstName(newUser.getFirstName())
            .enterPersonalInformationLastName(newUser.getLastName())
            .enterPassword(newUser.getPassword())
            .selectCountry(invalidCountry)
            .enterAddress(newUser.getAddress())
            .enterCity(newUser.getCity())
            .enterMobilePhoneNumber(newUser.getMobilePhoneNumber())

            // Validate invalid country error messages (3)
            .clickRegisterButton()
            .validateThreeInvalidCountryErrorMessages()
            .validateNumberOfErrorsCreateAccountForm(3)
    }

    static createAccountWithInvalidMobilePhoneNumber(newUser: UserInfo, invalidMobilePhoneNumber: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .enterCreateAccountEmail(newUser.getEmail())
            .clickCreateAccountButton();

        CreateAccountPage
            // Fill form with valid fields except mobile phone number
            .enterPersonalInformationFirstName(newUser.getFirstName())
            .enterPersonalInformationLastName(newUser.getLastName())
            .enterPassword(newUser.getPassword())
            .selectCountry(newUser.getCountry())
            .enterAddress(newUser.getAddress())
            .enterCity(newUser.getCity())
            .selectState(newUser.getState())
            .enterZipCode(newUser.getZipCode())

            // Validate empty phone number error message
            .clickRegisterButton()
            .validateEmptyPhoneNumberErrorMessage()
            .validateNumberOfErrorsCreateAccountForm(1)

            // Validate invalid mobile phone number message
            .enterMobilePhoneNumber(invalidMobilePhoneNumber)
            .enterPassword(newUser.getPassword())
            .clickRegisterButton()
            .validateNonEmptyInvalidMobilePhoneNumberErrorMessage()
            .validateNumberOfErrorsCreateAccountForm(1);
    }

    static createAccountWithValidEmailAndMultipleInvalidInfo(newUser: UserInfo) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .enterCreateAccountEmail(newUser.getEmail())
            .clickCreateAccountButton();

        CreateAccountPage
            .enterPersonalInformationFirstName(newUser.getFirstName())
            .enterPersonalInformationLastName(newUser.getLastName())
            .enterPassword(newUser.getPassword())
            .enterAddress(newUser.getAddress())
            .enterCity(newUser.getCity())
            .selectState(newUser.getState())
            .enterZipCode(newUser.getZipCode())
            .enterMobilePhoneNumber(newUser.getMobilePhoneNumber())
            .clickRegisterButton()

            .validateNumberOfErrorsCreateAccountForm(8)
            .validateNonEmptyInvalidFirstNameErrorMessage()
            .validateNonEmptyInvalidLastNameErrorMessage()
            .validateNonEmptyInvalidPasswordErrorMessage()
            .validateNonEmptyInvalidAddressErrorMessage()
            .validateNonEmptyInvalidCityErrorMessage()
            .validateInvalidStateErrorMessage()
            .validateInvalidFormatZipCodeErrorMessage()
            .validateNonEmptyInvalidMobilePhoneNumberErrorMessage();
    }

    static createAccountSuccess(newUser: UserInfo) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .enterCreateAccountEmail(newUser.getEmail())
            .clickCreateAccountButton();

        CreateAccountPage
            .enterPersonalInformationFirstName(newUser.getFirstName())
            .enterPersonalInformationLastName(newUser.getLastName())
            .enterPassword(newUser.getPassword())
            .enterAddress(newUser.getAddress())
            .enterCity(newUser.getCity())
            .selectState(newUser.getState())
            .enterZipCode(newUser.getZipCode())
            .selectCountry(newUser.getCountry())
            .enterMobilePhoneNumber(newUser.getMobilePhoneNumber())
            .clickRegisterButton();

        HomePage
            .validateUserIsLoggedIn(newUser);
    }

    static loginWithValidCredentials(existingUser: UserInfo) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .enterSignInEmail(existingUser.getEmail())
            .enterSignInPassword(existingUser.getPassword())
            .clickSignInButton();
        
        HomePage
            .validateUserIsLoggedIn(existingUser);
    }

    static loginWithEmptyEmail() {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .clickSignInButton()
            .validateLoginWithEmptyEmailErrorMessage();
    }

    static loginWithNonEmptyInvalidEmail(invalidEmail: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .enterSignInEmail(invalidEmail)
            .clickSignInButton()
            .validateLoginWithNonEmptyInvalidEmailErrorMessage();
    }

    static loginWithValidEmailAndEmptyPassword(validEmail: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .enterSignInEmail(validEmail)
            .clickSignInButton()
            .validateLoginWithValidEmailAndEmptyPasswordErrorMessage();
    }

    static loginWithValidEmailAndNonEmptyInvalidPassword(validEmail: string, invalidPassword: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .enterSignInEmail(validEmail)
            .enterSignInPassword(invalidPassword)
            .clickSignInButton()
            .validateLoginWithValidEmailAndNonEmptyInvalidPasswordErrorMessage();
    }

    static loginWithValidEmailAndValidWrongPassword(validEmail: string, wrongPassword: string) {
        HomePage
            .visitWebSite()
            .goToAuthentication();

        AuthenticationPage
            .enterSignInEmail(validEmail)
            .enterSignInPassword(wrongPassword)
            .clickSignInButton()
            .validateLoginWithValidEmailAndValidWrongPasswordErrorMessage();
    }

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