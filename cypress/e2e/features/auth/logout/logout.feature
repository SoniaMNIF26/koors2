Feature: director Logout
Background:
Given I am on the director login page interface
When I type email and I type password

  Scenario: director Loging out

    When I click on the toolbar and on deconnect from the app
    Then I am redirected to authentication
    #testtt