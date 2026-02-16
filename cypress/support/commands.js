Cypress.Commands.add('FillMandatoryFields', (data = {
    firstName: 'teste'
}) => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type('pereira')    
    cy.get('#email').type('pereira@gmail.com')
    cy.get('#open-text-area').type('algo')
    cy.contains('button', 'Enviar').click()
})