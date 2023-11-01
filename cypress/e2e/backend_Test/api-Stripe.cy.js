// describe("Payment", () => {
//   // cada it es un test q se hace a la app

//   // test ingresar a envios
//   it("test envio destino", () => {
//     cy.visit("localhost:8080/login");
//     cy.get("#usuario").type("lopezj@ucentral.edu.co");
//     cy.get("#password").type("al2");
//     cy.get("#botonLogin").click();
//     //cy.contains('Tipo de Servicio')
//     cy.get("#linkEnvio1").click();
//     cy.get('select#selectCategories').select('Electrodomesticos')
//     cy.get("#numItem").type("4");
//     cy.get("#value").type("40000");
//     cy.get("#pesoInput").type("5");
//     cy.get('#envio03-button').click();

//     cy.get('select#selectCategories').select('Jugueteria')
//     cy.get("#numItem").type("4");
//     cy.get("#value").type("40000");
//     cy.get("#pesoInput").type("15");
//     cy.get('#envio03-button').click();

//     cy.get('#next1').click(); 

//     cy.get("#textArea").type("me encuentro ubicado en la puerta cuatro salida nacional de vuelos");
//     cy.get('select#departamento').select('Antioquia')
//     cy.get('select#listciudades').select('Medellín')
//     cy.get("#direccion").type("Calle 53 # 46-47");
//     cy.get("#casa").type("casa");
//     cy.get("#indicaciones").type("conjunto residencial rigo");
//     cy.get('#envio04-button').click();

//     cy.get('.cotizacion-card').eq(0).find('.cotizacion-button').click();

//     // cy.get('[data-testid="card-number"]').type('4242424242424242');
//     // cy.get('[data-testid="card-expiry"]').type('11/27');
//     // cy.get('[data-testid="card-cvc"]').type('242');

//     cy.get("#card-number").type('4242424242424242');
//     cy.get("#card-expiry").type('11/27');
//     cy.get("#card-cvc").type('242');
//     cy.get("#correo").type("dlopezj@ucentral.edu.co");
//     cy.get("#titular").type("Luisa");
//     cy.get('select#pais').select('Colombia')

//     cy.get('#truck-button').click();

//   });

// });
