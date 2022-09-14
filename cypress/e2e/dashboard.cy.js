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
    cy.get('#react-select-2-option-0').should('have.text', 'arts').click()
    cy.get('.article-card h3').eq(1).should('have.text', 'Title: What a High-Risk Pregnancy Looks Like After Dobbs').click()
    cy.url().should('eq', 'http://localhost:3000/showpage')
  })

  it('should be able to click descending button and have cards sort by date', () => {
    cy.get('.select-dropdown').click()
    cy.get('#react-select-2-option-0').should('have.text', 'arts').click()
    cy.get('button').contains('Descending order by date').click()
  })
})