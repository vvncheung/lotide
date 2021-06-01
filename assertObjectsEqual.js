const eqObjects = function(object1, object2) {
  let eqObjects = true;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    eqObjects = false;
    return eqObjects;
  }
  
  for (const key of Object.keys(object1)) {
    if (object1[key] && object2[key]) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          eqObjects = false;
          return eqObjects;
        }
      } else if (object1[key] !== object2[key]) {
        eqObjects = false;
        return eqObjects;
      }
    }
  }
  return eqObjects;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    return console.log(`🙅🏻‍♀️Assertion failed: ${inspect(actual)} !==  ${inspect(expected)}`);
  } else {
    return console.log(`🙇🏻‍♀️Assertion passed:" ${actual} === ${expected}`);
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 2, c: 3 });

module.exports = assertObjectsEqual;