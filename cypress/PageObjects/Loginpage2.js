class Login
{   
    username='[name="username"]'
    password='[name="password"]'
    submit='[type="submit"]'
    label='.oxd-topbar-header-breadcrumb > .oxd-text'

    setUserName(username)
    {
        cy.get(this.username).type(username)
        
    }
    setPassword(password){
        cy.get(this.password).type(password)
        

    }
    clickSubmit()
    {
        cy.get(this.submit).click()
    }
    verifyLogin()
    {
        cy.get(this.label).contains('Dashboard')
    }
}

export default Login;