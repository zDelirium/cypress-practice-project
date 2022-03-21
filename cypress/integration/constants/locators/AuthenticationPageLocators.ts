export const AuthenticationPageLocators = {
    SIGN_IN_EMAIL_TEXT_FIELD : "//h3[text()='Already registered?']/parent::form/descendant::label[text()='Email address']/following-sibling::input",
    SIGN_IN_PASSWORD_TEXT_FIELD : "//h3[text()='Already registered?']/parent::form/descendant::label[text()='Password']/following-sibling::span/input",
    SIGN_IN_BUTTON : "//button[@name='SubmitLogin']"
} as const;