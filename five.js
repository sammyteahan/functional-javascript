/**
 * Every + Some
 *
 * every: checks that all elements pass callback predicate function
 * some: checks that at least one elements passes callback predicate function
 */

var goodUsers = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5}
];

// Note: we'll have access to the array passed into testAllValid within return function 'submittedUsers'
// example call: var testAllValid = checkUsersValid(goodUsers);
// testAllValid([{id: 1}, {id: 2}]);

function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(function(submittedUser) {
      return goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUser.id;
      });
    });
  };
}

module.exports = checkUsersValid;

