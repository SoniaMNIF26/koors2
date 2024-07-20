import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Login from "../../../pageObjects/pageActions/auth/login/login";
import Student from "../../../pageObjects/pageActions/auth/studentInv/studentInv";

Given(/^I am on the director login page/, () => {
Login.visitLogin();
});

When(/^I click on "Etudiant" and I click on "Ajouter un etudiant"/, () => {
  Student.navigateToStudent();
  cy.contains('button', 'Ajouter un étudiant').click();
});
//Valid data secénario
And(/^I enter (.*), (.*)/, (lastName,firstName) => {
  Student.studentData(lastName,firstName);
});

And(/^I click on "inviter"/, () => {
  Student.clickInviter();
});

Then(/^A popup appears/, () => {
  Student.popUpVerif();
});

//Action for missing data scenario outline 1
And(/^I enter (.*)  (.*) (.*)/, (nomEtu, PrenomEtu, emailEtu) => {
  Student.studentDataInvalid(nomEtu, PrenomEtu, emailEtu);
});

Then(/^An error message appears (.*)/, (errorMsgStd) => {
  Student.errMsgVerif(errorMsgStd);
});

//Action for missing data scenario outline 2
And(/^I enter the (.*)  (.*) (.*)/, (nomEtu1, PrenomEtu1, emailEtu1) => {
  Student.studentDataEmpty(nomEtu1, PrenomEtu1, emailEtu1);
});
Then (/^the button inviter is disabled/, () => {
  Student.verifInviterDisabled();
});

