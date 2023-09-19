describe('', () => {
    it('RadioButtonTest',()=>{
        //visibility
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.get('input[value="male"]').should('be.visible')
        cy.get('input[value="female"]').should('be.visible')
//selecting the radio buttons
        cy.get('input[value="male"]').check().should('be.checked')
        cy.get('input[value="female"]').should('not.be.checked')
        cy.get('input[value="female"]').check().should('be.checked')
        cy.get('input[value="male"]').should('not.be.checked')


    })
    it('CheckBoxTest',()=>{
        //visibility
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.get('input[value="Bike"]').should('be.visible')
        cy.get('input[value="Car"]').should('be.visible')
//check and uncheck the checkbox
        cy.get('input[value="Bike"]').check().should('be.checked')
        cy.get('input[value="Bike"]').uncheck().should('not.be.checked')

        //check the all the checkbox available

        cy.get('input[name="vehicle"]').check().should('be.checked')
        cy.get('input[name="vehicle"]').uncheck().should('not.be.checked')
        //methods first(),last()
        cy.get('input[name="vehicle"]').first().check().should('be.checked')
        cy.get('input[name="vehicle"]').last().check().should('be.checked')



    })
});