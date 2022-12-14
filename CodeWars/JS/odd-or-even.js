//https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

//Given a list of integers, determine whether the sum of its elements is odd or even.
//Give your answer as a string matching "odd" or "even".
//If the input array is empty consider it as: [0] (array with a zero).

const oddOrEven = array => {
  
    let sum
    
    if(array.length){
        sum = array.reduce((acc, cur) => acc + cur)
    } else 
        sum = 0
  
     if(sum % 2 === 0){
       return 'even'
     } else 
       return 'odd'
  }