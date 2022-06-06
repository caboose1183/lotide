
const assert = require('chai').assert;
const _   = require('../index');

describe("#findKeyByValue", () => {
  it(`Returns "drama" for { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  }`, () => {
    assert.deepEqual(_.findKeyByValue({ 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    }, "The Wire"), "drama");
  });

});
