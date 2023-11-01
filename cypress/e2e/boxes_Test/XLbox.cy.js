describe("XLbox", () => {
  
    it("XL size box assigned", () => {
        cy.visit("localhost:8080/login");
        cy.get("#usuario").type("lopezj@ucentral.edu.co");
        cy.get("#password").type("al2");
        cy.get("#botonLogin").click();
        //cy.contains('Tipo de Servicio')
        cy.get("#linkEnvio1").click();
        cy.get('select#selectCategories').select('Electrodomesticos')
        cy.get("#numItem").type("4");
        cy.get("#value").type("40000");
        cy.get("#pesoInput").type("50");
        cy.get('#envio03-button').click();
        cy.get('#box-assigned').contains('[ XL ]');
        cy.get("#botonDeleteCart").click();
      });
  
  });