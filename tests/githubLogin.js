const pptr = require('puppeteer');
const assert = require('assert');
const pageObject = require('../pages/loginPage');
require('dotenv').config();

let page;
let browser;

beforeSuite(async function() {
    browser = await pptr.launch({headless:true});
    page = await browser.newPage();
});

step("Navigate to github login page", async function(){
    await page.goto(process.env.URL);
});

step("Verify page heading to be <heading>", async function(heading){
    await page.waitForSelector(pageObject.loginHeading);
    const pageHeading = await page.$eval(pageObject.loginHeading, el => el.innerText);
    assert.strictEqual(pageHeading, heading);
});

step("Enter user account creadentials", async function() {
    await page.type(pageObject.emailInput, process.env.EMAIL);
    await page.type(pageObject.passwordInput, process.env.PASSWORD);
});

step("Click to SignIn", async function(){
    await page.click(pageObject.signInButton);
});

// step("Verify landing page after signIn", async function() {
//     await page.waitForSelector('div#dashboard-repos-container');
// });

afterSuite(async function(){
    browser.close();
})
