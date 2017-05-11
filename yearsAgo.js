//const assert = require('assert');

module.exports = function(year) {
// var yearsAgo = function(year) {
    const date = new Date('1996-11-13');
    var pastYears = date.getFullYear();
    var difference = year - pastYears;
    return difference

};

// assert.equal(yearsAgo('2016'), 20);
