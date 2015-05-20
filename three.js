/**
 * Map
 */

// this function accepts an array and will return a new array
// with all the values doubled
var doubleAll = function(numbers) {
  return numbers.map(function(number) {
    return number * 2;
  });
};

module.exports = doubleAll;
