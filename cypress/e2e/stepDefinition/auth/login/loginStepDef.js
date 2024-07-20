import {Given, When , Then , And} from "cypress-cucumber-preprocessor/steps";
import Login from '../../../pageObjects/pageActions/auth/login/login';

Given (/^I am on the director login page interface/,() => {
    Login.visitLogin();


});
// Scenario: director Login with valid credentials

When (/^I type email and I type password/,() => {
    Login.typeEmail("qa+uptotestg2@koors.io");
    Login.typePassword("123456789SF");
    Login.connect()
});

Then (/^I am on Activity page interface/ ,() => {
    Login.redirectedToHomePage();

});
// Scenario Outline: director Login with invalid credentials

// Then (/^Under the field I should see the (.*)/,(errmsg) => {
//     Login.errorPage(errmsg);
// });

When (/^I enter the following (.*) and I enter the (.*)/,(email,password) => {
    
    Login.typeEmail(email);
    Login.typePassword(password);
    Login.connect()
    

});
Then (/^Under the following (.*) I should see the (.*)/,(fields,errmsg) => {
    Login.errorMsg(fields,errmsg);
});
