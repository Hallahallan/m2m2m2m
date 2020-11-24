import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import {MyMapComponent} from './MyMap';
import Row from "react-bootstrap/Row";
import {Button} from "react-bootstrap";

const axios = require('axios');

export const MyBoat = () => {
    const [lat, setLat] = useState(0)
    const [lon, setLon] = useState(0)
    const [boat, setBoat] = useState(0)
    useEffect(() => {
        const id = 'Boat420'

        axios.get(`http://localhost:4000/boatCoordinates/id=${id}`)
            .then(function(response){
                for(let boat of response.data) {
                    if(boat.name === 'Boat420') {
                        setBoat(boat);
                    }
                }
            })
    })
    return (
        <Container>
            <h1>this is my boat: {boat.name}</h1>
            <Row className="mb-3 mx-auto">
                <h4 className="col-8">Coordinates:lat: {boat.lat} lng: {boat.lng}</h4>
                <Button className="col-4">Handle Lock</Button>
            </Row>
            <MyMapComponent isMarkerShown={true} lat={parseFloat(boat.lat)} lng={parseFloat(boat.lng)} />
        </Container>
    );
}