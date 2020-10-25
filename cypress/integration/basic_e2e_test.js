/// <reference types="cypress" />

describe('Basic E2E test', () => {
    it('Test /hello request', () => {
        cy.visit('http://localhost:3000');
        cy.get('body > app-root > span > button').click()
        cy.get('#message').contains("Hello, World!", {timeout: 1000})
    })
})
