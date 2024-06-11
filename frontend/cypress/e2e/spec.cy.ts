describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });

  it("adds a new note", () => {
    cy.visit("/");

    cy.get('input[placeholder="Title"]').type("Test Note Title");
    cy.get('textarea[placeholder="Description"]').type("Test Note Description");
    cy.get('button[type="submit"]').click();

    cy.contains("Test Note Title").should("exist");
    cy.contains("Test Note Description").should("exist");
  });
});
