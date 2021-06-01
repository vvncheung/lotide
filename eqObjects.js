const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🙅🏻‍♀️Assertion failed: ${actual} !==  ${expected}`);
  } else {
    return console.log(`🙇🏻‍♀️Assertion passed:" ${actual} === ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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


module.exports = eqObjects;


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false