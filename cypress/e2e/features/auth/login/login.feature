Feature: director Login with valid and invalid credentials

  # Scenario: director Login with valid credentials
  #   Given I am on the director login page interface
  #   When I type email and I type password
  #   Then I am on Activity page interface
#test

  # First Method
  # Scenario Outline: director Login with invalid credentials
  #   Given I am on the director login page
  #   When I enter the <email> and I enter the <password>
  #   Then Under the field I should see the <errmsg>
  #   Examples:
  #     | email                  | password    | errmsg                                           |
  #     | qa+uptotestg2@koors.io | test        | E-mail ou mot de passe incorrecte                |
  #     | qa+uptotestg2@koors.i  | 123456789SF | Le login et le mot de passe ne correspondent pas |
  #     | qa+uptotestg2@koors.i  |  123456789S | Le login et le mot de passe ne correspondent pas |
  #     | qa+uptotestg2@koors.io | {backspace} | E-mail ou mot de passe incorrecte                |
  #     | {backspace}            | 123456789SF | E-mail ou mot de passe incorrecte                |
  #     | {backspace}            | {backspace} | E-mail ou mot de passe incorrecte                |
# Version switchcase and field

  Scenario Outline: director Login with invalid credentials
  Given I am on the director login page interface
  When I enter the following <email> and I enter the <password>
  Then Under the following <fields> I should see the <errmsg>

  Examples:
    | email                  | password    | fields   | errmsg                                           |
    | qa+uptotestg2@koors.io | test        | password | E-mail ou mot de passe incorrecte                |
    | qa+uptotestg2@koors.i  | 123456789SF | email    | Le login et le mot de passe ne correspondent pas |
    | qa+uptotestg2@koors.io | {backspace} | password | E-mail ou mot de passe incorrecte                |
    | {backspace}            | 123456789SF | email    | E-mail ou mot de passe incorrecte                |
    | {backspace}            | {backspace} | email    | E-mail ou mot de passe incorrecte                |
