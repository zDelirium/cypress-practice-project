import { getExistingUser } from "../../utils/UserUtils";
import AuthenticationWorkflow from "../../workflows/AuthenticationWorkflow";

describe('Logout', () => {

    let existingUser;

    before('Set up global users', function() {
        existingUser = getExistingUser();
    });

    it('Logged-in user should be able to logout', function() {
        AuthenticationWorkflow.logout(existingUser.getEmail(), existingUser.getPassword());
    });
})