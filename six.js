/**
 * Reduce
 */

// Write a function that takes an array and return a hash-map of how many
// times each string occurs in the array

// Note: assigning a default value (empty object) changes how reduce works. Instead of wordMap starting as the first element in
// our array, it starts as our empty object, meaning that currentWord starts at wordMap[0];
function countWords(inputWords) {
  return inputWords.reduce(function(wordMap, currentWord) {
    wordMap[currentWord] = (wordMap[currentWord] + 1) || 1; // does a lookup to see if key exists in object. If it does it adds one, else it initializes value to one
    return wordMap;
  }, {});
}

module.exports = countWords;

