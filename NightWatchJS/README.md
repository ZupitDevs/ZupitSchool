# Nigthwatch

## Links

- https://nightwatchjs.org

- https://nightwatchjs.org/gettingstarted

- https://github.com/hayanisaid/Todo-app-in-Angular.git

## Setup

```
npm init
npm install nightwatch --save-dev
```

### Using with Chrome

```
npm install chromedriver --save-dev
```

### Using with Firefox

```
npm install geckodriver --save-dev
```

## Configuration

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
