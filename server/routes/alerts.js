var express = require('express');
const controller = require('../controllers/alertController');

var router = express.Router();

/* POST new alert. */
router.post('/', function(req, res, next) {
   const email = req.body.email;
   const from = req.body.from;
   const to = req.body.to;
   const min = req.body.min;
   const max = req.body.max;
   controller.addAlert(email, from, to, min, max)
       .then(newAlert => res.json(newAlert))
       .catch(err => next(err));
});

module.exports = router;