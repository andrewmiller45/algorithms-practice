// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
    let arr = string.split("")
    
    return arr.reduce((acc, cur) => {
      if (!acc[cur]) {
            acc[cur] = 0
          }
            acc[cur] += 1
          return acc
    }, {})  
  }