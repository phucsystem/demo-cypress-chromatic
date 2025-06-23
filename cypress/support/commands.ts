/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// Custom command to perform login
Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('/')
  
  // Fill in the login form
  cy.get('input[placeholder="Enter your email"]').type(email)
  cy.get('input[placeholder="Enter your password"]').type(password)
  
  // Click the sign in button
  cy.get('button[type="submit"]').click()
})

// Custom command to check if user is logged in
Cypress.Commands.add('isLoggedIn', () => {
  // This would typically check for a user token, redirect, or specific UI element
  // For now, we'll check for the success notification
  cy.get('[data-testid="notification"]', { timeout: 5000 }).should('be.visible')
})

// Example of overwriting an existing command
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
//   return originalFn(url, options)
// })

// Add data-testid helper
// Cypress.Commands.add('getByTestId', (testId: string) => {
//   return cy.get(`[data-testid="${testId}"]`)
// })