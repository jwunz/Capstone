const express = require('express');
const router = express.Router();

// Club Model
const Club = require('../../models/Club');

// @route   GET api/clubs
// @desc    Get All Clubs
// @access  Public
router.get('/', (req, res) => {
    Club.find()
        .sort({ date: -1 })
        .then(clubs => res.json(clubs));
});

// @route   POST api/clubs
// @desc    Create An Club
// @access  Public
router.post('/', (req, res) => {
    const newClub = new Club({
        clubName: req.body.clubName,        
        ownerId: req.body.ownerId,
        members: req.body.members
    });

    newClub.save().then(club => res.json(club));
});

// @route   DELETE api/clubs/:id
// @desc    Create An Club
// @access  Public
router.delete('/:id', (req, res) => {
    Club.findById(req.params.id)
        .then(club => club.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});


module.exports = router;