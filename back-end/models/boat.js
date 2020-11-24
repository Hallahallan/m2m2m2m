const mongoose = require('mongoose');
const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://mqtt.eclipse.org')

const Schema = mongoose.Schema;

//Do i need this?
const BoatSchema = new Schema(
    {
        name: {type: String, required: true, max: 100},
        status: {type: Boolean, required: true},
        lat: {type: String, required: true},
        lon: {type: String, required: true},
        state:{type: String, required: true}
    }
);

//Export model
module.exports = mongoose.model('Boat', BoatSchema);