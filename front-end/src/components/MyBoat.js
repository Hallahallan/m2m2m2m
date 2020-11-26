import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import {MyMapComponent} from './MyMap';
import Row from "react-bootstrap/Row";
import {Button} from "react-bootstrap";



export const MyBoat = () => {
    const [lat, setLat] = useState(0)
    const [lon, setLon] = useState(0)
    const [boat, setBoat] = useState(0)
    const axios = require('axios');
    useEffect(() => {
        const id = 'Boat420'

        axios.get(`http://localhost:4000/boat/boatcoordinates/id=${id}`)
            .then(function(response){
                for(let boat of response.data) {
                    if(boat.name === 'Boat420') {
                        setBoat(boat);
                    }
                }
            })
    },[])

    const buttonLock = () => {
        axios.post(`http://localhost:4000/boat/boatstatechange`)
    }

    const buttonOpen = () => {
        axios.post(`http://localhost:4000/boat/boatstatechangeopen`)
    }

    return (
        <Container>
            <h1 className="text-center">{boat.name}</h1>
            <Row className="mb-3 mx-auto">
                <Button onClick={buttonLock} className="col-lg-4 col-md-3 col-sm-2 mb-3 mx-auto bg-danger">Lock</Button>
                <Button onClick={buttonOpen} className="col-lg-4 col-md-3 col-sm-2 mb-3 mx-auto bg-success">Open</Button>
            </Row>
            <MyMapComponent isMarkerShown={true} lat={parseFloat(boat.lat)} lng={parseFloat(boat.lng)} />
        </Container>
    );
}