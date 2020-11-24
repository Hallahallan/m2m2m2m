const Boat = require('../models/boat');

// client.on('connect', () => {
//     client.subscribe('boatMcBoatFace/coordinates')
//     client.subscribe('boatMcBoatFace/state')
// })


exports.updateBoat = function (req, res) {
    res.send("Hallo");
};
//
// client.on('message', (topic, message) => {
//     switch (topic) {
//         case 'boat/coordinates':
//             return handleBoatCoordinates(message)
//         case 'boat/state':
//             return handleBoatState(message)
//     }
//     console.log('No handler for topic %s', topic)
// })
//
// function handleBoatCoordinates (message) {
//     console.log('boat connected status %s', message)
//     connected = (message.toString() === 'true')
// }
//
// function handleBoatState (message) {
//     boatState = message
//     console.log('boat state update to %s', message)
// }

//
// function openBoatDoor () {
//     // can only open door if we're connected to mqtt and door isn't already open
//     if (connected && boatState !== 'open') {
//         // Ask the door to open
//         client.publish('boat/open', 'true')
//     }
// }
//
// function closeBoatDoor () {
//     // can only close door if we're connected to mqtt and door isn't already closed
//     if (connected && boat !== 'closed') {
//         // Ask the door to close
//         client.publish('boat/close', 'true')
//     }
// }

