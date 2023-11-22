/// <reference types="cypress" />

describe('Testes para função Alterar contato cadastrado', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Alterar dados de um Contato', () => {
        cy.get('.edit').click({ multiple: true })
        cy.get('[type="text"]').clear()
        cy.get('[type="email"]').clear()
        cy.get('[type="tel"]').clear()
        cy.get('input[placeholder="Nome"]').type('Vitor Aguiar')
        cy.get('input[placeholder="E-mail"]').type('vitor@gmail.com')
        cy.get('input[placeholder="Telefone"]').type('(21)99999-9999')
        cy.get('.alterar').click()
    })
})