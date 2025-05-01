# Prompt: Generate Gherkin scenario for Gmail login

Feature: Gmail Login

  Scenario: Successful login with valid credentials
    Given I am on the Gmail login page
    When I enter a valid email and password
    And I click the login button
    Then I should be redirected to my Inbox

  Scenario: Login with invalid password
    Given I am on the Gmail login page
    When I enter a valid email and an incorrect password
    And I click the login button
    Then I should see an error message
