const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🙅🏻‍♀️Assertion failed: ${actual} !==  ${expected}`);
  } else {
    return console.log(`🙇🏻‍♀️Assertion passed:" ${actual} === ${expected}`);
  }
};

const findKey = (object, callback) => {
  let result = "";
  for (const key in object) {
    if (callback(object[key])) {
      result = key;
      return result;
    } else {
      result = undefined;
    }
  }
  return result;
};


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

assertEqual(result, "noma")