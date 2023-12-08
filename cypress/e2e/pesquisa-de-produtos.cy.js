describe("Pesquisa de Produtos", () => {
  it("Realizar uma pesquisa por um produto específico", () => {
    cy.visit("https://www.mercadolivre.com.br/");
    cy.get('[name="as_word"]').type("smartphone");
    cy.get(".nav-search-btn").click();
    cy.url().should("include", "smartphone");
    cy.get(".ui-search-layout").should("have.length.greaterThan", 0);
  });

  it("Aplicar filtros na pesquisa de produtos", () => {
    cy.visit("https://www.mercadolivre.com.br/");
    cy.get('[name="as_word"]').type("macbook");
    cy.get(".nav-search-btn").click();
    cy.url().should("include", "macbook");
    cy.get(".ui-search-filter-highlighted").last().click();
    cy.url().should("include", "CustoFrete_Gratis");
  });
});
