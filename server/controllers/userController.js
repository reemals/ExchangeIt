const mongoose = require('mongoose');
require('../models/user.model');
const User = mongoose.model('user');

const UserController = {
    login: (username, password) => {
        return User.findOne({username: username, password: password}).then(user => {
            if (user) {
                return Promise.resolve(user);
            } else {
                return Promise.reject("user not found");
            }
        }).catch(err => Promise.reject(err));
    }
};


module.exports = UserController;