describe("favorite books", () => {
  it("add favorite book", () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.books("QA for all", "QA");
    cy.get("#favorite").check();
    cy.contains("Submit").click();
  });

  it("add book", () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.books("JS for all", "JS");
    cy.contains("Submit").click();
  });

  it('delete from favorite', function() {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.get('#root a:nth-child(6) button.btn').click();
  });

  it("add to favorite from LK", function () {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.get("#root a:nth-child(7) button.btn").click();
  });
});





// cy.get("#root a:nth-child(2) button.btn").click();
// cy.get("#root a:nth-child(2) button.btn").click();
// cy.get("#root button.btn-secondary").click();

// cy.get("#root a:nth-child(7) button.btn").click();