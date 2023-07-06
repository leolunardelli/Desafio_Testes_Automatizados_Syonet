describe('Form Authentication', () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login')
    })

    it('Form Authentication Login and Logout', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.contains('.radius', 'Login').click();
        cy.get('.flash').should('be.visible').and('contain', 'You logged into a secure area!');
        cy.contains('.button', 'Logout').click();
    })

    it('Form Authentication Login Error', () => {
        cy.get('#username').type('tom');
        cy.get('#password').type('5555555');
        cy.contains('.radius', 'Login').click();
        cy.get('.flash').should('be.visible').and('contain', 'Your username is invalid!');
    })
})
