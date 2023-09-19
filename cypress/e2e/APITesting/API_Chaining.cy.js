describe('API chaining', () => {
    let authToken='2b0f301eb58160fa607a13ed5e1b1c6b3d7989ef3538c1b2750945f96901151c'
    let userId=null
    it('create ,update,delete user in Gorest API',()=>{
        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            body:{
                name: "Abhishek",
                email: Math.random().toString(5).substring(2)+"@gmail.com",
                gender: "male",
                status: "active",
            },
            headers:{
                Authorization:'Bearer '+authToken
            }
        }).then((response)=>{
            expect(response.status).to.equal(201)
            userId=response.body.id
            cy.request({
                method:'PUT',
                url:`https://gorest.co.in/public/v2/users/${userId}`,
                body:{
                    name:'abhishek-updated',
                },
                headers:{
                    Authorization:'Bearer '+authToken
                }
                
            })
        }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.name).to.equal('abhishek-updated')
            cy.request({
                method:'DELETE',
                url:`https://gorest.co.in/public/v2/users/${userId}`,
                headers:{
                    Authorization:'Bearer '+authToken
                }
                
            }).then((response)=>{
                expect(response.status).to.equal(204)
            })
        })
    })
    
});