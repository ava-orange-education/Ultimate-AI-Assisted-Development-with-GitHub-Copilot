# Prompt: Generate functional test cases for the gmail login feature using Gherkin syntax with Given-When-Then

Feature: Gmail Login

  Scenario: Successful login with Gmail
    Given the user has a valid Gmail account
    When the user navigates to the Gmail login page
    And the user enters a valid Gmail email address
    And the user clicks "Next"
    And the user enters a valid Gmail password
    And the user clicks "Next"
    Then the user is successfully logged in
    And the user is redirected to the Gmail inbox

  Scenario: Login with invalid Gmail account
    Given the user does not have a valid Gmail account
    When the user navigates to the Gmail login page
    And the user enters an invalid Gmail email address
    And the user clicks "Next"
    Then an error message is displayed indicating the account does not exist

  Scenario: Login with incorrect password
    Given the user has a valid Gmail account
    When the user navigates to the Gmail login page
    And the user enters a valid Gmail email address
    And the user clicks "Next"
    And the user enters an incorrect Gmail password
    And the user clicks "Next"
    Then an error message is displayed indicating the password is incorrect

  Scenario: Login cancellation
    Given the user is on the Gmail login page
    When the user navigates to the Gmail login page
    And the user clicks "Forgot email?" link
    And the user clicks "Back" button
    Then the user is redirected back to the Gmail login page

  Scenario: Login with already logged-in Gmail account
    Given the user is already logged into their Gmail account
    When the user navigates to the Gmail login page
    Then the user is automatically logged in
    And the user is redirected to the Gmail inbox

  Scenario: Error message for network issues
    Given the user is on the Gmail login page
    When the user navigates to the Gmail login page
    And the user disconnects from the internet
    And the user enters a valid Gmail email address
    And the user clicks "Next"
    Then an error message is displayed indicating network issues

  Scenario: "Stay signed in" functionality
    Given the user has a valid Gmail account
    When the user navigates to the Gmail login page
    And the user enters a valid Gmail email address
    And the user clicks "Next"
    And the user enters a valid Gmail password
    And the user checks "Stay signed in" option
    And the user clicks "Next"
    And the user closes and reopens the browser
    Then the user is still logged in when the browser is reopened

