//list objects
var itemList = [
    { name : 'apples',  price   : 10 },
    { name : 'pears',   price   : 37 },
    { name : 'bananas', price   : 27 },
    { name : 'apples',  price   : 3  },
];

var itemList2 = [
    { name : 'jeans',  price    : 299.99 },
    { name : 'shirt',  price    : 99.99  },
    { name : 'jacket', price    : 499.99 },
];

//function
function findItemsOver(list, threshold) {
    var overObj = [];

    for (var i = 0; i < list.length; i++) {
        var listName = list[i];
        var price = listName.price;

        if (list[i].price > threshold) {
            overObj.push({
                'Item': listName
            });
        }
    }

    return overObj;
};
var msg = findItemsOver('itemList, 20')
console.log(msg);

//log output
console.log(findItemsOver(itemList, 20));
//console.log(" ");
console.log(findItemsOver(itemList2, 100));
