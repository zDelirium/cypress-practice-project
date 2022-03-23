export const AppConstants = {
    HOME_URL : 'http://automationpractice.com/index.php',
    TIMEOUT : 30 * 1000,
    DROPDOWN_INVALID_VALUE : '-'
} as const;

export const CredentialConstants = {
    EXISTING_USER_EMAIL : 'wl-manual@test.com',
    EXISTING_USER_PASSWORD : 'wishlist',
    EXISTING_USER_FIRST_NAME : 'wishlist',
    EXISTING_USER_LAST_NAME : 'test'
} as const;

export const RandomUserUtilsConstants = {
    VALID_PASSWORD_MIN_LENGTH : 5,
    VALID_PASSWORD_MAX_LENGTH : 20,
    INVALID_PASSWORD_MIN_LENGTH : 1,
    INVALID_PASSWORD_MAX_LENGTH : 4,
    VALID_ZIP_CODE_FORMAT : '#####',
    INVALID_ZIP_CODE_MIN_VALUE : 0,
    INVALID_ZIP_CODE_MAX_VALUE : 9999999999
} as const;