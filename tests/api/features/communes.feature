Feature: Communes API

  As a consumer of the Ornikar insurance API
  I want to retrieve communes by zip code
  So that address information can be proposed to the user

  Scenario: Retrieve communes from a valid zip code
    Given a zip code "75001"
    When I request communes by zip code
    Then the API response status should be 200
    And the communes response should not be empty
