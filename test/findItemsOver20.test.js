const assert = require('assert');
var findItemsOver20 = require('../findItemsOver20');

var itemList = [
    { name : 'apples',  price   : 10 },
    { name : 'pears',   price   : 37 },
    { name : 'bananas', price   : 27 },
    { name : 'apples',  price   : 3  },
];

describe('findItemsOver20()', function() {
    it('should return an object with items over 20', function() {
        var listOne = findItemsOver20(itemList, 20);

        assert.deepEqual(listOne, 20 [{
                Item: {
                    name: 'pears',
                    price: 37
                }
            },
            {
                Item: {
                    name: 'bananas',
                    price: 27
                }
            }
        ]);
    });
});
