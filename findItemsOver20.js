//list objects
var itemList = [
    { name : 'apples',  price   : 10 },
    { name : 'pears',   price   : 37 },
    { name : 'bananas', price   : 27 },
    { name : 'apples',  price   : 3  },
];

//function
function findItemsOver20(list) {
    var itemsOver = [];

    for (var i = 0; i < list.length; i++) {
        var listName = list[i];
        var price = listName.price;

        if (list[i].price > 20) {
            itemsOver.push({
                'Item': listName
            });
        }
    }

    return itemsOver;
};

var msg = findItemsOver20('itemList, 20');
console.log(findItemsOver20(itemList, 20));
// console.log(findItemsOver20);

//log output
