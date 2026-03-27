@smoke
Feature: Vehicle suggestions API

  As a consumer of the Ornikar insurance API
  I want to retrieve vehicle specifications from a license plate
  So that the frontend can prefill vehicle information

  Scenario: Retrieve vehicle information from a valid license plate
    Given a valid license plate
    When I request vehicle suggestions
    Then the API response status should be 200
    And the response type should be "SUCCESS"
    And the response should contain vehicle specification data

  Scenario: Retrieve vehicle information with an invalid license plate
    Given an invalid license plate
    When I request vehicle suggestions
    Then the API response status should be 200
    And the response type should be "ERROR"