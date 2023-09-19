
describe('customcommands', () => {

    it('handling links',()=>{
        cy.visit('https://demo.nopcommerce.com/');
       // cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();
        //using the custom command
        cy.clickLink('Apple MacBook Pro 13-inch')
     
       cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
    })
    it('Overwriting custom command contains',()=>{
        cy.visit('https://demo.nopcommerce.com/');
       // cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();
        //using the custom command
        cy.clickLink('APPLE MACBOOK Pro 13-inch')
     
       cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
    })
    it.only('custom command for login',()=>{

        cy.visit('https://demo.nopcommerce.com/');
        cy.clickLink('Log in')
        cy.Login("test11@gmail.com","test12")
        cy.get(".ico-account").contains('My account');
    })
});