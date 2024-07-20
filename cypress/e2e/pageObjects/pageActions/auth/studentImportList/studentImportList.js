import selectorsImportList from "../../../pageElements/auth/studentImportList/studentImportList";

class StudentImportList {
  clickImportList() {
    cy.get(selectorsImportList.importList).click();
  }

  //Selecting files steps 

  clickSelectFile() {
    // cy.get(selectorsImportList.selectFileBTN).selectFile(
      // "C:\\Users\\LenovoPC-S\\Desktop\\Templates\\Student1.xlsx",
      // { force: true });
      cy.wait(5000);
      cy.get('input[type="file"]').attachFile('Student1.xlsx');
      cy.wait(5000);
  }
  clickSelectFileEmty() {
    // cy.get(selectorsImportList.selectFileBTN).selectFile(
    //   "C:\\Users\\LenovoPC-S\\Desktop\\Templates\\Empty file.xlsx",
    //   { force: true });
      cy.get('input[type="file"]').attachFile('Empty file.xlsx');
      
  }
  clickSelectFileWrong() {
    // cy.get(selectorsImportList.selectFileBTN).selectFile(
    //   "C:\\Users\\LenovoPC-S\\Desktop\\Templates\\Wrong format.xlsx",
    //   { force: true }
    // );
    
    cy.get('input[type="file"]').attachFile('Wrong format.xlsx');
    
  }
  clickSelectInvalidStudent() {
    // cy.get(selectorsImportList.selectFileBTN).selectFile(
    //   "C:\\Users\\LenovoPC-S\\Desktop\\Templates\\invalid.xlsx",
    //   { force: true }
    // );
    cy.get('input[type="file"]').attachFile('invalid.xlsx');
    
  }
  
  clickSelectWrongExtenstion(){
    cy.get('input[type="file"]').attachFile('Capture.PNG');
    
  }
  clickSelectFileValidAndInvalid(){
  cy.get('input[type="file"]').attachFile('valid+invalid.xlsx');
    
  }
  clickDisplayErrors(){
    cy.get(selectorsImportList.dispalyErrors).click();
  }
  clickCheckBox() {
    cy.get(selectorsImportList.chekbox).click();
  }
  clickContinuer() {
    cy.get(selectorsImportList.continuerBTN).click();
  }
  checkImportListMsgValid() {
    cy.get(selectorsImportList.importationMsg).should(
      'contain',
      'réussie'
    );
  }
  checkImportListMsgInValid() {
    cy.get(selectorsImportList.importationMsgFail).should(
      'contain',
      'erreur'
    );
  }
  checkErrorPopUp(){
    cy.get(selectorsImportList.errorPoPup).should(
      'contain',
      'Erreur'
    );
  }
  clickSendInvitation() {
    cy.get(selectorsImportList.sendInvitBTN).click();
  }
  clickSendInvitationAndContinueBTN() {
    cy.get(selectorsImportList.sendAndContinueBTN).click();
  }
  //Assertions
  checkMissingFileErrorMsg() {
    cy.get(selectorsImportList.MissingFileErrorMsg).should(
      "eq",
      "Vous devez ajouter votre fichier Excel."
    );
  }
  checkMissingChekbox() {
    cy.get(selectorsImportList.checkboxText).should('not.have.css','-webkit-text-fill-color','rgb(208, 25, 71)');
;
  }
  
  checkEmptyFile() {
    cy.get(selectorsImportList.invitaionEnvoyeMsg).should("contain", "0");
  }
  checkValidFile() {
    cy.get(selectorsImportList.invitaionEnvoyeMsg).should("contain", "1");
  }
  
  checkWrongExtention(){
    cy.get(selectorsImportList.NotExel).should('contain', 'Vous devez ajouter votre fichier Excel');
  }
  

  //Downloading the template
  downloadtemplate() {
    cy.get(selectorsImportList.download).click();
  }
  checkDownloadTemplate() {
    cy.readFile("C:\\Users\\LenovoPC-S\\Desktop\\KOORS_Testing\\cypress\\downloads\\template-fr.4a29aaae.xlsx").should("exist");
  }

  //replacing a file

  clickOnreplace(){
  cy.get(selectorsImportList.replaceBTN).click();
  }
  checkRepalce(){
    cy.get(selectorsImportList.selectBTN).should("contain", "UN FICHIER");
    }
  //table
  checktable(){
    cy.get('w-100 custom-table px-2 tbody tr td').should('have.lenght','4');

    }
  //   //Cancel invitation 
  // cancelwithX(){
  //   cy.get(selectorsImportList.X).click();
  // }
  // cancelwithAnn(){
  //   cy.get(selectorsImportList.cancel).click();
  // }
  // checkCancel(){
  //   cy.get(selectorsImportList.listOfStudent).should("contain", "Étudiants");
  // }
   }


export default new StudentImportList();
