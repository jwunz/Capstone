const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userpic: {
        type: String,
        default: "" //TODO: replace this with the filler image url later
    },
    posts: {
        type: Array,
        default: []
    },
    dob: {
        type: Date,
        required: true
    },
    friends: {
        type: Array,
        default: []
    },
    role: {
        type: Number,
        default: 0
    }
});

module.exports = User = mongoose.model('user', userSchema);