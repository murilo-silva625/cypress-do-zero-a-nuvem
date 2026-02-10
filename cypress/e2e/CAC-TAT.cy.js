describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it.only('preeche campos obrigatorios', () =>{
    cy.get('#firstName').type('murilo')
    cy.get('#lastName').type('pereira')
    cy.get('#email').type('pereira@gmail.com')
    cy.get('#product').click('#product')
  })
})
