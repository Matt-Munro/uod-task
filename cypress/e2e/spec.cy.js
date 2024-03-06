describe('Basic accessibility checks', () => {
  it('Checks Axe violations', () => {
    cy.visit('http://127.0.0.1:8080/');
    cy.injectAxe();
    cy.checkA11y();
  })
})