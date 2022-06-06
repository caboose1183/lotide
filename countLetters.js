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

module.exports = countLetters;