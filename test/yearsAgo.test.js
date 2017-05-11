const assert = require('assert');
var yearsAgo = require('../yearsAgo');

describe('yearsAgofunction()', function(){
  it('should tell how many yearsAgo it was', function(){
    assert.equal(yearsAgo(2016), 20);
  })

})
