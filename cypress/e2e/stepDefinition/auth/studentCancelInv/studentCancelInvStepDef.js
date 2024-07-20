import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import CancelInvStudent  from "../../../pageObjects/pageActions/auth/studentCancelInv/studentCancelInv";

And (/^I click on "Annuler"/,()=> {
    CancelInvStudent.clickAnnuler();
});

Then (/^the popup disappears and I am redirected to the initial page/,()=> {
    CancelInvStudent.verifAnnuler()
   
});
When (/^I click on etudiant/,()=> {
    CancelInvStudent.clickEtudiant();
});
And (/^I look for a student/,()=> {
    CancelInvStudent.lookForStudent();
});
And (/^I cancel the invitation/,()=> {
    CancelInvStudent.cancelInvitation();
});
Then (/^the student is no longer on the list of student/,()=> {
   
});
