describe('MyTestSuite', () => {
    it.skip('FixtureDemoTest',()=>
    {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.fixture('orangehrm').then((data)=>{

        cy.get('[name="username"]').type(data.username)
        cy.get('[name="password"]').type(data.password)
        cy.get('[type="submit"]').click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains(data.expected)
        
        })
    })
        let userdata;
        before(()=>{
            cy.fixture('orangehrm').then((data)=>{
                userdata=data
            })
        })
        it.only('fixture using the hook for multiple it blocks',()=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            cy.get('[name="username"]').type(userdata.username)
            cy.get('[name="password"]').type(userdata.password)
            cy.get('[type="submit"]').click()
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains(userdata.expected)
        })
        

    
});