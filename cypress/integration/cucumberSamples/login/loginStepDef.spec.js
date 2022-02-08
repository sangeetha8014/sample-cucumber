/// <reference types='cypress' />

import{Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'
// Given('User is on Login Page', () =>{
//     cy.visit('https://the-internet.herokuapp.com/login')
// })

// When('User enter login credentials', () =>{
//     cy.get('#username').type('tomsmith')
//     cy.get('#password').type('SuperSecretPassword!')
//     cy.get('.radisu').click()

// })

// Then('Should display Home Page', () =>{

//     cy.url().should('include', 'secure') 
// })

Given('User is on Login Page', () =>{
    LoginPage.visitURL();
})

// When('User enter login credentials', () =>{
//     LoginPage.userLogin()

// })
When('User enter {string} and {string}', (username, password) =>{
    LoginPage.userLogin(username, password)
})

Then('Should display Home Page', () =>{
    cy.url().should('include', 'secure') 
})