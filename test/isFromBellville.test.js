const assert = require('assert');
var isFromBellville = require('../isFromBellville');

describe('isFromBellvillefunction()', function(){
  it('should locate bellville', function(){
    assert.equal(isFromBellville('CY12345'),true)
  })
})
