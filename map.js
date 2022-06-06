const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
}

function eqArrays(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

function assertArraysEqual(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
  }
}

// const results1 = map(words, word => word[0]);
// console.log(results1);

// assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't'])

module.exports = map;