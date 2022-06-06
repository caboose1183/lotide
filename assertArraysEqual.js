const _   = require('./index');

function assertArraysEqual(array1, array2) {
  if (_.eqArrays(array1, array2)) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
  }
}

module.exports = assertArraysEqual;