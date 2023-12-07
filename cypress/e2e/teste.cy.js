describe("Site: teste - Cenario: teste", () => {
  it("Navegação", () => {
    cy.visit("https://www.mercadolivre.com.br/");

    cy.get("#cb1-edit")
      .type("Mouse Gamer Sem Fio Logitech G305 Lightspeed - Preto")
      .type("{enter}");

    cy.get(
      'a[title="Mouse Gamer Sem Fio Logitech G305 Lightspeed - Preto"]'
    ).should("be.visible");

    cy.contains("Mais relevantes").click();
    cy.contains("Menor preço").click();
  });
});
