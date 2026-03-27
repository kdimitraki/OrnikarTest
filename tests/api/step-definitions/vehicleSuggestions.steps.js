const { Given, When, Then } = require('@cucumber/cucumber');
const api = require('../commands/apiCommands');
const { assertResponseType } = require('../assertions/commonAssertions');
const { assertVehicleSpecificationData } = require('../assertions/vehicleAssertions');
const testData = require('../fixtures/testData');

Given('a valid license plate', function () {
  this.licensePlate = testData.validLicensePlate;
});

Given('an invalid license plate', function () {
  this.licensePlate = testData.invalidLicensePlate;
});

When('I request vehicle suggestions', async function () {
  this.response = await api.getVehicleSuggestions(this.licensePlate);
});

Then('the response type should be {string}', function (expectedType) {
  assertResponseType(this.response.data, expectedType);
});

Then('the response should contain vehicle specification data', function () {
  assertVehicleSpecificationData(this.response.data);
});
