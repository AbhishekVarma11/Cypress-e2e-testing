describe('Alters', () => {
    it('Ok alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('#content > div > ul > li:nth-child(1) > button ').click()
        cy.on('windowm:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert');
        })
         cy.get('#result').should('have.text','You successfully clicked an alert')
    })
    it('Confirm alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('#content > div > ul > li:nth-child(2) > button').click()
        cy.on('windowm:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })
         //cy.get('#result').should('have.text','You clicked: Ok')
         cy.on('window:confirm',()=>false)
         cy.get('#result').should('have.text','You clicked: Cancel')
    })
    it('Prompt alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
       
       
        //  cy.window().then((win)=>{
        // cy.stub(win,'prompt').returns('')
        //  })
        cy.window().then((win)=>{
        cy.stub(win, 'prompt').callsFake(() => null)
        })
        cy.get('#content > div > ul > li:nth-child(3) > button').click()
        cy.get('#result').should('have.text','You entered: null')
    })
    it('auth alert approach 1',()=>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{
            username:"admin",
            password:"admin"
        }})
       cy.get('#content > div > p').should('have.contain','Congratulations!')

    })
    it.only('auth alert approach 2',()=>{
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
       cy.get('#content > div > p').should('have.contain','Congratulations!')

    })
});