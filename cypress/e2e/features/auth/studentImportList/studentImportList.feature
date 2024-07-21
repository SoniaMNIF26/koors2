Feature: director Importing a list of students

  Background:
    Given I am on the director login page
    When I type email and I type password
    When I click on "Etudiant" and I click on "Ajouter un etudiant"
    

  Scenario: download the template
    When I click on importer une liste
    And I click on download a template
    Then Check the file is correctly downloaded

  # Scenario: import a valid list of student
  #   When I click on importer une liste
  #   And I click Selectionner un fichier
  #   And I click on the chekbox
  #   And I click on continuer
  #   Then check that the invitation is correctly imported
  #   And click on envoyer les invitations
  #   And click on envoyer et continuer
  #   Then a messsage 1 inviation envoyées is dispalyed

  # Scenario: import an empty  list of student
  #   When I click on importer une liste
  #   And I select an empty file
  #   And I click on the chekbox
  #   And I click on continuer
  #   And click on envoyer les invitations
  #   And click on envoyer et continuer
  #   And a messsage 0 inviation envoyées is dispalyed

  # Scenario: import a wrong  file
  #   When I click on importer une liste
  #   And I select a wrong file
  #   And I click on the chekbox
  #   And I click on continuer
  #   And click on envoyer les invitations
  #   And click on envoyer et continuer
  #   And a messsage 0 inviation envoyées is dispalyed

  Scenario: import an invalid list of student
    When I click on importer une liste
    And I select an invalid list of student
    And I click on the chekbox
    And I click on continuer
    Then check that a message indicates that there is errors
    And click on envoyer les invitations
    Then A pop up with error message is displayed

  Scenario: import a file with the wrong extention list of student
    When I click on importer une liste
    And I select a file with an extention different from xls and xlsx
    Then A pop up with error message Vous devez ajouter votre fichier Excel is displayed

  Scenario: import a student without adding a file
    When I click on importer une liste
    And I click on the chekbox
    And I click on continuer
    Then An error message Vous devez ajouter votre fichier Excel is displayed

  Scenario: import a student without clicking on the chekbox
    When I click on importer une liste
    And I click Selectionner un fichier
    And I click on continuer
    Then the text associated to the chekbox becomes red

  Scenario: Update the list of student
    When I click on importer une liste
    And I click Selectionner un fichier
    And I click on remplacer
    Then the button select a file apprears again

  # Scenario: Displaying only data with errors
  #   When I click on importer une liste
  #   And I Select a file with valid and Invalid Student
  #   And I click on the chekbox
  #   And I click on continuer
  #   And I click on Afficher les messages avec des erreurs
  #   Then The tab displayes only data with errors
# Scenario: Cancel invitaion using x
# When I click on importer une liste
#     And I Select a file with valid and Invalid Student
#     And I click on the chekbox
#     And I click on X
#     Then the list of students is displayed
# Scenario: Cancel invitation by clicking on cancel 
# When I click on importer une liste
#     And I Select a file with valid and Invalid Student
#     And I click on the chekbox
#     And I click on cancel
#     Then the list of students is displayed