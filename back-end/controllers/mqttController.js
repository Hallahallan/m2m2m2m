const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://mqtt.eclipse.org', {clientId: "boatEnd"});

const BoatSchema = require("../models/boat");

client.on('connect', () => {
    console.log("Connected to mqtt")
    client.subscribe('boatMcBoatFace/coordinates')
})

client.on('message', (topic, message) => {
    message = message.toString();

    let latitude = message.split(",")[0]
    let longitude = message.split(",")[1]

    BoatSchema.findOneAndUpdate(
        {name: 'Boat420'},
        {$set: {
                lat : [latitude.slice(0, 2), '.', latitude.slice(2)].join(''),
                lng : [longitude.slice(0, 2), '.', longitude.slice(2)].join(''),
            }},
        {
            upsert: true,
            useFindAndModify: false,
            new: true
        }).then(res => console.log(res))
})
