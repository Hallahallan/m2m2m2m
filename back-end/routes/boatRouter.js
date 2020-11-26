const express = require('express');
const router = express.Router();

// Require controller module.
const boatController = require('../controllers/boatController');

router.get('/boat/boatcoordinates/:id', boatController.updateBoat);

router.post('/boat/boatstatechange', boatController.boatStateChange);

router.post('/boat/boatstatechangeopen', boatController.boatStateChangeOpen);

module.exports = router;