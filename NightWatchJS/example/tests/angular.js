module.exports = {
    'Test Angular Page - Page initial state': function (client) {
        client.url('http://localhost:4200');

        client.expect.element('input[name="todo"]').to.be.present;
        client.expect.element('ul[class="list-unstyled"]').to.be.present;
        client.expect.element('li').to.not.be.present;
    },

    'Test Angular Page - Add TODO': function (client) {
        client
            .waitForElementVisible('input[name="todo"]')
            .clearValue('input[name="todo"]')
            .setValue('input[name="todo"]', 'Hello World')
            .click('form i')
            .pause(500);

        client.expect.element('li').to.be.present;
        client.expect.element('li').text.to.contain('Hello World');
    },

    'Test Angular Page - Delete TODO': function (client) {
        client.expect.element('li').to.be.present;

        client
            .useXpath()
            .click('//li//i')
            .pause(500);

        client.useCss();
        client.expect.element('li').to.not.be.present;
    }


};
