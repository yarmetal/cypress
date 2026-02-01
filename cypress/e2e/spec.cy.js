describe('login spec', () => {
  it('Successfull login', () => {
    cy.visit('/');
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com").should('be.visible');
  })

  it("Wrong login", () => {
    cy.visit('/');
    cy.login(" ", "test");
    cy.get("#mail").then($el => $el[0].checkValidity()).should('be.false');
  })

  it("Empty password", () => {
    cy.visit('/');
    cy.login("test@test.com", " ");
    cy.get("#pass").then(($el) => $el[0].checkValidity()).should('be.true');
    });

})