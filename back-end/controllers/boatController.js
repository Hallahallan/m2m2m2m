const Boat = require('../models/boat');

exports.updateBoat = function (req, res) {
    Boat.find({}, '').then(response => {
        res.send(response);
    })

};

