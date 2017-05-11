const assert = require('assert');
var regCheck = require('../regCheck');

describe('regCheckfunction()', function(){
  it('should check which regNumber it is from', function(){
   assert.equal(regCheck("DV 23 NB GP", "GP"),true)
   assert.equal(regCheck("DV 23 LP GP", "MP"),false)
 });
});
