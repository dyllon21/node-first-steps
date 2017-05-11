const assert = require('assert');
var transportFee = require('../transportFee');

describe('transportFee()', function() {
  it("should return 'R10'", function(){
    var morningShift = transportFee('morning');

    assert.equal(morningShift, 'R10');
  });

  it("should return 'R20'", function(){
    var afternoonShift = transportFee('afternoon');

    assert.equal(afternoonShift, 'R20');
  });

  it("should return 'transport cost is nothing!'", function(){
    var nightShift = transportFee('night');

    assert.equal(nightShift, 'transport cost is nothing!');
  });

  it("should return 'Please make sure you are specifying correct shift'", function() {
    var unknownInput = transportFee('evening');

    assert.equal(unknownInput, 'Please make sure you are specifying correct shift');
  });
});
