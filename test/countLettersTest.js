
const assert = require('chai').assert;
const _   = require('../index');

describe("#countLetters", () => {
  it(`Returns { t: 3, h: 1, i: 4, s: 3, a: 2, p: 1, r: 2, c: 2, e: 1, n: 1, g: 1 } for 'This is a practice string'`, () => {
    assert.deepEqual(_.countLetters("This is a practice string"), { t: 3, h: 1, i: 4, s: 3, a: 2, p: 1, r: 2, c: 2, e: 1, n: 1, g: 1 });
  });

});
