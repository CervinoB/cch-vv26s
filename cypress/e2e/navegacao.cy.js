describe("Site: Nike - Cenario: Navegação", () => {
  it("Navegação", () => {
    // Navega para o site da Nike
    cy.visit("https://www.nike.com/");

    // Clica no link 'New & Featured' para acessar os itens novos e em destaque
    cy.get('a[aria-label="New & Featured"]').click();

    // Verifica se a página exibe o texto 'New Releases' para confirmar a navegação
    cy.contains("New Releases").should("be.visible");

    // Verifica se o elemento com id 'skip-to-products' existe e contém 27 elementos filhos
    cy.get("#skip-to-products").children().should("have.length", 27);
    cy.get("#skip-to-products").should("exist");

    // Clica na categoria 'Hoodies & Pullovers' para filtrar os itens exibidos
    cy.get('a[aria-label="Category for Hoodies & Pullovers"]').click();

    // Verifica se a página exibe o texto 'New Hoodies & Pullovers' para confirmar a filtragem
    cy.get("h1").contains("New Hoodies & Pullovers").should("be.visible");

    // Move o cursor sobre o menu 'Men' para exibir opções de navegação
    cy.get('a[aria-label="Men"]').trigger("mouseover");

    // Verifica se o submenu 'Basketball' é visível e clica nele para filtrar os itens
    cy.get('a[aria-label="main-menu, Men, Shop by Sport, Basketball"]')
      .should("be.visible")
      .click();

    // Verifica se a página exibe o texto 'Shop Basketball Essentials' para confirmar a filtragem
    cy.get("h2").contains("Shop Basketball Essentials").should("be.visible");
  });
});
