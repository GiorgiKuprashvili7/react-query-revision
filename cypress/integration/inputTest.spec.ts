/// <reference types='cypress' />

describe("testing inputs", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("able to input email", () => {
    cy.get("input[type='email']").should("exist");
    cy.get("input[type='email']")
      .type("gio@mail.gom")
      .should("have.value", "gio@mail.gom");
  });
});
