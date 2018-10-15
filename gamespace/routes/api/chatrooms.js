const express = require('express');
const router = express.Router();

// Chatroom Model
const Chatroom = require('../../models/Chatroom');

// @route   GET api/chatrooms
// @desc    Get All Chatrooms
// @access  Public
router.get('/', (req, res) => {
    Chatroom.find()
        .sort({ date: -1 })
        .then(chatrooms => res.json(chatrooms));
});

// @route   POST api/chatrooms
// @desc    Create An Chatroom
// @access  Public
router.post('/', (req, res) => {
    const newChatroom = new Chatroom({
        usersOrClub: req.body.usersOrClub
    });

    newChatroom.save().then(chatroom => res.json(chatroom));
});

// @route   DELETE api/chatrooms/:id
// @desc    Create An Chatroom
// @access  Public
router.delete('/:id', (req, res) => {
    Chatroom.findById(req.params.id)
        .then(chatroom => chatroom.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});


module.exports = router;