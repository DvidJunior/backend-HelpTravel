describe("Store App", () => {
  // cada it es un test q se hace a la app

  // test par a ver si se puede ingresar a la paguina de login
  // it("Should login page can be opened", () => {
  //   cy.visit("localhost:8080/login");
  // });

  // it.only("Should login page can be opened", () => {
  //   cy.visit("localhost:8080/");
  // });

  // test login
  // it("A user can be login", () => {
  //   cy.visit("localhost:8080/login");
  //   cy.get("#usuario").type("lopezj@ucentral.edu.co");
  //   cy.get("#password").type("al2");
  //   cy.get("#botonLogin").click();
  // });

  // test sali login
  // it("A user can be login", () => {
  //   cy.visit("localhost:8080/login");
  //   cy.get("#usuario").type("lopezj@ucentral.edu.co");
  //   cy.get("#password").type("al2");
  //   cy.get("#botonLogin").click();
  //   cy.get("#loguot").click();
  // });

  // test ingresar a envios
  it("XS size box assigned", () => {
    cy.visit("localhost:8080/login");
    cy.get("#usuario").type("lopezj@ucentral.edu.co");
    cy.get("#password").type("al2");
    cy.get("#botonLogin").click();
    //cy.contains('Tipo de Servicio')
    cy.get("#linkEnvio1").click();
    cy.get('select#selectCategories').select('Electrodomesticos')
    cy.get("#numItem").type("4");
    cy.get("#value").type("40000");
    cy.get("#pesoInput").type("5");
    cy.get('#envio03-button').click();
    cy.get('#box-assigned').contains('[ XS ]')
    cy.get("#botonDeleteCart").click();
  });

});
