before(async () => {
    global.puppeteer = require('puppeteer');
    global.expect = require('chai').expect;
});
  
beforeEach(async () => {
    global.browser = await puppeteer.launch({ headless: false, args: ['--start-maximized'], slowMo: 100 });
    global.page = await browser.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});
  
afterEach(async () => {
    await browser.close();
});
  