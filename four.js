/**
 * Filter
 */

// first map over array of objects and only return the
// message property of each object. then filter that 
// array and only return messages < 50 characters
function getShortMessages(messages) {
  var shortMessages = messages
    .map(function(message) {
      return message.message;
    })
    .filter(function(message) {
      return message.length < 50;
    });
  return shortMessages;
}

module.exports = getShortMessages;
