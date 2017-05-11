// assert = require('assert');
module.exports = function(weekday){
// var isWeekday = function(weekday){

    var arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    var today = arr[weekday];

    var result = today;

  if (result.startsWith('S') == true) {
    return false;
  } else {
    return true;
  }
};


 const todayDay = new Date;

// console.log(isWeekday(todayDay.getDay()-1));
//assert.equal(isWeekday('weekday'),false) ;
