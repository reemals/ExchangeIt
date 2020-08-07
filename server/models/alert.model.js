const mongoose = require('mongoose');
const {Schema} = mongoose;

const alertSchema = new Schema({
    email: String,
    from: String,
    to: String,
    min: Number,
    max: Number,
});

mongoose.model('alert', alertSchema);