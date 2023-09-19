describe('api post request', () => {
    it.skip('post using json hard coded object',()=>
    {
        const requestBody= {
            userId: 1,
             title: "this is new created using post by cy.request method",
            body: "by post -request2"
        }
        cy.request({
            method:'POST',
            url:'https://jsonplaceholder.typicode.com/posts',
            body:requestBody
        })
    })
    it.skip('post using dynamically generating json object',()=>
    {
        const requestBody= {
            userId: 1,
            title: Math.random().toString(5).substring(2),
            body: Math.random().toString(5).substring(3)
        }
        cy.request({
            method:'POST',
            url:'https://jsonplaceholder.typicode.com/posts',
            body:requestBody
        }).then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.title).to.eq(requestBody.title)
            expect(response.body.body).to.eq(requestBody.body)
        })
    })
    it.only('post using fixture',()=>{
        cy.fixture('posts').then((data)=>{
            const requestBody=data

            cy.request({ 
            method:'POST',
            url:'https://jsonplaceholder.typicode.com/posts',
            body:requestBody

            }).then((response)=>{
                expect(response.status).to.eq(201)
                expect(response.body.title).to.eq(requestBody.title)
                expect(response.body.body).to.eq(requestBody.body)
                expect(response.body).has.property('title',requestBody.title)
                expect(response.body).to.have.property('title',requestBody.title)
            })
        })
    
    })})