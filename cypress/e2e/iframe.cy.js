import 'cypress-iframe'
require('@4tw/cypress-drag-drop')
require
describe('handle tabs/iframes', () => {
    it('tabs aprroach 1',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('#content > div > a').invoke('removeAttr','target').click()
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.get('body > div > h3').should('have.text','New Window')
        cy.go('back')

    })
    it('tabs aprroach 2',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('#content > div > a').then((e)=>{
let url=e.prop('href')
cy.visit(url)
        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.get('body > div > h3').should('have.text','New Window')

    })
    it.skip('iframe',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        const iframe=cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
        iframe.clear().type("Welcome")
    })
    it.only('iframe by using custom commands',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
       cy.getIframe('#mce_0_ifr').clear().type("Welcome{ctrl+a}")
    })


    
});