describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8080/');
    cy.injectAxe();
    cy.checkA11y();
  })
})