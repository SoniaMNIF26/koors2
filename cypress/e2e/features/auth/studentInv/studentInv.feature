Feature: director inviting student

  Background:
    Given I am on the director login page
    When I type email and I type password

  Scenario: director inviting student using valid credentials
    When I click on "Etudiant" and I click on "Ajouter un etudiant"
    And I enter Mnif, Sonia
    And I click on "inviter"
    Then A popup appears

  Scenario Outline: director inviting student using invalid credentials
    When I click on "Etudiant" and I click on "Ajouter un etudiant"
    And I enter <nomEtu>  <PrenomEtu> <emailEtu>
    Then An error message appears <errorMsgStd>

    Examples:
      | nomEtu | PrenomEtu | emailEtu       | errorMsgStd          |
      | test   | test      | test@test.test | L'email déja existe  |
      | test   | test      | test           | L'email est invalide |

  Scenario Outline: director inviting student using missing credentials
    When I click on "Etudiant" and I click on "Ajouter un etudiant"
    And I enter the <nomEtu1>  <PrenomEtu1> <emailEtu1>
    Then the button inviter is disabled

    Examples:
      | nomEtu1 | PrenomEtu1 | emailEtu1      |
      | test    |            | test           |
      | test    | test       |                |
      |         | test       | test@test.test |
