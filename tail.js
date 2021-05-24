const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🙅🏻‍♀️Assertion failed: ${actual} !==  ${expected}`);
  } else {
    return console.log(`🙇🏻‍♀️Assertion passed:" ${actual} === ${expected}`);
  }
};

let newArray = [];

const tail = function(array) {
  for (let i = 1; i < array.length; i++) {
    newArray.push(i);
    return newArray;
  }
};

console.log(newArray);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(words.length, 1);

const emptyArray = [];
tail(emptyArray);
assertEqual(emptyArray.length, 0);

const almostEmptyArray = [];
tail(almostEmptyArray);
assertEqual(almostEmptyArray.length, 0);