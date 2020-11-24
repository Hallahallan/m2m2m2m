
const express = require('express');
const router = express.Router();

// Require controller module.
const boatController = require('../controllers/boatController');

router.get('/boatCoordinates/:id', boatController.updateBoat);

module.exports = router;