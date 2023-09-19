describe('parsing json', () => {
    it('parsing sample json response',()=>{
        cy.request({
            method:'GET',
            url:'https://fakestoreapi.com/products/',
        }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body[0].id).to.equal(1)
            expect(response.body[0].title).to.equal('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
            expect(response.body[15].title).to.equal("Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket")
        })
    })
    it.only('parsing complex json response',()=>{
        let totalPrice=0
        cy.request({
            method:'GET',
            url:'https://fakestoreapi.com/products/',
            qs:{limit:5}
        }).then((response)=>{
            expect(response.status).to.equal(200)
            // expect(response.body[0].id).to.equal(1)
            // expect(response.body[0].title).to.equal('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
            // expect(response.body[3].title).to.equal("Mens Casual Slim Fit")
            response.body.forEach(element => {
                totalPrice=totalPrice+element.price
            });
            cy.log(totalPrice)
            expect(totalPrice).to.equal(899.23)
        
        })
    })
});