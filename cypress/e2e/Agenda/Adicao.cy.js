
/// <reference types="cypress" />

describe('Testes para função adcionar', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Deve  incluir o novo contato a agenda', () => {
        cy.get('input').should('have.length', 3)
        cy.get('input[placeholder="Nome"]').type('Ana Maria')
        cy.get('input[placeholder="E-mail"]').type('Ana@gmail.com')
        cy.get('input[placeholder="Telefone"]').type('99 999999999')
        cy.get('.adicionar').click()
    })
})