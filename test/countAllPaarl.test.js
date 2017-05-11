const assert = require('assert');
var countAllPaarl = require('../countAllPaarl');

describe('countAllPaarl()', function() {
  it("should return '2'", function() {
    var output = countAllPaarl('CA 345-155,CJ 555-555,CL 345 789,CJ 444-444');

    assert.equal(output, 2);
  });

  it("should return '4'", function() {
    var output = countAllPaarl('CJ 345-155,CJ 555-555,CA 2398472,CJ 345 789,CJ 444-444');

    assert.equal(output, 4);
  });

  it("should return '0'", function() {
    var output = countAllPaarl('CA 345-155,CF 555-555,CL 345 789,CL 444-444');

    assert.equal(output, 0);
  });
})
