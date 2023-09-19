describe('oauth Authentication', () => {
    let accessToken=null
    it('get oath2 access token',()=>{
        cy.request({
            method:'POST',
            url:'https://github.com/login/oauth/access_token',
            qs:{
                client_id:'f2fe6c893e98eb1c6d08',
                client_secret:'5e7f99369744e12d27e1deb12312d59c6f6fd271',
                code:'6164e4ec8352f8e6d4ab'
            }
        }).then((response)=>{
            const params=response.body.split('&')
            accessToken=params[0].split("=")[1]
            cy.log(accessToken)
        })
    })
    it('0auth reques',()=>{
        cy.request({
            method:'GET',
            url:'https://api.github.com/user/repos',
            headers:{
                Authorization:'Bearer '+accessToken,
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body[0].id).to.equal(657574624)
        })
    })
});