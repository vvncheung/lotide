const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🙇🏻‍♀️Assertion passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
    return;
  } else {
    console.log(`🙅🏻‍♀️Assertion failed: ${JSON.stringify(actual)} !==  ${JSON.stringify(expected)}`);
    return;
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (let item of allItems) {
    if (item === allItems[itemsToCount]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

