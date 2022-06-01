const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function (string) {
  string = string.replace (/\s/g, '');
  string = string.toLowerCase();
  let letterCount = {};

  for (let letter of string) {
    if (letterCount[letter] === undefined) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter] ++;
    }
  }

  return letterCount;
}

console.log (countLetters("This is a practice string"))