const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🙇🏻‍♀️Assertion passed:" ${actual} === ${expected}`);
    return;
  } else {
    console.log(`🙅🏻‍♀️Assertion failed: ${actual} !==  ${expected}`);
    return;
  }
};
