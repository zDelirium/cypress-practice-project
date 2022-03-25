import { faker } from '@faker-js/faker';
import { AppConstants, RandomUserUtilsConstants } from '../constants/Constants';

export default class RandomUserInfoUtils {

    // Setting locale
    static setLocale(locale: string) {
        faker.setLocale(locale);
    }

    // Email
    static getValidEmail() : string {
        return faker.internet.email();
    }

    // not in the format {string}@{string}(.{string}+)
    static getInvalidEmail() : string {
        return faker.random.words();
    }

    // Password
    static getValidPassword(differentFrom:string = '') : string {
        let validPassword : string;

        do {
            validPassword = faker.internet.password(
                this.generateRndInteger(RandomUserUtilsConstants.VALID_PASSWORD_MIN_LENGTH, RandomUserUtilsConstants.VALID_PASSWORD_MAX_LENGTH)
            );
        } while (validPassword === differentFrom);

        return validPassword;
    }

    // Less than 5 characters
    static getInvalidPassword() : string {
        return faker.internet.password(
            this.generateRndInteger(RandomUserUtilsConstants.INVALID_PASSWORD_MIN_LENGTH, RandomUserUtilsConstants.INVALID_PASSWORD_MAX_LENGTH)
        );
    }

    // First name (Could implement gender)
    static getValidFirstName() : string {
        return faker.name.firstName();
    }

    static getInvalidFirstName() : string {
        return this.generateInvalidName();
    }

    // Last name (Could implement gender)
    static getValidLastName() : string {
        return faker.name.lastName();
    }

    static getInvalidLastName() : string {
        return this.generateInvalidName();
    }

    // Address
    static getValidAddress() : string {
        return faker.address.streetAddress();
    }

    // For the sake of simplicity, simply add a question mark in front
    static getInvalidAddress() : string {
        return '?' + faker.address.streetAddress();
    }

    // City
    static getValidCity() : string {
        return faker.address.cityName();
    }

    // For the sake of simplicity, simply add a question mark in front
    static getInvalidCity() : string {
        return '?' + faker.address.streetAddress();
    }

    // State
    static getValidState() : string {
        return faker.address.state();
    }

    static getInvalidState() : string {
        return AppConstants.DROPDOWN_INVALID_VALUE;
    }

    // Zip Code
    static getValidZipCode() : string {
        return faker.address.zipCode(RandomUserUtilsConstants.VALID_ZIP_CODE_FORMAT);
    }

    // Not in the format #####
    static getInvalidZipCode() : string {
        let invalidZipCode : number;

        do {
            invalidZipCode = this.generateRndInteger(
                RandomUserUtilsConstants.INVALID_ZIP_CODE_MIN_VALUE, RandomUserUtilsConstants.INVALID_ZIP_CODE_MAX_VALUE);

        } while (invalidZipCode.toString().length == RandomUserUtilsConstants.VALID_ZIP_CODE_FORMAT.length);
        
        return invalidZipCode.toString();
    }

    // Country
    // The only country that can be used is US
    static getValidCountry() : string {
        return 'United States';
    }

    static getInvalidCountry() : string {
        return AppConstants.DROPDOWN_INVALID_VALUE;
    }

    // phone number (mobile and home)
    static getValidPhoneNumber() : string {
        return faker.phone.phoneNumber(RandomUserUtilsConstants.VALID_PHONE_NUMBER_FORMAT);
    }

    static getInvalidPhoneNumber() : string {
        return faker.random.words();
    }


    // Helper methods
    private static generateRndInteger(min: number, max: number) : number {
        return faker.datatype.number({min: min, max: max});
    }

    // Has to contain at least a non-alpha character
    private static generateInvalidName() : string {
        return faker.datatype.number().toString();
    }

}