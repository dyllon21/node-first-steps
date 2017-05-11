const assert = require('assert');
var countAllFromTown = require('../countAllFromTown');

describe('countAllFromTown()', function(){
  it("should count Registration Numbers and return '3'", function() {
    var fromCapeTown = countAllFromTown('CA 123, CA 456, CY 123, CF 456, CA 345', 'CA');
    assert.equal(fromCapeTown, 3);
  });
});
