/* eslint-disable testing-library/prefer-screen-queries */
///  <reference types="cypress"/>

describe("redirects on 404page on incorrect url", () => {
  beforeEach(() => {
    cy.visit("/asdasd");
  });

  it("checks if error message is presented", () => {
    cy.contains("PageNotFound").should("exist");
  });

  it("gets all h1", () => {
    cy.contains("[data-cy='error-text']", "PageNotFound");
  });
});
