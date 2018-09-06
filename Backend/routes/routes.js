var express = require('express');
var router = express.Router();


module.exports = router;
const item = require('../model/shoppingItem');


router.get('/items', (req, res) => {
    item.find((err, items) => {
        if (err) {
            res.json(err);
        }
        if (items) {
            res.json(items);
        }
    })

});
router.post('/item', (req, res) => {
    let newItem = new item({
        itemName: req.body.itemName,
        numberOfItems: req.body.numberOfItems,
        bought: req.body.bought
    });
    console.log(newItem);
    newItem.save((err, item) => {
        if (err) {
            (res.json(err));
        }
        if (item) {
            res.json({msg: "added successfully"});
        }

    })
});
router.put('/item/:id', (req, res, next) => {
    item.findByIdAndUpdate({_id: req.params.id}, {
            $set: {
                itemName: req.body.itemName,
                numberOfItems: req.body.numberOfItems,
                bought: req.body.bought

            }
        },
        function (err, result) {
            if (err) {
                (res.json(err));
            }
            else {
                res.json(result);
            }


        })


});
router.delete('/item/:id', (req, res) => {
    item.remove({_id: req.params.id}, function (err) {
        if (err) {
            res.json(err);
        }
        else {
            res.json({msg: "deleted successfully"});
        }
    })

});