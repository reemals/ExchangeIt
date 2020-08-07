const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    username: String,
    email: String,
    displayName: String,
    password: String, // should be encrypted
});

mongoose.model('user', userSchema);