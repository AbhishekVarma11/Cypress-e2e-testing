

describe('Xpath_Selectors', () => {
   it("find no of products",()=>{
    cy.visit('http://www.automationpractice.pl/index.php');
    cy.xpath("//*[@id='htmlcontent_home']/ul[@class='htmlcontent-home clearfix row']/li").should('have.length',5)


   })
   it("Chained Xpath",()=>{
    cy.visit('http://www.automationpractice.pl/index.php');
    cy.xpath("//*[@id='htmlcontent_home']/ul[@class='htmlcontent-home clearfix row']").xpath("./li").should('have.length',5)


   })
});