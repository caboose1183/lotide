
const assert = require('chai').assert;
const _ = require('../index');

describe("#countOnly", () => {
  it(`{ "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false } for [
    "Karl", "Salima", "Agouhanna", "Fang","Kavith","Jason","Salima","Fang","Joe"
  ]`, () => {
    assert.deepEqual(_.countOnly([
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }),

    { Fang: 2, Jason: 1 });
  });

});