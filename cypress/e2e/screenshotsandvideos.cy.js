describe('mysuite', () => {
    it('screenshotsandvidoes',()=>{
        cy.visit('https://demo.opencart.com/');
        // cy.screenshot("homepage")
        cy.get('[title="Your Store"]').screenshot('logo');
        //cypress automatically ss while test fail and run through cli
        cy.get('ul>li:nth-child(5)>a[href="https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=17"]').click()
        cy.get('#content>h2').should('have.text','Softwares')

    })
});