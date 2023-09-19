describe('Hooks', () => {
    
    before(()=>{
        cy.log('launch App')
    })
    after(()=>{
        cy.log('close App')
    })
    beforeEach(()=>{
        cy.log('log onto app')
    })
    afterEach(()=>{
        cy.log('log out the app');
    })
    
    it('search',()=>{
        cy.log('search products')
    })
    it('advanced search',()=>{
        cy.log('advanced search')
    })
    it('products in cart',()=>{
    cy.log('products in cart')
    })
    
});