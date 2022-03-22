export const AppConstants = {
    HOME_URL : 'http://automationpractice.com/index.php',
    TIMEOUT : 30 * 1000
} as const;

export const CredentialConstants = {
    EXISTING_USER_EMAIL : 'wl-manual@test.com',
    EXISTING_USER_PASSWORD : 'wishlist',
    INVALID_USER_EMAIL : 'i-am-invalid-email',
    INVALID_USER_PASSWORD : 'bad',
    WRONG_USER_PASSWORD : 'valid-but-wrong-password',
    DROPDOWN_INVALID_VALUE : '-'
} as const;
