 const sum = (a,b) => {
    const result = a + b
    return result
}

 const subtract = (a,b) => {
    const result = a - b
    return result
}

const multiply = (a,b) => {
    const result = a * b
    return result
}

const divide = (a,b) => {
    const result = a / b
    return result
}

//manual testing below
// console.log(`The sum of the number is: `)
// console.log(sum(25,100))

module.exports.sum = sum;
module.exports.subtract = subtract;
module.exports.multiply = multiply;
module.exports.divide = divide;

