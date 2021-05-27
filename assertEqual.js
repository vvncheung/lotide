// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙇🏻‍♀️Assertion passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
    return;
  } else {
    console.log(`🙅🏻‍♀️Assertion failed: ${JSON.stringify(actual)} !==  ${JSON.stringify(expected)}`);
    return;
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Hello", "Hello");
// assertEqual("Hello", "hello");
// assertEqual("100", "100");
// assertEqual("100", "-100");

const first = "one";
const two = "second";

assertArraysEqual({first}, {two})