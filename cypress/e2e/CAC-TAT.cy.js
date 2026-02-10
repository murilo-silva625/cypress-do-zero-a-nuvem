describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  it('Check the application title', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('Fill in the required fields', () =>{
    cy.get('#firstName').type('murilo')
    cy.get('#lastName').type('pereira')
    cy.get('#email').type('pereira@gmail.com')
    cy.get('#open-text-area').type('algo')
    cy.get('.button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

    it('blog select', () =>{
    cy.get('#firstName').type('murilo')
    cy.get('#lastName').type('pereira')
    cy.get('#email').type('pereira@gmail.com')
    cy.get('#open-text-area').type('algo')
    cy.get('#product').select('Blog')

    cy.get('.button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

  it('cursos select', () =>{
    cy.get('#firstName').type('murilo')
    cy.get('#lastName').type('pereira')
    cy.get('#email').type('pereira@gmail.com')
    cy.get('#open-text-area').type('algo')
    cy.get('#product').select('Cursos')

    cy.get('.button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

  it('mentoria select', () =>{
    cy.get('#firstName').type('murilo')
    cy.get('#lastName').type('pereira')
    cy.get('#email').type('pereira@gmail.com')
    cy.get('#open-text-area').type('algo')
    cy.get('#product').select('Mentoria')

    cy.get('.button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

  it('youtube select', () =>{
    cy.get('#firstName').type('murilo')
    cy.get('#lastName').type('pereira')
    cy.get('#email').type('pereira@gmail.com')
    cy.get('#open-text-area').type('algo')
    cy.get('#product').select('YouTube')

    cy.get('.button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

  it('error check', () => {
    cy.get('.button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })
})
