const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🙇🏻‍♀️Assertion passed:" ${actual} === ${expected}`);
    return;
  } else {
    console.log(`🙅🏻‍♀️Assertion failed: ${actual} !==  ${expected}`);
    return;
  }
};

module.exports = assertArraysEqual;
