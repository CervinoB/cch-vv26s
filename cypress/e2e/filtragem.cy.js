describe("Filtragem", () => {
  it("Realizar a filtragem de produtos",()=>{
    cy.visit('https://www.mercadolivre.com.br/');
    cy.get('a[href="https://www.mercadolivre.com.br/ofertas#nav-header"]').click();
  })
});
