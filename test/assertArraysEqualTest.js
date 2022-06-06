const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual([1, 2, 3], [1, 2, "3"]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 3]);