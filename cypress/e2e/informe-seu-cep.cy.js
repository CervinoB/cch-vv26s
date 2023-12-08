describe("Informe seu cep", () => {
  it("cep", () => {
    cy.visit("https://www.mercadolivre.com.br/");
    cy.get(".nav-menu-item").contains(" Digite seu endereço").click();
    cy.visit(
      "https://www.mercadolivre.com.br/navigation/addresses-hub?go=https%3A%2F%2Fwww.mercadolivre.com.br%2F"
    );
    cy.get("h1")
      .contains("Selecione onde quer receber suas compras")
      .should("be.visible");
    cy.get('input[data-testid="zip-code-textfield"]')
      .should("be.visible")
      .type("85660000")
      .type("{enter}");
    cy.wait(5000);
    cy.get(".nav-menu-cp")
      .contains(" Dois Vizinhos 85660000")
      .should("be.visible");
  });
});
