import AuthenticationWorkflow from "../../workflows/AuthenticationWorkflow";


describe('Login', () => {

    it('login successfully with valid credentials', function() {
        AuthenticationWorkflow.loginWithValidCredentials('wl-manual@test.com', 'wishlist');
    });

})