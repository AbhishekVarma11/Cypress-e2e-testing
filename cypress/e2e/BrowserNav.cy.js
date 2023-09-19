describe('Browser navigation', () => {

    it('go commands',()=>{
        cy.visit('https://demo.opencart.com/');
        cy.get('ul>li:nth-child(5)>a[href="https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=17"]').click()
        cy.get('#content>h2').should('have.text','Software')
        cy.go('back')
        cy.get('#logo').should('be.visible');
        cy.go('forward')
        cy.get('ul>li:nth-child(5)>a[href="https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=17"]').click()
        cy.get('#content>h2').should('have.text','Software')
        cy.reload()
        
    })
    
});