'use strict';

const args = process.argv;
let array = args.slice(2);

const pigLatinatorOneWord = function(string) {
  let pigLatinedString = "";
  let editedString = string.slice(1);
  pigLatinedString = editedString + string.charAt(0) + "ay";
  return pigLatinedString;
};

const pigLatin = function(string) {
  let finalString = "";
  for (let i = 0; i < string.length; i++) {
    finalString += pigLatinatorOneWord(string[i]) + " ";
  }
  console.log(finalString);
};

module.exports = pigLatin;

