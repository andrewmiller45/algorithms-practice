// level 7
// https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript
// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
// The four operators are "add", "subtract", "divide", "multiply".

const arithmetic = (a, b, operator) => {
    let oppa
    
    if(operator === "add"){
      oppa = ( a + b )
    }
    
    if(operator === "subtract"){
      oppa = ( a - b )
    }
    
    if(operator === "multiply"){
      oppa = ( a * b )
    }
    
    if(operator === "divide"){
      oppa = ( a / b )
    }
    
    return oppa
  }