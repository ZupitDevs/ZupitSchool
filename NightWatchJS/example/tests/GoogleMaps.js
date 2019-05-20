module.exports = {
    'Google maps search' : function (browser) {
        browser
            .url('https://maps.google.com')
            .waitForElementVisible('body', 4000)
            .waitForElementVisible('input[name=q]', 4000)
            .setValue('input[name=q]','Zupit Srl, Trento')
            .keys(browser.Keys.ENTER) }
            ,


    'Google maps ' : function (browser) {
        browser
            .useXpath()
            .pause(1000)
            .waitForElementVisible('//button[contains( @data-value,\'Directions\')]', 8000)
            .click('//button[contains( @data-value,\'Directions\')]')
            .pause(1000)
            .waitForElementVisible('//div[@id="directions-searchbox-0"]//input', 4000)
            .setValue('//div[@id="directions-searchbox-0"]//input','La casa bianca, innsbruck')
            .keys(browser.Keys.ENTER)
            .waitForElementVisible('//div[@id="section-directions-trip-0"]', 4000)
            .click('//div[@id="section-directions-trip-0"]')
            .pause(10000)
            .end();
    }
};