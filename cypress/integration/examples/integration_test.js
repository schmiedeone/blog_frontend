describe("Blog Integration Test", function () {
  it("Clicks through Authors sequence", function () {
    cy.visit("http://localhost:3000/");
    cy.contains("authors").click();

    cy.contains("all authors").click();

    cy.url().should("match", /uthors/);

    cy.get("#card").click();

    cy.url().should("match", /uthor\/\d/);
    cy.get("#card").click();
    cy.url().should("match", /rticle\/\d/);

    cy.contains("authors").click();

    cy.get("#authors_menuItem_1").click();
    cy.url().should("match", /uthor\/\d/);
    cy.get("#card").click();
    cy.url().should("match", /rticle\/\d/);
  });

  it("Clicks through Categories sequence", function () {
    cy.visit("http://localhost:3000/");
    cy.contains("categories").click();

    cy.contains("all categories").click();

    cy.url().should("match", /ategories/);

    cy.get("#card").click();

    cy.url().should("match", /ategory\/\d/);
    cy.get("#card").click();
    cy.url().should("match", /rticle\/\d/);

    cy.contains("categories").click();

    cy.get("#categories_menuItem_1").click();
    cy.url().should("match", /ategory\/\d/);
    cy.get("#card").click();
    cy.url().should("match", /rticle\/\d/);
  });

  it("Clicks through the remaining, unclicked buttons", function () {
    cy.visit("http://localhost:3000/");

    cy.get("#title").click();
    cy.url().should("match", /rticle\/\d/);
    cy.get("#logo_image").click();

    cy.get("#category").click();
    cy.url().should("match", /ategory\/\d/);
    cy.get("#logo_image").click();

    cy.get("#aboutButton").click();
    cy.url().should("match", /about/);

    cy.contains("about schmiede")
      .should("have.attr", "href")
      .and("include", "https://schmiede.one/about/");

    cy.contains("imprint")
      .should("have.attr", "href")
      .and("include", "https://schmiede.one/imprint/");

    cy.contains("privacy policy")
      .should("have.attr", "href")
      .and("include", "https://schmiede.one/privacy-policy/");
  });
});
