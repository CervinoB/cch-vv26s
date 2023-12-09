describe("Filtragem", () => {
  it("Aplicar filtros na pesquisa de produtos", () => {
    cy.visit("https://www.mercadolivre.com.br/");
    cy.get('[name="as_word"]').type("macbook");
    cy.get(".nav-search-btn").click();
    cy.url().should("include", "macbook");
    cy.get(".ui-search-filter-highlighted").last().click();
    cy.url().should("include", "CustoFrete_Gratis");
  });
});
