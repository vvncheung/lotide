'use strict';

const args = process.argv;
let array = args.slice(2);

const reverseString = function(string) {
  for (let j = 0; j < string.length; j++) {
    let reversedString = "";
    for (let i = string[j].length - 1; i >= 0; i--) {
      reversedString = reversedString + string[j][i];
    }
    console.log(reversedString);
  }
};

module.exports = reverseString;