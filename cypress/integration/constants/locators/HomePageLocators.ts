export const HomePageLocators = {
    HOME_BUTTON : "//img/parent::a[@title='My Store']",
    AUTHENTICATION_BUTTON : "//a[contains(text(), 'Sign in')]",
    SIGN_OUT_BUTTON : "//a[contains(text(), 'Sign out')]",
    CONTACT_US_BUTTON : "//a[text()='Contact us']"
} as const;