// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log("🙅🏻‍♀️Assertion failed: " + actual + " !== " + expected);
  } else {
    return console.log("🙇🏻‍♀️Assertion passed: " + actual + " === " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Hello", "Hello");
assertEqual("Hello", "hello");
assertEqual("100", "100");
assertEqual("100", "-100");