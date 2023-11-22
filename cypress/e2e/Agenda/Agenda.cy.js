/// <reference types="cypress" />

describe('Testes para a Home da agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Deve renderizar 3 contatos', () => {
        cy.get('.sc-beqWaB').should('have.length', 3)
    })
})