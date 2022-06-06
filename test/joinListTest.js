
const assert = require('chai').assert;
const _   = require('../index');

describe("#joinList", () => {
  it(`returns 'gists, types, operators, iteration, problem solving' for ["gists", "types", "operators", "iteration", "problem solving"]`, () => {
    assert.deepEqual(_.joinList (["gists", "types", "operators", "iteration", "problem solving"]), 'gists, types, operators, iteration, problem solving');
  });

});

