const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://mqtt.eclipse.org', {clientId: "boatEnd"});

const BoatSchema = require("../models/boat");

client.on('connect', () => {
    console.log("Connected to mqtt")
    client.subscribe('keklife/kekcity')
})

client.on('message', (topic, message) => {
    message = message.toString();

    const updateObject = {
        lat: message.split(",")[0],
        lon: message.split(",")[1]
    }
    console.log('topic:', topic);
    console.log('message:', message);

    BoatSchema.findOneAndUpdate(
        {name: 'Boat420'},
        {$set: updateObject},
        {
            upsert: true,
            useFindAndModify: false,
            new: true
        }).then(res => console.log(res))
})