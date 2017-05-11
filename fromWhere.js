module.exports = function(regNum) {


// var fromWhere = function(regNum) {
  if (regNum.startsWith('CY')) {
      return 'Bellville';
    }
    else if (regNum.startsWith('CJ')) {
      return 'Paarl';
    }
    else if (regNum.startsWith('CA')){
      return 'Cape Town';
    }
    else {
      return 'Car location unknown';
    }
  };

// console.log(fromWhere('CJ'));
// console.log(fromWhere('CF'));
