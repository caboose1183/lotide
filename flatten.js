const _   = require('./index');

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

const flatten = function(nested) {
  let finalArray = [];

  for (let item of nested) {
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        finalArray.push(item[i]);
      }
    } else {
      finalArray.push(item);
    }
  }

  return finalArray;
};

module.exports = flatten;