import { CredentialConstants } from "../constants/Constants";
import RandomUserInfoUtils from "./RandomUserInfoUtils";
import UserInfo from "./UserInfo";

export function getExistingUser() : UserInfo { 
    return new UserInfo.UserBuilder()
        .email(CredentialConstants.EXISTING_USER_EMAIL)
        .password(CredentialConstants.EXISTING_USER_PASSWORD)
        .firstName(CredentialConstants.EXISTING_USER_FIRST_NAME)
        .lastName(CredentialConstants.EXISTING_USER_LAST_NAME)
        .build();
}

export function getNewUserWithValidInfo() : UserInfo {
    return new UserInfo.UserBuilder()
        .email(RandomUserInfoUtils.getValidEmail())
        .password(RandomUserInfoUtils.getValidPassword())
        .firstName(RandomUserInfoUtils.getValidFirstName())
        .lastName(RandomUserInfoUtils.getValidLastName())
        .address(RandomUserInfoUtils.getValidAddress())
        .city(RandomUserInfoUtils.getValidCity())
        .state(RandomUserInfoUtils.getValidState())
        .zipCode(RandomUserInfoUtils.getValidZipCode())
        .country(RandomUserInfoUtils.getValidCountry())
        .mobilePhoneNumber(RandomUserInfoUtils.getValidPhoneNumber())
        .build();
}

export function getNewUserWithValidEmailAndOtherNonEmptyInvalidInfo() : UserInfo {
    return new UserInfo.UserBuilder()
        .email(RandomUserInfoUtils.getValidEmail())
        .password(RandomUserInfoUtils.getInvalidPassword())
        .firstName(RandomUserInfoUtils.getInvalidFirstName())
        .lastName(RandomUserInfoUtils.getInvalidLastName())
        .address(RandomUserInfoUtils.getInvalidAddress())
        .city(RandomUserInfoUtils.getInvalidCity())
        .zipCode(RandomUserInfoUtils.getInvalidZipCode())
        .mobilePhoneNumber(RandomUserInfoUtils.getInvalidPhoneNumber())
        .build();
}