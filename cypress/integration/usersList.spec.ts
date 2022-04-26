/// <reference types="cypress"/>

describe("users list on homepage renders properly", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("display users with mock", () => {
    cy.intercept(
      "GET",
      "https://jsonplaceholder.typicode.com/users?_page=1&_limit=2",
      {
        fixture: "users.json",
      }
    );
    cy.contains("Leanne Graham").should("be.visible");
    cy.contains("button", "prev").should("be.disabled");
  });

  it("renders new users after button click", () => {
    cy.contains("button", "next").click();
    cy.contains("Clementine Bauch").should("be.visible");
  });

  it("redirects on user details after user name clicked", () => {
    cy.contains("Leanne Graham").click();
    cy.contains("Sincere@april.biz").should("be.visible");
  });
});
