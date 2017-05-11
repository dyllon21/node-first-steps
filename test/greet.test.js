const assert = require('assert');
var greet = require('../greet');

describe('greetfunction()', function(){
  it('should greet Janine correctly', function(){
    assert.equal(greet('Janine'), 'Hello, Janine');
  });

});
