const express = require('express');
const travelPrices = require('../data');
const router = express.Router();

const Destination = require('../models/destinations')



router.get('/', (req, res) => {
    const locData = Destination.all
    res.send(locData)
});

router.post('/', (req, res) => {
    const data = req.body;
    const newLoc = Destination.create(data);
    res.send({message: `${newLoc.location} succesfully added to our collection.`})
});



module.exports = router;