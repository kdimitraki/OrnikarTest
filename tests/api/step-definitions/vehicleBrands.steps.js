const { When, Then } = require('@cucumber/cucumber');
const api = require('../commands/apiCommands');
const {
  assertNonEmptyArray,
  assertArrayContainsString
} = require('../assertions/commonAssertions');

When('I request vehicle brands', async function () {
  this.response = await api.getVehicleBrands();
});

Then('the response should be a non-empty array', function () {
  assertNonEmptyArray(this.response.data, 'Expected brands response to be a non-empty array');
});

Then('the response should contain the brand {string}', function (expectedBrand) {
  assertArrayContainsString(this.response.data, expectedBrand);
});
