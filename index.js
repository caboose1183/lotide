
const assertArraysEqual   = require('./assertArraysEqual');
const assertEqual   = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');

const eqArrays = require('./eqArrays');
const eqObjects   = require('./eqObjects');

const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

const takeUntil   = require('./takeUntil');
const without   = require('./without');

const countLetters   = require('./countLetters');
const countOnly   = require('./countOnly');
const letterPositions = require('./letterPositions');

const findKey   = require('./findKey');
const findKeyByValue = require('./findKeyByValue');

const flatten   = require('./flatten');
const joinList   = require('./joinList');

const map   = require('./map');
const min   = require('./min');
const reverse = require('./reverse');



module.exports = {
  assertArraysEqual:   assertArraysEqual,
  assertEqual:   assertEqual,
  assertObjectsEqual: assertObjectsEqual,

  eqArrays:   eqArrays,
  eqObjects:   eqObjects,

  head:   head,
  tail:   tail,
  middle: middle,

  takeUntil:   takeUntil,
  without:   without,

  countLetters:   countLetters,
  countOnly:   countOnly,
  letterPositions: letterPositions,

  findKey:   findKey,
  findKeyByValue:   findKeyByValue,

  flatten: flatten,
  joinList: joinList,

  map: map,
  min: min,
  reverse: reverse,
};