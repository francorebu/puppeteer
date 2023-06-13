class LoginPage {
    
    constructor(page) {
      this.page = page;
      this.userName = '[name="username"]';
      this.password = '[name="password"]';
      this.loginButton = '[type="submit"]';
      this.errorMessage= 'p[class*="alert"]';
    }

    async loginAs(user, pass) {
        await this.waitForLoginForm();
        await this.enterUserName(user);
        await this.enterPassword(pass);
        await this.clickLoginButton();
      }
  
    async waitForLoginForm() {
      await this.page.waitForSelector(this.loginButton);
    }
  
    async enterUserName(user) {
      await this.page.type(this.userName, user);
    }
  
    async enterPassword(pass) {
      await this.page.type(this.password, pass);
    }
  
    async clickLoginButton() {
      await this.page.click(this.loginButton);
    }

    async isErrorMsgDisplayed(){
        try{
            await this.page.waitForSelector(this.errorMessage, { visible: true})
              return true;
        }catch (error) {
            return false;
        }        
    }
  
  }
  
  module.exports = LoginPage;
  