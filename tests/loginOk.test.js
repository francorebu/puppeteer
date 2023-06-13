const LoginPage = require('../pages/login.page');
const TopBarPage  = require('../pages/topbar.page');

describe('Login successfully', () => {
    it('should login successfully', async () => {
      const loginPage = new LoginPage(page);
      const topBarPage = new TopBarPage(page);
      await loginPage.loginAs('Admin', 'admin123');
      const isAlertDisplayed = await topBarPage.isSuccessAlertDisplayed();
      expect(isAlertDisplayed).to.be.true;
    });
  });
