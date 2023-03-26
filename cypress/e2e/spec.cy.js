describe('empty spec', () => {
  it('conntClick', () => {
    cy.visit('http://localhost:5173/')
    cy.get('button').click()
    cy.contains('count is').should('have.text', 'count is 1')
  })
})