import UserInfo from "../../utils/UserInfo";
import { getExistingUser } from "../../utils/UserUtils";
import LogoutWorkflow from "../../workflows/authentication/LogoutWorkflow";

describe('Logout', () => {

    let existingUser : UserInfo;

    before('Set up global users', function() {
        existingUser = getExistingUser();
    });

    it('Logged-in user should be able to logout', function() {
        LogoutWorkflow.logout(existingUser.getEmail(), existingUser.getPassword());
    });
})