//const assert = require('assert');

module.exports = function(regNumber,location){
// var regCheck = function(regNumber,location){
var regCheck2 = regNumber.endsWith(location);
return regCheck2


};
//assert.equal(regCheck("DV 23 NB GP", "GP"),true);
//assert.equal(regCheck("DV 23 LP GP", "MP"),false);
//assert.equal(regCheck("TJ 19 GU TF", "EC"),false);
//assert.equal(regCheck("TJ 19 DI GP", "L"),false)
