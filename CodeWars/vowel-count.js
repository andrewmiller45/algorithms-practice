// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
// 7 kyu

const getCount = str => {
    let count = 0  
    let vowels = ['a' ,'e', 'i' , 'o' , 'u'] 
    
    for(let i = 0 ; i < str.length ; i++){
      if(vowels.includes(str[i])){
         count++
        }
    }
    return count
  }