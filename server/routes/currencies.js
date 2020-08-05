var express = require('express');
const controller = require('../controllers/currencyController');

var router = express.Router();

router.get('/', function(req, res, next) {
    const from = req.body.from;
    const to = req.body.to;
    controller.getExchangeRate(from, to).then((rate) => {
        res.json(rate)
    }).catch((err) => {
        next(err);
    })
});

router.get('/exchange', function(req, res, next) {
    const from = req.body.from;
    const to = req.body.to;
    const amount = req.body.amount;
    controller.convertCurrency(from, to , amount).then((result) => {
        res.json(result)
    }).catch((err) => {
        next(err);
    })
});

module.exports = router;