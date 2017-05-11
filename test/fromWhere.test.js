const assert = require('assert');
var fromWhere = require('../fromWhere');


describe('fromWhere()', function() {
  it("should return 'Paarl'", function() {
    var location = fromWhere('CJ');

    assert.equal(location, 'Paarl');
  });

  it("should return 'Car location unknown'", function() {
      var location = fromWhere('GP');

      assert.equal(location, 'Car location unknown');
  });
});
