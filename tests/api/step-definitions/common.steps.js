const { Then } = require('@cucumber/cucumber');
const { assertStatus } = require('../assertions/commonAssertions');

Then('the API response status should be {int}', function (expectedStatus) {
  assertStatus(this.response, expectedStatus);
});