
import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";


Given(/^I am on the home page$/, function () {

   // cy.visit('https://gemini.google.com/');
    cy.visit(Cypress.config('baseUrl'));
});