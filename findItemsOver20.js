//list objects
var itemList = [
    { name : 'apples',  price   : 10 },
    { name : 'pears',   price   : 37 },
    { name : 'bananas', price   : 27 },
    { name : 'apples',  price   : 3  },
];

module.exports = function(itemList){
//function
function findItemsOver20(list) {
    var itemsOver = [];

    for (var i = 0; i < list.length; i++) {
        var listName = list[i];
        var price = listName.price;

        if (list[i].price > 20) {
            listName.push({
                'item': itemsOver
            });
        }
    }

    return itemsOver;
};
};

//log output
// console.log(findItemsOver20(itemList, 20));
