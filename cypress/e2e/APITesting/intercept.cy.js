describe('intercept for netowrking spying', () => {
    
    it.only('test api ',()=>{
        cy.intercept({
            path:'/products'
        }).as('products')
        cy.visit('https://dummyjson.com/')
        
        cy.get('tbody tr:nth-child(1) td:nth-child(2) a:nth-child(1)').click()
        cy.wait('@products').then((inter)=>{
        cy.log(JSON.stringify(inter))
        expect(inter.response.body.products).to.have.length(30)
        cy.log(inter.response.body.products)
        })

    })
    it.skip('test api ',()=>{
        cy.visit('https://dummyjson.com/')
        
        cy.get('tbody tr:nth-child(1) td:nth-child(2) a:nth-child(1)').click()
        cy.url().should('contain','https://dummyjson.com/products')
        })

})