/// <reference types="cypress" />

describe('Testes para função Remover contato cadastrado', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Apagar Contato', () => {
        cy.get('.sc-beqWaB').first().find('.delete').click()
    })
})