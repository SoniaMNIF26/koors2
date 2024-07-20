import selectorsCancelInv from "../../../pageElements/auth/studentCancelInv/studentCancelInv";
class CancelInvStudent {
  clickAnnuler() {
    cy.get(selectorsCancelInv.annulerInvitation).click();
  }
  verifAnnuler() {
    cy.get(selectorsCancelInv.etudiantTab).should("contain", "Étudiants");
  }
  clickEtudiant() {
    cy.get(selectorsCancelInv.etudiant).click({ force: true });
  }
  lookForStudent() {
    cy.get(selectorsCancelInv.searchfield).type("Sonia");
    cy.wait(5000);
    cy.get(selectorsCancelInv.searchicon).click();
  }
  cancelInvitation() {
    cy.get(selectorsCancelInv.foundStudentName).click();
    cy.get(selectorsCancelInv.enAttente).click();
    cy.get(selectorsCancelInv.annulerInvitation2).click();
    // cy.contains('button', "Annuler l'invitation").click();
    }
    //     };

    // verifCancellation(){
    //   cy.get(selectorsStudentInv.etudiant).click({force: true});
    //   cy.get(selectorsStudentInv.searchfield).type("Test1");
    //   cy.get(selectorsStudentInv.searchicon).click();
    //   cy.get(selectorsStudentInv.etudiantTab).should('contain',"aucun");

    // };
  }

export default new CancelInvStudent();
