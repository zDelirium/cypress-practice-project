import { existingUser } from "../../utils/UserUtils";
import AuthenticationWorkflow from "../../workflows/AuthenticationWorkflow";

describe('Logout', () => {

    it('Logged-in user should be able to logout', function() {
        AuthenticationWorkflow.logout(existingUser.getEmail(), existingUser.getPassword());
    });
})