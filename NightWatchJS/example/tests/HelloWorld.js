module.exports = {
    'Google Search' : function (browser) {
        browser
            .url('https://www.google.com')
            .waitForElementVisible('input[name="q"]', 4000)
            .setValue('input[name="q"]', 'hello world')
            .keys(browser.Keys.ENTER)
            .waitForElementVisible('#resultStats', 4000)
            .assert.urlContains('q=hello+world')
            .end();
    }
};
