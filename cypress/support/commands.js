Cypress.Commands.add('FillMandatoryFields', (data = {
    firstName: 'teste',
    lastName: 'silvs',
    email: 'umail@email.com',
    txtArea: 'testetst'
}) => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)    
    cy.get('#email').type('pereira@gmail.com')
    cy.get('#open-text-area').type('algo')
})

Cypress.Commands.add('SendFields', () => {
    cy.contains('button', 'Enviar').click()
})