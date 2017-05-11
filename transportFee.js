
module.exports = function (shift) {
// var transportFee = function(shift) {
  if (shift.includes('morning')) {
    return 'R10';
  }
  else if (shift.includes('afternoon')) {
    return 'R20';
  }
  else if (shift.includes('night')) {
    return 'transport cost is nothing!';
  }
  else {
    return 'Please make sure you are specifying correct shift'
  }
};
