const Boat = require("../models/boat");
const mqtt = require('mqtt');

exports.updateBoat = function (req, res) {
    Boat.find({}, '').then(response => {
        res.send(response);
    })
};

exports.boatStateChange =
    function(req, res) {
    const client = mqtt.connect('mqtt://mqtt.eclipse.org', {clientId: "boatEnd", port: 1883});
        client.publish('boatMcBoatFace/lock', "Lock");
}

exports.boatStateChangeOpen =
    function(req, res) {
        const client = mqtt.connect('mqtt://mqtt.eclipse.org', {clientId: "boatEnd", port: 1883});
        client.publish('boatMcBoatFace/lock', "Open");
    }
