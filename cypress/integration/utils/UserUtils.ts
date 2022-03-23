import { CredentialConstants } from "../constants/Constants";
import UserInfo from "./UserInfo";

export function getExistingUser() : UserInfo { 
    return new UserInfo.UserBuilder()
        .email(CredentialConstants.EXISTING_USER_EMAIL)
        .password(CredentialConstants.EXISTING_USER_PASSWORD)
        .firstName(CredentialConstants.EXISTING_USER_FIRST_NAME)
        .lastName(CredentialConstants.EXISTING_USER_LAST_NAME)
        .build();
}