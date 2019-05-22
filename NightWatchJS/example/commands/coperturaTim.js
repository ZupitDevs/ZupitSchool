
exports.command = function(comune, indirizzo, civico) {
    this
        .url('https://www.tim.it/verifica-copertura#/')
        .waitForElementVisible('a#li_verifica_fisso', 5000)
        .click('a#li_verifica_fisso')

        .waitForElementVisible('input[formcontrolname="comune"]')
        .setValue('input[formcontrolname="comune"]', comune)

        .pause(1000)
        .sendKeys('input[formcontrolname="comune"]', this.Keys.ENTER)

        .waitForElementVisible('input[formcontrolname="indirizzo"]')
        .setValue('input[formcontrolname="indirizzo"]', indirizzo)
        .pause(1000)
        .sendKeys('input[formcontrolname="indirizzo"]', this.Keys.ENTER)

        .waitForElementVisible('input[formcontrolname="civico"]')
        .pause(1000)
        .setValue('input[formcontrolname="civico"]', civico)
        .pause(1000)
        .sendKeys('input[formcontrolname="civico"]', this.Keys.ENTER)
        .click('button[adform="VERIFICADISPONIBILITA"]')

        .useXpath()
        .expect.element('//app-conferma-embedded//h5[@class = "flusso-vc-window-subtitle"]').text.to.contain('FTTH');
};
