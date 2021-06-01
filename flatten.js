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


// interation, no more than 1 nested array per element
const flatten = function(array) {
  const flattenedArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flattenedArr.push(array[i][j]);
      }
    } else {
      flattenedArr.push(array[i]);
    }
  }
  return flattenedArr;
};

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

// using recursion

const flattenRecursion = function(array) {
  let flattenedArr = [];
  array.forEach((element) => {
    if (Array.isArray(element)) {
      flattenedArr = flattenedArr.concat(element); // [3,4]
    } else {
      flattenedArr.push(element);
    }
  });
  return flattenedArr;
};

// assertArraysEqual(flattenRecursion([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;