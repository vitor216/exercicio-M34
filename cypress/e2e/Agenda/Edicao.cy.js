/// <reference types="cypress" />

describe('Testes para função Alterar contato cadastrado', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Liberar dados do contato para ser alterado', () => {
        cy.get('.edit').click()
    })
})