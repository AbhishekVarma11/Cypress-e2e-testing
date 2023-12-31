const ajv=require('ajv')
const Ajv=new ajv()

describe('json schema validation', () => {
    it('schema validation against response',()=>{
        cy.request({
            method:'GET',
            url:'https://fakestoreapi.com/products/1'
        }).then((response)=>{
            const schema={
                
                    "$schema": "http://json-schema.org/draft-07/schema#",
                    "title": "Generated schema for Root",
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "number"
                      },
                      "title": {
                        "type": "string"
                      },
                      "price": {
                        "type": "number"
                      },
                      "description": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "image": {
                        "type": "string"
                      },
                      "rating": {
                        "type": "object",
                        "properties": {
                          "rate": {
                            "type": "number"
                          },
                          "count": {
                            "type": "number"
                          }
                        },
                        "required": [
                          "rate",
                          "count"
                        ]
                      }
                    },
                    "required": [
                      "id",
                      "title",
                      "price",
                      "description",
                      "category",
                      "image",
                      "rating"
                    ]
                  }
                  const validate=Ajv.compile(schema)
                  const isValid=validate(response.body)
                  expect(isValid).to.be.true
            
        })
    })
})