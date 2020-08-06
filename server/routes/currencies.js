var express = require('express');
const controller = require('../controllers/currencyController');

var router = express.Router();

router.get('/', function(req, res, next) {
    const from = req.query.from;
    const to = req.query.to;
    controller.getExchangeRate(from, to).then((rate) => {
        res.json(rate)
    }).catch((err) => {
        next(err);
    })
});

router.get('/exchange', function(req, res, next) {
    const from = req.query.from;
    const to = req.query.to;
    const amount = req.query.amount;
    controller.convertCurrency(from, to , amount).then((result) => {
        res.json(result)
    }).catch((err) => {
        next(err);
    })
});

module.exports = router;