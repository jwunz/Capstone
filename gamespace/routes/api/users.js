const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User');

// @route   GET api/users
// @desc    Get All Users
// @access  Public
router.get('/', (req, res) => {
    User.find()
        .sort({ date: -1 })
        .then(users => res.json(users));
});

// @route   POST api/users
// @desc    Create An User
// @access  Public
router.post('/', (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        dob: new Date(req.body.dob)
    });

    newUser.save().then(user => res.json(user));
});

// @route   DELETE api/users/:id
// @desc    Create An User
// @access  Public
router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});


module.exports = router;