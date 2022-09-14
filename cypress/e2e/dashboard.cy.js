/// <reference types="cypress" />

describe('Dashboard', () => {
  beforeEach(() => {
    cy.intercept('GET', "https://api.nytimes.com/svc/topstories/v2/*", {
      statusCode: 200,
      fixture: "article"
    })
    cy.visit("http://localhost:3000/")
  })

  it('should see a drop down on page load', () =>  {
    cy.get('.select-dropdown').click()
    // cy.get('select').select('health').click()
    cy.get('#react-select-2-option-0').should('have.text', 'arts').click()
    
  })


})