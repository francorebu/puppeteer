class TopBarPage {
    
    constructor(page) {
      this.page = page;
      this.dropDownName = '.oxd-userdropdown-name';
    }

    async isSuccessAlertDisplayed(){
        try{
            await this.page.waitForSelector(this.dropDownName, { visible: true})
              return true;
        }catch (error) {
            return false;
        }        
    }
  
  }
  
  module.exports = TopBarPage;