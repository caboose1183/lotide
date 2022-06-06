const middle = require ('../middle');
const assertArraysEqual = require ('../assertArraysEqual');


const array = [65,70,90,70,80,505];

assertArraysEqual(middle (array), [90,70]);