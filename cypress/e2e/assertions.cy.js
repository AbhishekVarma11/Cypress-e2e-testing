
describe('Assertions Demo', () => {
    it("Implicit Assertions",()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     cy.url().should('include','orangehrmlive.com')
         .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .and('contain','orangehrm')
    //  .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //  .should('contain','orangehrm')
     // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // cy.url().should('contain','orangehrm')
})
it("Title Validation",()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     cy.title().should('include','Orange')
         .and('eq','OrangeHRM')
    .and('contain','HRM')

})
it("Logo Validation",()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     cy.get('.orangehrm-login-branding > img').should('be.visible')
         .and('exist')

})
it("No of Hyperlinks",()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   cy.xpath('//a').should('have.length',5)

})
it("Input value validation",()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   cy.get('input[placeholder="Username"]').type("Admin")
   cy.get('input[placeholder="Username"]').should("have.value","Admin")
})
});