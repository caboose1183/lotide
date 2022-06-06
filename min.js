const min = function(numbers) {
  let lowestNum = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < lowestNum) {
      lowestNum = numbers[i];
    }
  }
  return lowestNum;
};

module.exports = min;