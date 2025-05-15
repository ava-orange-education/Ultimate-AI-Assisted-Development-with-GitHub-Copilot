# Prompt: Define acceptance criteria for login feature in Gherkin

Feature: User Login

  Scenario: Valid user login
    Given I am on the login page
    When I enter valid credentials
    Then I should be redirected to the dashboard

  Scenario: Invalid login
    Given I am on the login page
    When I enter incorrect credentials
    Then I should see an error message
