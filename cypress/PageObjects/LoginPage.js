class Login
{
    setUserName(username)
    {
        cy.get('[name="username"]').type(username)
        
    }
    setPassword(password){
        cy.get('[name="password"]').type(password)
        

    }
    clickSubmit()
    {
        cy.get('[type="submit"]').click()
    }
    verifyLogin()
    {
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
    }
}

export default Login;