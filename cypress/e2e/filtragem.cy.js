describe("Site: nike - Cenario: Filtragem/Busca", () => {
  it("Filtragem/Busca", () => {
    // Navega para o site da Nike
    cy.visit("https://www.nike.com/");

    cy.get("#VisualSearchInput").type("Jordan 1 Mid SE");

    cy.get('ul[data-pre="VisualSearchResults"]')
      .children()
      .should("have.length", 5);

    cy.get("#VisualSearchProduct-0").click();

    cy.contains('Error').should('be.visible')

    cy.get("body").type("{enter}");

    // cy.get(
    //   'div[data-testid="HeroImgContainer"].img[alt="Air Jordan 1 Mid SE Men\'s Shoes"]'
    // ).should("be.visible");

    // cy.get('div[role="dialog"].button[type="button"]').click();
    // cy.get('div[data-testid="ThumbnailListContainer"]').should("be.visible");
  });
});
