import 'cypress-iframe'
require('@4tw/cypress-drag-drop')
describe('Mouse Events', () => {
    it.skip('Mouse Hover',()=>{
        cy.visit('https://demo.opencart.com/');
        cy.get('li>a[href="https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=18"]').trigger('mouseover').click()

        cy.get('#narbar-menu > ul > li:nth-child(2) > div > div > ul > li:nth-child(2) > a').should('be.visible');

    })
    it.skip('Right click',()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');
        //cy.get('.context-menu-one').trigger('contextmenu')
        cy.get('.context-menu-one').rightclick()
        cy.get('.context-menu-icon-paste > span').should('be.visible');

    })
    it.skip('Double click',()=>{
        cy.visit('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick');
         cy.frameLoaded('#iframeResult')
        cy.iframe('#iframeResult').find('[ondblclick="myFunction()"]').trigger('dblclick')
       // cy.iframe('#iframeResult').find('#demo').should('have.value','Hello World');
        // const iframe=cy.get('#iframeResult')
        // .its('0.contentDocument.body')
        // .should('be.visible')
        // .then(cy.wrap)
        // iframe.find('[ondblclick="myFunction()"]').trigger('dblclick')
    })
    it('Drag and Drop',()=>{
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
        cy.get('.dragableBox#box3').drag('.dragableBoxRight#box103', {force: true})
    })
    it.only('Scrollable ',()=>{
        cy.visit('https://www.countries-ofthe-world.com/all-countries.html');
        cy.get('#content > div.container.list-container > div:nth-child(2) > ul:nth-child(2) > li:nth-child(45)').scrollIntoView({duration:2000})
    cy.get('#content > div.container.list-container > div:nth-child(2) > ul:nth-child(2) > li:nth-child(45)').should('be.visible')
    cy.get('#content > div.container.list-container > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2)').scrollIntoView({duration:2000})
})
});