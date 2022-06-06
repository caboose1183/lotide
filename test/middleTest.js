
const assert = require ('chai').assert;
const middle = require ('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [] for [65,70,90,70,80,505]", () => {
    assert.deepEqual(middle([65,70,90,70,80,505]), [90, 70]); 
  });

  it("returns [] for ['5']", () => {
    assert.deepEqual(middle(['5']), []); 
  });


});
