/**
 * Reduce
 */

// Write a function that takes an array and return a hash-map of how many
// times each string occurs in the array

// Note: assigning a default value (empty object) changes how reduce works. Instead of prev starting as the first element in
// our array, it starts as our empty object, meaning that next starts at inputWords[0];
function countWords(inputWords) {
  return inputWords.reduce(function(prev, next) {
    prev[next] = (prev[next] + 1) || 1; //does a lookup to see if key exists in object. If it does it adds one, else it initializes value to one
    return prev;
  }, {});
}

module.exports = countWords;
