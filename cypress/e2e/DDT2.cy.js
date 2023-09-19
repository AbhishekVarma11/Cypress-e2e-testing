describe('Json with mutliple data', () => {
    it('Data Driven test',()=>{
        cy.fixture('orangehrm2').then((data)=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            data.forEach((userdata)=>{
                cy.get('[name="username"]').type(userdata.username)
                cy.get('[name="password"]').type(userdata.password)
                cy.get('[type="submit"]').click()
                
            if(userdata.username=="Admin"&&userdata.password=="admin123")
            {
                cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains(userdata.expected)
                cy.get('.oxd-userdropdown-name').click()
                cy.wait(2000)
                cy.get('[href="/web/index.php/auth/logout"]').click();
                cy.wait(3000);
            }
            else{
                cy.get('.oxd-alert-content').should('have.text','Invalid credentials');
            }
            })  
        })
    })
});