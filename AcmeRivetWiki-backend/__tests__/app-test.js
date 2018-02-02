const request = require('supertest')
const app = require('../app')

jest.mock('../models/rivet')

describe("App", () => {

  it("Tests the root path", () => {
    return request(app).get("/").then(response => {
      expect(response.statusCode).toBe(200)
    })
  })

  it("Lists rivets", () => {
      return request(app).get("/rivets").then(response => {
          expect(response.statusCode).toBe(200)
          expect(response.body.rivets[0].name).toBe('Groover')
      })
   })

   it("Creates rivets", ()=>{
   return request(app)
     .post("/rivets")
     .send({
       name: 'Groover',
       size: "12 inches",
       material: "incanel",
       capacity: "400 metric tons",
       description: "industrial grade rivet"
     })
     .then(response => {
       expect(response.statusCode).toBe(201)
       expect(response.body.rivet.name).toBe('Groover')
       expect(response.body.rivet.size).toBe('12 inches')
       expect(response.body.rivet.material).toBe('incanel')
       expect(response.body.rivet.capacity).toBe('400 metric tons')
       expect(response.body.rivet.description).toBe('industrial grade rivet')
     })
 })

 it("Validates name when creating rivet", ()=>{
 return request(app)
   .post("/rivets")
   .send({
       size: "12 inches",
       material: "incanel",
       capacity: "400 metric tons",
       description: "industrial grade rivet"
   })
   .then(response =>{
     expect(response.statusCode).toBe(400)
     const error = response.body.errors.validations[0]
     expect(error.param).toBe('name')
     expect(error.msg).toBe('Is required')
   })
})

it("Validates size when creating rivet", ()=>{
return request(app)
  .post("/rivets")
  .send({
      name: "Groover",
      material: "incanel",
      capacity: "400 metric tons",
      description: "industrial grade rivet"
  })
  .then(response =>{
    expect(response.statusCode).toBe(400)
    const error = response.body.errors.validations[0]
    expect(error.param).toBe('size')
    expect(error.msg).toBe('Is required')
  })
})

it("Validates material when creating rivet", ()=>{
return request(app)
  .post("/rivets")
  .send({
      size: "12 inches",
      name: "Groover",
      capacity: "400 metric tons",
      description: "industrial grade rivet"
  })
  .then(response =>{
    expect(response.statusCode).toBe(400)
    const error = response.body.errors.validations[0]
    expect(error.param).toBe('material')
    expect(error.msg).toBe('Is required')
  })
})

it("Validates capacity when creating rivet", ()=>{
return request(app)
  .post("/rivets")
  .send({
      size: "12 inches",
      material: "incanel",
      name: "Groover",
      description: "industrial grade rivet"
  })
  .then(response =>{
    expect(response.statusCode).toBe(400)
    const error = response.body.errors.validations[0]
    expect(error.param).toBe('capacity')
    expect(error.msg).toBe('Is required')
  })
})

it("Validates description when creating rivet", ()=>{
return request(app)
  .post("/rivets")
  .send({
      size: "12 inches",
      material: "incanel",
      capacity: "400 metric tons",
      name: "Groover"
  })
  .then(response =>{
    expect(response.statusCode).toBe(400)
    const error = response.body.errors.validations[0]
    expect(error.param).toBe('description')
    expect(error.msg).toBe('Is required')
  })
})







})
