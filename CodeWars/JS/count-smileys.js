//6 kyu


function countSmileys(arr) {
    const eyes = [':', ';']
    const nose = ['-', '~']
    const mouths = [')', 'D']
    
    let count = 0
    
    for(let i = 0 ; i < arr.length ; i++){
      const char = arr[i]
  
      
      if(char.length === 3 && eyes.includes(char[0]) && nose.includes(char[1]) &&   mouths.includes(char[2])){
        count ++
      }
      
      else if(char.length === 2 && eyes.includes(char[0]) && mouths.includes(char[1])){
        count ++
      }
    }
    return count
  }
  
countSmileys([':)'])

countSmileys([':-D' , ':$', ';~D', ':>'])