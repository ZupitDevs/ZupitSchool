# Nigthwatch

Tutorial su installazione e configurazione basilare di NightWatchJS,
con progetto di esempio

## Link

- https://nightwatchjs.org

- https://nightwatchjs.org/gettingstarted

- https://github.com/hayanisaid/Todo-app-in-Angular.git

## Setup

Creiamo una nuova cartella nella quale andremo ad inizializzare il
nostro progetto:

```
npm init
# Follow the instructions..

npm install nightwatch --save-dev
```

### Installazione WebDrivers

E' possibile usare NightWatch con vari browser: Chrome, Firefox,
Safari ed Edge.

Questo tutorial utilizza unicamente Chrome e Firefox per questioni di
compaatibilita' di OS.

#### Installazione WebDriver Chrome

Installazione del webdriver per Chrome. Richiede una installazione
gia' presente di Chrome, compatibile con la versione del WebDriver.

```
npm install chromedriver --save-dev
```

#### Installazione WebDriver Firefox

Installazione del webdriver per Firefox: gecko.

Richiede una installazione gia' presente di Firefox, compatibile con
la versione del WebDriver.

```
npm install geckodriver --save-dev
```

## Configurazione

Qui un esempio di configurazione in formato JSON.

Il file deve chiamarsi ```nightwatch.conf```e deve essere nella root
del progetto.

E' anche possibile utilizzare un file di configurazione in
Javascript. Il nome del file in questo caso deve essere
```nightwatch.conf.js```

Nel progetto di esempio si trova un file di configurazione piu' completo, in JS.

```
{
  "src_folders" : ["tests"],

  "webdriver" : {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver",
    "port": 9515
  },

  "test_settings" : {
    "default" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }
}
```

## Layout progetto

Il progetto va strutturato come segue:

```
├── commands
│   └── [command_name].js
├── globals
│   └── global.js
├── nightwatch.conf.js
├── package-lock.json
├── package.json
└── tests
```

- ```commands```: Contiene la definizione dei comandi personalizzati,
  poi utilizzabili nei test. Il nome del comando e' dato dal nome del
  file.

- ```globals```: Qui e' possibile definire variabili e funzioni
  globali, come ad esempio eseguire del codice prima e dopo ogni test
  (e.g. fare partire un server web)

- ```tests```: Contiene i test da eseguire

## Possibili approfondimenti

### DRY - Page Objects

Utilizzare le Page Objects di Nightwatch permette di wrappare pagine o
frammenti di pagine in oggetti JS riutilizzabili

Esempio:

**google.js**:

```
module.exports = {
  url: 'https://google.com',
  elements: {
    searchBar: {
      selector: 'input[type=text]'
    },
    submit: {
      selector: '//[@name="q"]',
      locateStrategy: 'xpath'
    }
  }
};
```

Nel test:

```
module.exports = {
  'Test': function (browser) {
    var google = browser.page.google();

    google.navigate()
      .assert.title('Google')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'nightwatch')
      .click('@submit');

    browser.end();
  }
};
```


- https://nightwatchjs.org/guide#working-with-page-objects
