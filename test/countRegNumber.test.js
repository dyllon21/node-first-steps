const assert = require('assert');
var countRegNumber = require('../countRegNumber')

describe('countRegNumberfunction ()', function(){
  it('should print 3', function(){
  assert.equal(countRegNumber('CY 1234,GD 1111,AB 3421'), 3);
  })
})
