const xml2js=require('xml2js')
const parser=new xml2js.Parser({explicitArray:false})
describe('XMLParsing', () => {
    const xmlPayload=" <Pet>     <category>       <id>0</id>       <name>abhishek</name>     </category>     <id>0</id>     <name>abhishek</name>     <photoUrls>       <photoUrl>true</photoUrl>     </photoUrls>     <status>available</status>     <tags>       <tag>         <id>0</id>         <name>cat</name>       </tag>     </tags>   </Pet>"
    let petID=null;
    it("creating Pet",()=>{
        cy.request({
            method:"POST",
            url:"https://petstore.swagger.io/v2/pet/",
            body:xmlPayload,
            headers:{
                'Content-Type':'application/xml',
                'accept':'application/xml'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200);
            parser.parseString(response.body,(err,result)=>{
                petID=result.Pet.id
            })
        })
    })
    it("fetching pet",()=>{
        cy.request({
            method:"GET",
            url:"https://petstore.swagger.io/v2/pet/"+petID,
            body:xmlPayload,
            headers:{
                'accept':'application/xml'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200);
            parser.parseString(response.body,(err,result)=>{
                expect(result.Pet.id).equal(petID)
                expect(result.Pet.name).equal('abhishek')
            })
        })
    })
});