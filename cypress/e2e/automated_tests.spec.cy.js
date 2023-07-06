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

describe('Dynamic loading 2', () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/2')
    })

    it('Element rendered after the fact', () => {
        cy.contains('button', 'Start').click();
        cy.contains('#loading', 'Loading...').should('exist');
        cy.wait(5001) 
        cy.contains('#finish', 'Hello World!').should('be.visible');
    })

})

describe('Frames', () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/nested_frames')
    })

    it('Nested frames', () => {
        cy.frameLoaded('frame[name="frame-top"]') // Aguarda o carregamento do frame pai "frame-top"
        .its('0.contentDocument')
        .should('exist')
        .then(contentDocumentTop => {
        cy.wrap(contentDocumentTop)
            .find('frameset[name="frameset-middle"] frame[name="frame-middle"]') // Procura o frame "frame-middle" dentro do frameset "frameset-middle" dentro do frame-top
            .should('exist')
            .then($frameMiddle => {
            cy.get($frameMiddle[0].contentDocument)
                .find('#content') // Procura o elemento com ID "content" dentro do frame "frame-middle"
                .should('have.text', 'MIDDLE');
            });
        });
    })

})