const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🙇🏻‍♀️Assertion passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
    return;
  } else {
    console.log(`🙅🏻‍♀️Assertion failed: ${JSON.stringify(actual)} !==  ${JSON.stringify(expected)}`);
    return;
  }
};

module.exports = assertArraysEqual;
