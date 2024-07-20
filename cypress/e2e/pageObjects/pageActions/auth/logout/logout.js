import selectorsLogout from "../../../pageElements/auth/logout/logout"
class Logout{
    visitLoginForLogout() {
        cy.visit("https://app.uat.koors.io/uptotestg2/auth/login");
      };
      typeEmailForLogout() {
        cy.get(selectorsLogout.inputEmail).type("qa+uptotestg2@koors.io");
      };
      typePasswordForLogout() {
        cy.get(selectorsLogout.inputPassword).type("123456789SF");
      };
      connectForLogout() {
        cy.get(selectorsLogout.ButtonLogin).click();
      };
      deconnect(){
        cy.viewport(550, 720);
        cy.get(selectorsLogout.toolbar).click({ force: true });
        cy.get(selectorsLogout.deconnexionBtn).scrollIntoView().should('be.visible').click();
      };
    redirectedToAuth(){
     cy.get(selectorsLogout.bienvenue).should('contain',"Bienvenue");
     
        
     };
};
export default new Logout();
