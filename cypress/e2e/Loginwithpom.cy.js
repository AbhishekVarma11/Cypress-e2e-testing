import Login from "../PageObjects/Loginpage2";
describe('POM', () => {
    it('LoginTest',()=>
    {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.fixture('orangehrm').then((data)=>{

        cy.get('[name="username"]').type(data.username)
        cy.get('[name="password"]').type(data.password)
        cy.get('[type="submit"]').click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains(data.expected)
        
        })
    })
    it.only('LoginTest using POM',()=>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const ln=new Login()

      
        cy.fixture('orangehrm').then((data)=>{

        ln.setUserName(data.username)
        ln.setPassword(data.password)
        ln.clickSubmit()
        ln.verifyLogin()
        })
    })
});