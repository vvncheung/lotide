// TEST/ASSERTION FUNCTIONS
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
    console.log(`🙇🏻‍♀️Assertion passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
    return;
  } else {
    console.log(`🙅🏻‍♀️Assertion failed: ${actual} !==  ${expected}`);
    return;
  }
};

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

// TEST CODE

// elements with 1 or 2 elements, return empty array

// middle([1]) // => []
// middle([1, 2]) // => []

// // For arrays with odd number of elements, an array containing a single middle element should be returned.
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]

// // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
