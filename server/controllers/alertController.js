const mongoose = require('mongoose');
require('../models/alert.model');
const Alert = mongoose.model('alert');

const AlertController = {
    addAlert: (email, from, to, min, max) => {
        const newAlert = new Alert({
            email: email,
            from: from,
            to: to,
            min: min,
            max: max
        });
        return newAlert.save();
    }
};


module.exports = AlertController;