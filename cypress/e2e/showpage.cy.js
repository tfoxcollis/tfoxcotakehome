/// <reference types="cypress" />

describe('Showpage', () => {
  beforeEach(() => {
    cy.intercept('GET', "https://api.nytimes.com/svc/topstories/v2/*", {
      statusCode: 200,
      fixture: "article"
    })
    cy.visit("http://localhost:3000/")
    cy.get('.select-dropdown').click()
    cy.get('#react-select-2-option-0').click()
    cy.get('.article-card h3').eq(1).click()
  })

  it('should have a article info', () => {
    cy.url().should('eq', 'http://localhost:3000/showpage')
    cy.get('.info-container').contains("h1", "What a High-Risk Pregnancy Looks Like After Dobbs")
    // cy.get('form').contains('Go to NYT').click()
    // cy.origin().should('eq', 'https://www.nytimes.com/2022/09/13/magazine/high-risk-pregnancy-dobbs.html')
  })

  it.only('should be able to navigate back to the home page', () => {
    cy.get('.nav-bar').contains('a', 'Back to Main').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})