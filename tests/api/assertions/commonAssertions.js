const { isNonEmptyArray } = require('../helpers/responseHelpers');

function assertStatus(response, expectedStatus) {
  if (response.status !== expectedStatus) {
    throw new Error(`Expected status ${expectedStatus} but got ${response.status}`);
  }
}

function assertResponseType(data, expectedType) {
  if (!data || data.type !== expectedType) {
    throw new Error(`Expected response type "${expectedType}" but got "${data?.type}"`);
  }
}

function assertNonEmptyArray(data, message = 'Expected a non-empty array') {
  if (!isNonEmptyArray(data)) {
    throw new Error(message);
  }
}

function assertArrayContainsString(data, expectedValue) {
  if (!Array.isArray(data) || !data.includes(expectedValue)) {
    throw new Error(`Expected array to contain "${expectedValue}"`);
  }
}

module.exports = {
  assertStatus,
  assertResponseType,
  assertNonEmptyArray,
  assertArrayContainsString
};
