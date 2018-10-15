const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = require('mongodb').ObjectID;

//Create Schema
const clubSchema = new Schema({
    clubName: {
        type: String,
        required: true
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    clubPic: {
        type: String,
        default: ""
    },
    members: {
        type: Array,
        required: true
    },
    posts: {
        type: Array,
        default: []
    }
});

module.exports = Club = mongoose.model('club', clubSchema);