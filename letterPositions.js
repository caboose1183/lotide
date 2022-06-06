const letterPositions = function (sentence) {
  const results = {};

  sentence = sentence.toLowerCase();

  for (let i in sentence) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]] === undefined) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }


  return results;
};

module.exports = letterPositions;