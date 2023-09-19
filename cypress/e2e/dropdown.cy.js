describe('Dropdowns', () => {
    it.skip('SelectDropDown',()=>{
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/');
        cy.get('select').select('saab')
        .should('have.value','saab');
    })
    it('Dropdown without select',()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
        cy.get('span[id="select2-billing_country-container"]').click()
        cy.get('.select2-search__field').type('Iraq{enter}')
        cy.get('span[id="select2-billing_country-container"]').should('have.text','Iraq')
    })
    it('Dropdown with suggestion',()=>{
        cy.visit('https://www.wikipedia.org/');
        cy.get('#searchInput').type("Programming")
        cy.get('.suggestion-title').contains('Programming language').click()
    })
    it.only('Dynamic Dropdown',()=>{
        cy.visit('https://www.google.com/');
        cy.get('[name="q"]').type("testing")
        cy.get('div.wM6W7d>span').each(($el,$index,$list)=>{
            if($el.text()=='testing tools')
            {
                cy.wrap($el).click()
            }
        })
        cy.get('[name="q"]').should('have.value','testing tools')
    })

    
});