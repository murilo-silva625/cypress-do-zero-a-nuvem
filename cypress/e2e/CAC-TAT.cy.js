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

  it('Invalid email format', () =>{
    cy.get('#firstName').type('murilo')
    cy.get('#lastName').type('pereira')
    cy.get('#email').type('pereira@gmala,com')
    cy.get('#open-text-area').type('algo')
    cy.get('.button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

  it('error check', () => {
    cy.get('.button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

  it('alphanumeric phone', () => {
    cy.get('#phone').type('abcd').should('have.value', '')
  })

  it('phone required check', () => {
    cy.FillMandatoryFields()
    cy.get('#phone-checkbox').check()

    cy.get('.button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

  it('fill required phone number', () => {
    cy.FillMandatoryFields()
    cy.get('#phone').type('1234', {delay : 100})
    cy.get('#phone-checkbox').check()

    cy.get('.button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

   it('radio ajuda select', () => {
    cy.FillMandatoryFields()
    cy.get('input[type="radio"][value="ajuda"]').check().should('be.checked')
    
    cy.SendFields()
    cy.get('.success').should('be.visible')
   })

   it('radio elogio select', () => {
    cy.FillMandatoryFields()
    cy.get('input[type="radio"][value="elogio"]').check().should('be.checked')
    
    cy.SendFields()
    cy.get('.success').should('be.visible')
   })

   it('radio feedback select', () => {
    cy.FillMandatoryFields()
    cy.get('input[type="radio"][value="feedback"]').check().should('be.checked')
    
    cy.SendFields()
    cy.get('.success').should('be.visible')
   })

   it('Mark each type of service', () => {
    cy.FillMandatoryFields()
    cy.get('input[type="radio"]').each(typeOfService =>{
      cy.wrap(typeOfService).check().should('be.checked')
    })
    
    cy.SendFields()
    cy.get('.success').should('be.visible')
  })

  it('select file', () => {
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json').should(input =>{
      expect(input[0].files[0].name).to.equal('example.json')
    })
  })

  it('select file drag-and-drop', () => {
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json', {action: 'drag-drop'}).should(input =>{
      expect(input[0].files[0].name).to.equal('example.json')
    })
  })

  it('Select a file using a fixture with an assigned alias', () => {
    cy.fixture('example.json').as('sampleFiles')
    cy.get('#file-upload').selectFile('@sampleFiles', {action: 'drag-drop'}).should(input =>{
      expect(input[0].files[0].name).to.equal('example.json')
    })
  })
})
