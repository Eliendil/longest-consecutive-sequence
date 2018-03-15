module.exports = function longestConsecutiveLength(array) {
  // your solution here
    
var length = 1;
var output = 0;
array.sort((a, b) => a - b);
  if(array.length < 2) 
    return array.length;
  for(var i = 1; i < array.length; i++) {
    if(array[i] === array[i - 1] + 1) {
      length += 1;
      }
        else {
          output = Math.max(output, length);
            length = 1;
      }
    }
    console.log(output);
    return output;
  }
