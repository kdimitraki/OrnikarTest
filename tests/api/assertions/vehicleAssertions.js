const { hasKeys } = require('../helpers/responseHelpers');

function assertVehicleSpecificationData(data) {
  if (!data || !data.specifications) {
    throw new Error('Expected response to contain a specifications object');
  }

  const requiredFields = ['brand', 'model', 'taxHorsepower', 'energy'];

  if (!hasKeys(data.specifications, requiredFields)) {
    throw new Error(
      `Expected specifications to contain all fields: ${requiredFields.join(', ')}`
    );
  }
}

module.exports = {
  assertVehicleSpecificationData
};
