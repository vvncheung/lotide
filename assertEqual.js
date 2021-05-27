// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🙇🏻‍♀️Assertion passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
    return;
  } else {
    console.log(`🙅🏻‍♀️Assertion failed: ${JSON.stringify(actual)} !==  ${JSON.stringify(expected)}`);
    return;
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Hello", "Hello");
assertEqual("Hello", "hello");
assertEqual("100", "100");
assertEqual("100", "-100");