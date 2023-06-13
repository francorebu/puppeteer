const LoginPage = require('../pages/login.page');

describe('Login invalid', () => {
    it('should not login successfully, error appears', async () => {
        const loginPage = new LoginPage(page);
        await loginPage.loginAs('Admin', 'invalidPass');
        const errorMsgDisplayed = await loginPage.isErrorMsgDisplayed();
        expect(errorMsgDisplayed).to.be.true;
    });
})