const sum = require("./app")
 
describe("Adding two numbers", () => {
   it("Should return the sum", ()=> {
       expect(sum(9,5)).toBe(14)               
   })
})

// describe("Subtract two numbers", () => {
//     it("Should return the difference", ()=> {
//         expect(diff(10,5)).toBe(5)               
//     })
//  })

//  describe("Multiply two numbers", () => {
//     it("Should return the product", ()=> {
//         expect(multiply(10,5)).toBe(50)               
//     })
//  })

//  describe("Divide two numbers", () => {
//     it("Should return the division", ()=> {
//         expect(divide(10,5)).toBe(2)               
//     })
//  })