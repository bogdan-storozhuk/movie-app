/// <reference types="cypress" />

describe("Scenario1", () => {
  it("has movie results on the root URL", () => {
    cy.visit("/");
    cy.get(".MovieCount-Number").should("have.text", "30");
  });

  it('types search query into search input and click "Search Button" and verify that search results match the search query', () => {
    cy.visit("/");

    cy.get(".searchTerm").clear();
    cy.get(".searchTerm").type("lord");
    cy.get(".searchButton").click();

    cy.url().should("include", "search/lord");
    cy.get(".MovieCount-Number").should("have.text", "4");
    cy.get(".MovieListItem-Details-Title").each(() => {
      ($elements) => {
        expect($elements).to.have.length(4);
        expect($elements.eq(0)).to.contain("Lord");
        expect($elements.eq(1)).to.contain("Lord");
        expect($elements.eq(2)).to.contain("Lord");
        expect($elements.eq(2)).to.contain("Lord");
      };
    });
  });

  it("click on one of the search results and verify that correct movie page is displayed and the movie info is visible on the screen", () => {
    cy.visit("http://localhost:8080/search/lord");
    cy.get(
      ":nth-child(3) > .MovieListItem-Container > .MovieListItemMenu"
    ).click();

    cy.url().should("include", "search/lord?movie=121");
    cy.get(".Title").should(
      "have.text",
      "The Lord of the Rings: The Two Towers8.1"
    );
    cy.get(".MovieDetails-Info-Tagline").should(
      "have.text",
      "A New Power Is Rising."
    );
    cy.get(".MovieDetails-Info-TimeAndReleaseDate").should(
      "have.text",
      "2002179 min"
    );
    cy.get(".MovieDetails-Info-Overview").should(
      "have.text",
      "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard."
    );
  });
});
