const assertEqual = require('../assertEqual');
const tail = require('../tail');

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