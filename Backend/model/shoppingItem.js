var mongoose = require('mongoose');

var shoppingItem = mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    numberOfItems: {
        type: String,
        required: true,
    },
    bought: {
        type: Boolean,
        required: true,
    }

}, {
        versionKey: false
    })
module.exports = mongoose.model('item', shoppingItem);