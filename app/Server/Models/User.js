const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true 
    },
    country : {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('CustomerData', UserSchema);