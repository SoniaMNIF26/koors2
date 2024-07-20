Feature: director cancelling invitation

  Background:
    Given I am on the director login page
    When I type email and I type password
   

  Scenario: director cancelling invitation scenario 1
    When I click on "Etudiant" and I click on "Ajouter un etudiant"
    And I enter Mnif, Sonia
    And I click on "Annuler"
    Then the popup disappears and I am redirected to the initial page

  # Scenario: director cancelling his invitaion scenario 2
  #   When I click on etudiant
  #   And I look for a student
  #   And I cancel the invitation
  #   Then the student is no longer on the list of student 
