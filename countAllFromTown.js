var countAllFromTown = function(regNum, location) {
    var splitReg = regNum.split(',');

    var townList = [];

    var newList = [];
    for (var x = 0; x < splitReg.length; x++) {
        townList.push(splitReg[x]);

        if (townList[x].includes(location)) {
            newList.push(townList[x]);
        }
    }

    return newList.length;
}
var msg = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL')
console.log(msg)

//console.log(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'));
