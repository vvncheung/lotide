const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🙇🏻‍♀️Assertion passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
    return;
  } else {
    console.log(`🙅🏻‍♀️Assertion failed: ${JSON.stringify(actual)} !==  ${JSON.stringify(expected)}`);
    return;
  }
};

const countLetters = function(string) {
  
  const results = {};

  for (let letter of string) {
    if (letter !== '') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

// console.log(countLetters('Lighthouse in the house'));

module.exports = countLetters;