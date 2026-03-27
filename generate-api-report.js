const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'tests_output/api',
  reportPath: 'tests_output/api/html-report',

  metadata: {
    browser: {
      name: 'API tests',
      version: 'N/A'
    },
    device: 'Local machine',
    platform: {
      name: process.platform,
      version: process.version
    }
  },

  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Ornikar API Tests' },
      { label: 'Execution Time', value: new Date().toLocaleString() }
    ]
  }
});