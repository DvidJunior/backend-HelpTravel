describe("Destiny", () => {
  // cada it es un test q se hace a la app

  // test ingresar a envios
  it("test envio destino", () => {
    cy.visit("localhost:8080/login");
    cy.get("#usuario").type("lopezj@ucentral.edu.co");
    cy.get("#password").type("al2");
    cy.get("#botonLogin").click();
    //cy.contains('Tipo de Servicio')
    cy.get("#linkEnvio1").click();
    cy.get('select#selectCategories').select('Ropa hombre')
    cy.get("#numItem").type("2");
    cy.get("#value").type("500000");
    cy.get("#pesoInput").type("5");
    cy.get('#envio03-button').click();

    cy.get('select#selectCategories').select('Articulos de hogar')
    cy.get("#numItem").type("4");
    cy.get("#value").type("4000000");
    cy.get("#pesoInput").type("15");
    cy.get('#envio03-button').click();

    cy.get('#next1').click(); 

    cy.get("#textArea").type("me encuentro ubicado en la puerta cuatro salida nacional de vuelos");
    cy.get('select#departamento').select('Valle del Cauca')
    cy.get('select#listciudades').select('Cali')
    cy.get("#direccion").type("Calle 53 # 46-47");
    cy.get("#casa").type("casa");
    cy.get("#indicaciones").type("conjunto residencial rigo");
    cy.get('#envio04-button').click();

  });

});
