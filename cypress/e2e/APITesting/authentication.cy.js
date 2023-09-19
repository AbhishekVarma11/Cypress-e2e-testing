describe('Authentication', () => {
    it('basic authentication',()=>{
        cy.request({
            method:'GET',
            url:'https://postman-echo.com/basic-auth',
            auth:{
                user:'postman',
                password:'password'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true)
        })
    })
    // it('digest authentication',()=>{
    //     // cy.request({
    //     //     method:'GET',
    //     //     url:'http://postman-echo.com/digest-auth',
    //     //     auth:{
    //     //         user:'postman',
    //     //         password:'password',
    //     //         type:'digest'
    //     //     }
    //     //cypress doesn't support digest authentication either use queried parameters or json payload
    //     cy.request({
    //         url: 'https://postman-echo.com/basic-auth',
    //         auth: {
    //             user:'postman',
    //             pass:'password',
    //             type: 'digest'
    //         }
    //       }).then((response)=>{
    //         expect(response.status).to.eq(200)
    //         expect(response.body.authenticated).to.eq(true)
    //     })
    // })
    
    it.skip('Bearer Token auth',()=>{
        const token="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";
        cy.request({
            method:'GET',
            url:'https://api.github.com/user/repos',
            headers:{
                Authorization:'Bearer '+token,
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
    })
    it.only('API KEY Token auth',()=>{

        cy.request({
            method:'GET',
            url:'https://api.openweathermap.org/data/2.5/weather?q=Delhi',
            qs:{
                appid:'606779000da2a0ea112c0e10460c7bff',
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
    })
});