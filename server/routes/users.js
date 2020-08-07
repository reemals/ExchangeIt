var express = require('express');
var router = express.Router();
const controller = require('../controllers/userController');

/* GET users listing. */
router.get('/login', function(req, res, next) {
  const username = req.query.username;
  const password = req.query.password;
  return controller.login(username, password).then(result => {
    res.json(result);
  }).catch(err => next(err));
});

module.exports = router;
