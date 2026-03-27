require('dotenv').config();

module.exports = {
  src_folders: ['tests/e2e/tests'],
  page_objects_path: ['tests/e2e/page-objects'],
  custom_commands_path: ['tests/e2e/commands'],
  output_folder: 'tests_output',

  webdriver: {
    start_process: true,
    server_path: require('chromedriver').path,
    port: 9515
  },

  test_settings: {
    default: {
      launch_url: process.env.UI_BASE_URL,
      screenshots: {
        enabled: true,
        path: 'tests_output/screenshots',
        on_failure: true,
        on_error: true
      },
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: ['--start-maximized', '--no-sandbox', '--disable-dev-shm-usage']
        }
      }
    },

    chrome: {
      launch_url: process.env.UI_BASE_URL,
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: ['--start-maximized', '--no-sandbox', '--disable-dev-shm-usage']
        }
      }
    },

    chrome_headless: {
      launch_url: process.env.UI_BASE_URL,
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: ['--headless=new', '--window-size=1440,900', '--no-sandbox', '--disable-dev-shm-usage']
        }
      }
    },

    reporter: function (results, done) {
      const reporter = require('nightwatch-html-reporter');

      reporter.fn(results, done, {
        reportsDirectory: 'tests_output/reports',
        reportFilename: 'report.html',
        openBrowser: true
      });
    }
  }
};