
describe('template spec', () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[className="login_logo"]').should('exist');
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
  }),
  
  it('', () => {
    cy.contains('test').should('exist')
  })
})