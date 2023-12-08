describe("Navegação", () => {
  it("Realizar Navegação e Ordenação da lista de produtos", () => {
    cy.visit("https://www.mercadolivre.com.br/");
    cy.get("#cb1-edit")
      .type("Mouse Gamer Sem Fio Logitech G305 Lightspeed - Preto")
      .type("{enter}");
    cy.get(
      'a[title="Mouse Gamer Sem Fio Logitech G305 Lightspeed - Preto"]'
    ).should("be.visible");
    cy.get("span").contains("Mais relevantes");
    cy.get('button[data-js="onboarding-cp-close"]')
      .should("be.visible")
      .click();
    cy.get("span").contains("Mais relevantes").click({ force: true });
    cy.get("span").contains("Menor preço").click();
    cy.contains("Mouse Feet Skate Logitech G304 G305").should("be.visible");
  });
});
