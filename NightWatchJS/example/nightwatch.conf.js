var chromedriver = require('chromedriver');
var geckodriver = require('geckodriver');

// Fix annoying warnings
require('events').EventEmitter.defaultMaxListeners = 0;

var config = {
    "src_folders": [
        "./tests"
    ],
    "output_folder": "./reports",
    "disable_colors": false,
    "test_workers": false,
    "webdriver": {
        "start_process": true,
        "host": "localhost",
        "port": 9515
    },
    "test_settings": {
        "default": {
            "globals_path": "globals/lib.js",
            "globals" : {
                "var1": true
            },
            "webdriver": {
                "port": 9515,
                "default_path_prefix": "",
                "server_path": chromedriver.path,
                "cli_args": [
                    "--verbose"
                ]
            },
            "desiredCapabilities": {
                "browserName": "chrome",
                "chromeOptions": {
                    "args": [
                        "window-size=1920,1080",
                        "no-sandbox"
                    ],
                },
                "loggingPrefs": {
                    "driver": "INFO",
                    "server": "OFF",
                    "browser": "INFO"
                }
            },
            "output_folder": false
        },
        "firefox": {
            "webdriver": {
                "default_path_prefix": "",
                "port": 4444,
                "server_path": geckodriver.path,
                "cli_args": [ "--log", "debug" ]
            },
            "desiredCapabilities": {
                "browserName": "firefox",
                "acceptInsecureCerts": true,
                "alwaysMatch": {
                    "moz:firefoxOptions": {
                        "args": [ "--width=1920", "--height=1080"]
                    }
                }
            },
            "output_folder": false
        },

        // Need to run on Jenkins or similar? Use these
        "firefox-headless": {
            "desiredCapabilities": {
                "browserName": "firefox",
                "acceptInsecureCerts": true,
                "alwaysMatch": {
                    "moz:firefoxOptions": {
                        "args": [ "-headless",
                                  "--width=1920",
                                  "--height=1080"]
                    }
                }
            }
        },
        "chrome-headless": {
            "webdriver": {
                "port": 9515,
                "default_path_prefix": "",
                "server_path": chromedriver.path,
                "cli_args": [
                    "--verbose"
                ]
            },
            "desiredCapabilities": {
                "browserName": "chrome",
                "chromeOptions": {
                    "args": [
                        "headless",
                        "window-size=1920,1080",
                        "no-sandbox"
                    ],
                },
                "loggingPrefs": {
                    "driver": "INFO",
                    "server": "OFF",
                    "browser": "INFO"
                }
            }
        }
    }
}

module.exports = config;
