const s = "abcabcbb"

//expect output = 3 

//Explanation: The answer is "abc", with the length of 3.

//This problem could be solved with a triple for loop, but it would be a mess for 
//big O notation and fail a technical interview.


var lengthOfLongestSubstring = function(s) {
    let windowCharsMap = {}
    //this is an object or "hash map" (turing never called them hash maps wtf mate)
    //since an array cant assign a key value pair here, an object is used.

    let windowStart = 0 
    //window start is a representation of the index position where the start of the linear 
    //window is.  It will default to 0, or the beginning of the string.  After a duplicate 
    //substring value is found, this will update to the next non-repeating index position 
    //within the string

    let maxLength = 0
    //this represents the distance traveled through the string before a duplicate substring
    //was found.  This will update as dupes are found.


    for (let i = 0 ; i < s.length ; i++){
        const endChar = s[i]
        //this is just assigning a variable name current index value
        //will just return the letter in the string in this case.


        if(windowCharsMap[endChar] >= windowStart){

            windowStart = windowCharsMap[endChar] + 1
            //conditional that makes sure the object key value pair exists in the object &&
            //its index value is greater/equal to the windowStart, update the start to the 
            //window value for that character in the object.  Add 1 to account for the index
            //value of i starting at 0.
        }

            //if the length of the current window is greater than the maxLength, set 
            //the max to the length of the current window.

        windowCharsMap[endChar] = i 
        maxLength = Math.max(maxLength, i - windowStart + 1)
    }

    return maxLength
};