const pptr = require('puppeteer');
const assert = require('assert');

let page;
let browser;

beforeSuite(async function() {
    browser = await pptr.launch({headless: true, slowMo: 50});
    page = await browser.newPage();
});

step("Navigate to github login page <url>", async function(url){
    await page.goto(url);
});

step("Verify page heading to be <heading>", async function(heading){
    await page.waitForSelector('div[class*="form-header"] h1');
    const pageHeading = await page.$eval('div[class*="form-header"] h1', el => el.innerText);
    assert.strictEqual(pageHeading, heading);
});

step("Enter credentials <email> and <password>", async function(email, password) {
    await page.type('input#login_field', email);
    await page.type('input#password', password);
});

step("Click to SignIn", async function(){
    await page.click('input[name="commit"]');
});

step("Verify landing page after signIn", async function() {
    await page.waitForSelector('div#dashboard-repos-container');
});

afterSuite(async function(){
    browser.close();
})