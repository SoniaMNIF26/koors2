import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import Logout from "../../../pageObjects/pageActions/auth/logout/logout"
 
// Given(/^I am on the director login page/,() => {
// Logout.visitLoginForLogout();
    
// });
// When (/^I enter the qa+uptotestg2@koors.io and I enter the 123456789SF/,() => {
//     Logout.typeEmailForLogout();
//     Logout.typePasswordForLogout();
//     Logout.connectForLogout();
// });
When (/^I click on the toolbar and on deconnect from the app/,() => {
    Logout.deconnect();   
});
Then (/^I am redirected to authentication/,() => {
    Logout.redirectedToAuth(

    );
    
});