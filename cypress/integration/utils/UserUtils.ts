import { CredentialConstants } from "../constants/Constants";
import UserInfo from "./UserInfo";

export let existingUser : UserInfo = new UserInfo.UserBuilder()
    .email(CredentialConstants.EXISTING_USER_EMAIL)
    .password(CredentialConstants.EXISTING_USER_PASSWORD)
    .build();