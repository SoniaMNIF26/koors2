import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import StudentImportList from "../../../pageObjects/pageActions/auth/studentImportList/studentImportList";
// import d'une liste valide 
When(/^I click on importer une liste/, () => {
  StudentImportList.clickImportList();
});

And(/^I click Selectionner un fichier/, () => {
  StudentImportList.clickSelectFile();
});
And(/^I click on the chekbox/, () => {
  StudentImportList.clickCheckBox();
});
And(/^I click on continuer/, () => {
  StudentImportList.clickContinuer();
});
Then (/^check that the invitation is correctly imported/, () => {
  StudentImportList.checkImportListMsgValid();
});
And(/^click on envoyer les invitations/, () => {
  cy.wait(5000);
  StudentImportList.clickSendInvitation();
});
And (/^click on envoyer et continuer/,() => {
  cy.wait(5000);
  StudentImportList.clickSendInvitationAndContinueBTN();
});
Then (/^a messsage 1 inviation envoyées is dispalyed/ ,() => {
  cy.wait(5000);
  StudentImportList.checkValidFile();
});

//select empty file
And (/^I select an empty file/ ,() => {
  StudentImportList.clickSelectFileEmty();
});
//select wrong file 
And (/^I select a wrong file/ ,() => {
  StudentImportList.clickSelectFileWrong();
  

});
//select an invalid list 
And (/^I select an invalid list of student/ ,() => {
  StudentImportList.clickSelectInvalidStudent();
  
});

// assertion for an empty file and wrong file

And (/^a messsage 0 inviation envoyées is dispalyed/ ,() => {
  StudentImportList.checkEmptyFile();
});
//assertion for invalid list 
Then (/^check that a message indicates that there is errors/,() => {
  StudentImportList.checkImportListMsgInValid();
    
});
Then (/^A pop up with error message is displayed/,() => {
  StudentImportList.checkErrorPopUp();
});
// Import a file with the wrong extention 
And (/^I select a file with an extention different from xls and xlsx/,() => {
  StudentImportList.clickSelectWrongExtenstion();
});
//assertion for importing a file with the wrong extention 
Then (/^A pop up with error message Vous devez ajouter votre fichier Excel is displayed/,() => {
  StudentImportList.checkWrongExtention();
});
//dowloading the template 
And (/^I click on download a template/,() => {
  StudentImportList.downloadtemplate();
});
Then (/^Check the file is correctly downloaded/,() => {
  StudentImportList.checkDownloadTemplate();
});
//assertion when the check box is not checked 
Then (/^the text associated to the chekbox becomes red/,() => {
  StudentImportList.checkMissingChekbox();
});
// assertion when the file is missing 
Then (/^An error message Vous devez ajouter votre fichier Excel is displayed/,() => {
  StudentImportList.checkMissingFileErrorMsg;
});
//repalcing a file 
And (/^I click on remplacer/,() => {
  StudentImportList.clickOnreplace();
}); 
  Then (/^the button select a file apprears again/,() => {
  StudentImportList.checkRepalce();
}); 

//displaying only data with errors scénario

And (/^I Select a file with valid and Invalid Student/,() => {
  StudentImportList.clickSelectFileValidAndInvalid();
}); 
And (/^I click on Afficher les messages avec des erreurs/,() => {
  StudentImportList.clickDisplayErrors();
});

Then (/^The tab displayes only data with errors/,() => {
  StudentImportList.checktable();
}); 
// //cancelling invitation 
// And (/^I click on cancel/,() => {
//   StudentImportList.cancelwithAnn();
// }); 
// And (/^I click on X/,() => {
//   StudentImportList.cancelwithX();
// }); 

// Then (/^the list of students is displayed/,() => {
//   StudentImportList.checkCancel();
// }); 
