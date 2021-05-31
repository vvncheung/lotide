const assertEqual = require('./assertEqual');

let newArray = [];

const tail = function(array) {
  for (let i = 1; i < array.length; i++) {
    newArray.push(i);
    return newArray;
  }
};

module.exports = tail;