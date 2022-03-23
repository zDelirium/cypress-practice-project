export const AuthenticationPageLocators = {
    SIGN_IN_EMAIL_TEXT_FIELD : "//h3[text()='Already registered?']/parent::form/descendant::label[text()='Email address']/following-sibling::input",
    SIGN_IN_PASSWORD_TEXT_FIELD : "//h3[text()='Already registered?']/parent::form/descendant::label[text()='Password']/following-sibling::span/input",
    SIGN_IN_BUTTON : "//button[@name='SubmitLogin']",
    SIGN_IN_ERROR_MESSAGE_BOX : "//h1[text()='Authentication']/following-sibling::div[@class='alert alert-danger']",

    CREATE_ACCOUNT_EMAIL_TEXT_FIELD : "//h3[text()='Create an account']/parent::form/descendant::label[text()='Email address']/following-sibling::input",
    CREATE_ACCOUNT_BUTTON : "//button[@name='SubmitCreate']",
    CREATE_ACCOUNT_ERROR_MESSAGE_BOX : "//h3[text()='Create an account']/parent::form/div/div[@class='alert alert-danger']"
} as const;