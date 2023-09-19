describe('e2e', () => {
    it('Login',()=>{

        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get('#submit').click()
       cy.get('.has-text-align-center>strong').should('have.contain','Congratulations student')
        

    })
    it.skip('webtable counting no of rows and columns',()=>{

        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('#htmlTableId>tbody>tr').should('have.length',4)
        cy.get('#htmlTableId>tbody>tr>th').should('have.length',3)

        
        

    })
    it('Check cell data from the specific row and column',()=>{

        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('#htmlTableId>tbody>tr:nth-child(4)>td:nth-child(2)').should('have.text','Manual')

        
        

    })
    it('disiplaying entire data from the web table',()=>{

        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('#table1>tbody>tr').each(($row,index,$rows)=>{
            cy.wrap($row).within(()=>{
                cy.get('td').each(($celldata,index,$col)=>{
                    cy.log($celldata.text())
                })
            })
        })

        
        

    })
    it.skip('Pagination ',()=>{

        cy.visit('http://makeseleniumeasy.com/2020/05/09/storing-web-table-with-pagination-data-into-list-of-map-java/')
        cy.get('#dtBasicExample_info').then((e)=>{
            let txt=e.text()
            let totalPages=txt.substring(txt.indexOf("of")+1,txt.indexOf("entries")-1)
            cy.log("Total no of the pages  in a table"+totalPages)
        })
                })

        it.only('Pagination clicks',()=>{
            cy.visit('http://makeseleniumeasy.com/2020/05/09/storing-web-table-with-pagination-data-into-list-of-map-java/')
            let totalPages=5
            for(let p=2;p<=totalPages;p++)
            {  
                cy.log("Active page is==="+p)
                cy.get("#dtBasicExample_paginate > span > a:nth-child("+p+")").click()
                cy.wait(4000)
                cy.get('#dtBasicExample>tbody>tr').each(($row,index,$rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get('td:nth-child(1)').each(($celldata,index,$col)=>{
                            cy.log($celldata.text())
                        })
                    })
                })
            
        }
                                
            })
                
            
            });