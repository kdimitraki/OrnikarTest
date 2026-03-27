Feature: Vehicle brands API

  As a consumer of the Ornikar insurance API
  I want to retrieve available vehicle brands
  So that users can select a brand from a list

  Scenario: Retrieve the list of vehicle brands
    When I request vehicle brands
    Then the API response status should be 200
    And the response should be a non-empty array
    And the response should contain the brand "RENAULT"
