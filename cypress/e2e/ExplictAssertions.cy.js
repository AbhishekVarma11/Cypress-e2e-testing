describe('Explict Assertions', () => {
    it("ExplitAssert",()=>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[placeholder="Username"]').type("Admin")
        cy.get('input[placeholder="Password').type("admin123")
        cy.get('button[type="submit"]').click()
        let expName="qzJAWimxJN Thashvin"
        cy.xpath('//*/span/p[@class="oxd-userdropdown-name"]').then((x)=>{
            let actName=x.text()
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)
            assert.equal(actName,expName)
            assert.notEqual(actName,expName)
        })

    })
});