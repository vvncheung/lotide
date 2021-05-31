const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// ACTUAL FUNCTION
const middle = function(array) {
  let middleArray = [];
  let middleNum = 0;
  if (array.length <= 2) {
    return middleArray;
  } else {
    if (array.length % 2 !== 0) {
      middleNum = Math.ceil(array.length / 2);
      middleArray.push(middleNum);
    } else if (array.length % 2 === 0) {
      middleNum = Math.ceil(array.length / 2);
      middleArray.push(middleNum);
      middleArray.push(middleNum + 1);
    }
  }
  return middleArray;
};

module.exports = middle;
