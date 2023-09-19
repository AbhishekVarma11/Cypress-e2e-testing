describe('Http Requests', () => {
    it("GET Call",()=>{
        cy.request('GET',"https://jsonplaceholder.typicode.com/posts/1").its('status')
        .should('equal',200)
    })
    it("POST CALL",()=>{
        cy.request({
            method:'POST',
            url:'https://jsonplaceholder.typicode.com/posts',
            body:{
                title:"Test post",
                body:"this is post call",
                userId:1
            }
        }).its('status').should('equal',201)
    })
    it("PUT CALL",()=>{
        cy.request({
            method:'PUT',
            url:'https://jsonplaceholder.typicode.com/posts/1',
            body:{
                title:"Test post-updated using put",
                body:"this is put call",
                userId:1
            }
        }).its('status').should('equal',200)
    })
    it.only("Delete CALL",()=>{
        cy.request({
            method:'DELETE',
            url:'https://jsonplaceholder.typicode.com/posts/1'
        }).its('status').should('equal',200)
    })
});