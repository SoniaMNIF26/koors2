import selectorsLogin from "../../../pageElements/auth/login/login";
class Login {
  visitLogin() {
    cy.visit("https://app.uat.koors.io/uptotestg2/auth/login");
  }
  typeEmail(email) {
    cy.get(selectorsLogin.inputEmail).type(email);
  }
  typePassword(password) {
    cy.get(selectorsLogin.inputPassword).type(password);
  }
  //*static visitLogin() {
  //cy.visit("https://app.uat.koors.io/uptotestg2/auth/login");
  //cy.get(selectorsLogin.inputEmail).type(email);
  //cy.get(selectorsLogin.inputPassword).type(password);
  //}
  connect() {
    cy.get(selectorsLogin.ButtonLogin).click();
  }
  redirectedToHomePage() {
    cy.url().should("eq", "https://app.uat.koors.io/uptotestg2/activity");
  }
  // Without swicth case
  // errorMsg() {
  //   cy.get(selectorsLogin.errorText);
  // };
  // errorPage(errmsg) {
  //   let actualErrMsg = selectorsLogin.errorText;
  //   console.log(actualErrMsg);
  //   cy.get(actualErrMsg).should("contain", errmsg);
  // }

  errorMsg(fields, errmsg) {
    const field = fields.toString();
    let selector;
    switch (true) {
      case field.includes("password"):
        selector = selectorsLogin.errorText;
        break;
      case field.includes("email"):
        selector = selectorsLogin.errorText;
        break;
      default:
        throw new Error("Invalid Field provided");
    }
    cy.get(selector).should('contain', errmsg);
  }
}
export default new Login();

