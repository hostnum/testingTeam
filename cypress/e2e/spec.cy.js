/// <reference types= "cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    cy.contains("Sign In").click()
    cy.url().should('contain','Form')

  })

  it("show an error",() => {
    cy.visit("https://petstore.octoperf.com/actions/Catalog.action")
    cy.contains("Sign In").click()
    cy.get('input[name="username"]').type("invalid email")
    cy.get('[name="signon"]').click()
    cy.get('[name="signon"]').should('be.visible')



  })
})