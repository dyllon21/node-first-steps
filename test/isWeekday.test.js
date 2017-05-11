const assert = require('assert');
var isWeekday = require('../isWeekday');

describe('isWeekdayfunction()',function(){
  it('should print out specific weekday',function(){
    var date = new Date;

    assert.equal(isWeekday(date.getDay()-1), true);
});
});
