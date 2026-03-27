const { Given, When, Then } = require('@cucumber/cucumber');
const api = require('../commands/apiCommands');
const { assertNonEmptyArray } = require('../assertions/commonAssertions');

Given('a zip code {string}', function (zipCode) {
  this.zipCode = zipCode;
});

When('I request communes by zip code', async function () {
  this.response = await api.getCommunes(this.zipCode);
});

Then('the communes response should not be empty', function () {
  assertNonEmptyArray(this.response.data, 'Expected communes response to be a non-empty array');
});
