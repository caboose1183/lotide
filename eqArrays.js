const _ = require('./index');

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertArraysEqual = function(array1, array2) {
  if (_.eqArrays(array1, array2)) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
  }
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;

  if (_.eqArrays(object1, object2)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i in array1) {
    let item1 = array1[i];
    let item2 = array2[i];

    let array1Check = Array.isArray(item1);
    let array2Check = Array.isArray(item2);
    let bothArrayCheck = array1Check && array2Check;

    if (bothArrayCheck === false && item1 !== item2
      ||
      bothArrayCheck === true && !eqArrays(item1, item2)) {
      return false;
    }
  }

  return true;
};

module.exports = eqArrays;