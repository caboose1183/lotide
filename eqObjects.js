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

const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);


  if (key1.length !== key2.length) {
    return false;
  }


  for (let key of key1) {
    let item1 = object1[key];
    let item2 = object2[key];

    let object1Check = Array.isArray(item1) === false && typeof item1 === 'object';
    let object2Check = Array.isArray(item2) === false && typeof item2 === 'object';
    let bothObjectCheck = object1Check && object2Check;

    if (bothObjectCheck === false && item1 !== item2
      ||
      bothObjectCheck === true && !eqObjects(item1, item2)) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;