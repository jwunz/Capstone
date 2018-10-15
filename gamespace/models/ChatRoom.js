const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = require('mongodb').ObjectID;

//Create Schema
const chatroomSchema = new Schema({
    usersOrClub: {
        type: Array,
        required: true
    },
    messages: {
        type: Array,
        default: []
    }
});


module.exports = Chatroom = mongoose.model('chatroom', chatroomSchema);