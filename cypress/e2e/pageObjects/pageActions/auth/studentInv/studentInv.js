import selectorsStudentInv from "../../../pageElements/auth/studentInv/studentInv";

class Student {
  navigateToStudent(){
    cy.wait(4000);
    cy.visit("https://app.uat.koors.io/uptotestg2/students/all");
  };
  clickAddStudent(){
    //cy.get(selectorsStudentInv.etudiant).click({force: true});
    cy.get(selectorsStudentInv.ajouterUnEtudiant).click();
  };
 

  studentData(lastName,firstName) {

    const email = randomEmail();
    cy.get(selectorsStudentInv.nomEtudiant).type(lastName);
    cy.get(selectorsStudentInv.prenomEtudiant).type(firstName);
    cy.get(selectorsStudentInv.emailEtudiant).type(email);
    
    
  };
  studentDataInvalid(nomEtu,PrenomEtu,emailEtu) {
    if (nomEtu)
    cy.get(selectorsStudentInv.nomEtudiant).type(nomEtu);
    if (PrenomEtu)
    cy.get(selectorsStudentInv.prenomEtudiant).type(PrenomEtu);
    if (emailEtu)
    cy.get(selectorsStudentInv.emailEtudiant).type(emailEtu);
  };
  studentDataEmpty(nomEtu1,PrenomEtu1,emailEtu1) {
    if (nomEtu1)
    cy.get(selectorsStudentInv.nomEtudiant).type(nomEtu1);
    if (PrenomEtu1)
    cy.get(selectorsStudentInv.prenomEtudiant).type(PrenomEtu1);
    if (emailEtu1)
    cy.get(selectorsStudentInv.emailEtudiant).type(emailEtu1);
  };

  clickInviter(){
    cy.get(selectorsStudentInv.inviter).click();
  };
  //valid data assertion
  popUpVerif(){

    cy.get(selectorsStudentInv.popUp).should('contain',"Retour");
  };
  //invalid data assertion 
  errMsgVerif(errorMsgStd){

    cy.get(selectorsStudentInv.messageErrStudent).should('contain',errorMsgStd);
  };
  //missing data assertion 
  verifInviterDisabled(){

    cy.get(selectorsStudentInv.inviter).should('be.disabled');
  };

}
export default new Student();
function randomEmail(){
  var random =Math.random().toString(36).substring(2,5)
  var emailgenerated= "qa"+ random+"@koors.io";
  return emailgenerated;
  };




  // a verifier ou supprimer
  //   clickAnnuler(){
//     cy.get(selectorsStudentInv.annuler).click();
//   };
//   verifAnnuler(){
//     cy.get(selectorsStudentInv.etudiantTab).should('contain',"Étudiants");
//   };
// clickEtudiant(){
// cy.get(selectorsStudentInv.etudiant).click({force: true});
// };
// lookForStudent(){
// cy.get(selectorsStudentInv.searchfield).type("Test1");
// cy.get(selectorsStudentInv.searchicon).click();
// };
// cancelInvitation(){
//     cy.get(selectorsStudentInv.foundStudentName).click();
//     // cy.get(selectorsStudentInv.enAttente).click();
//     cy.get(selectorsStudentInv.annulerInvitation).click();
//     };

// verifCancellation(){
//   cy.get(selectorsStudentInv.etudiant).click({force: true});
//   cy.get(selectorsStudentInv.searchfield).type("Test1");
//   cy.get(selectorsStudentInv.searchicon).click();
//   cy.get(selectorsStudentInv.etudiantTab).should('contain',"aucun");

// };


