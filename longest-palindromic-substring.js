//given a string s, find the longest palindromic substring in s

const s = "babad"
//expected answer: "bab"

var longestPalindrome = function(s) {
    let startIndex = 0 
    let maxLength = 1
    //the maximum size possible is 1 
    //i.e. if s = "a"
    //the max value can only be 1 

    function expandAroundMiddle(left, right){
        //left and right are being used as "pointer values"
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            //while the left side of the string is "in bounds", just gate keeping to
            //make sure it hasn't iterated off the string.

            //while the right is less than the string's length, gate keeping the opposite side
            
            
            //if the values of the left and right pointer equal each other, we want to expand the 
            //pointer out by an index position to check for a palindrome.  

            const currentPalLength = right - left + 1 

            if(currentPalLength > maxLength){
                maxLength = currentPalLength
                startIndex = left
            }

            left -= 1
            right += 1
        }
    }

    for (let i = 0 ; i < s.length ; i++){
        expandAroundMiddle( i - 1, i + 1)
        expandAroundMiddle(i, i + 1)
    }

        return s.slice(startIndex, startIndex + maxLength)
    }