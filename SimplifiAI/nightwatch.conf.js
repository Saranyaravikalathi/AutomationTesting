//
// Refer to the online docs for more details:
// https://nightwatchjs.org/guide/configuration/nightwatch-configuration-file.html
//
//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/
//

module.exports = {
  src_folders: ['C:/Users/testuser/AutomationTesting'], 
  page_objects_path: ['node_modules/nightwatch/examples/pages/'],
  custom_commands_path: ['node_modules/nightwatch/examples/custom-commands/'],
  plugins: ['@nightwatch/apitesting'],
  output_folder:'testsreports',
  globals_path: 'C:/Users/testuser/AutomationTesting/global.js',

  // reporter: 'mochawesome',
  // reporterOptions: {
  //   reportFilename: 'test-report',
  //   reportDir: 'reports',
  //   overwrite: false,
  //   html: true,
  //   json: true,
  //   code: false
  // },

  webdriver: {},

  test_workers: {
    enabled: true
  },

  test_suites: {
    ordersuite: [
      "C:/Users/Ajayan/NightWatch/nightwatch/Block_Flows/BLOCK_za/Block-flow1.js",
      "C:/Users/Ajayan/NightWatch/nightwatch/Block_Flows/BLOCK_za/Block_flow2.js"
    ]
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'https://nightwatchjs.org',
      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage'],
        },
      },
      webdriver: {
        start_process: true,
        server_path: ''
      },

      // ✅ Added Nightwatch HTML Reporter Configuration
      reporter: "nightwatch-html-report",
      reporterOptions: {
        openBrowser: true,
        reportsDirectory: "testreports",
        reportFilename: "LCP_Test_Report.html",
        themeName: "default",
        reportTitle: "LCP Automation Test Report",
      }
    },

    api_testing: {
      start_session: false,
      webdriver: {
        start_process: false,
        log_responses: true
      },
      globals: {
        environment: 'API Testing'
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        acceptInsecureCerts: true,
        'moz:firefoxOptions': {
          args: []
        }
      },
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: []
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: true,
          args: []
        }
      },
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: []
      }
    },

    edge: {
      desiredCapabilities: {
        browserName: 'MicrosoftEdge',
        'ms:edgeOptions': {
          w3c: true,
          args: []
        }
      },
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: []
      }
    },
  }
};
