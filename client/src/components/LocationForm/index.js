// Address, City, State, Zip, Search Radius, and a submit button
// When the submit button is clicked, call the `onSubmit` prop with the form data

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';


const LocationForm = ({ onSubmit }) => {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [radius, setRadius] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ address, city, state, zip, radius });
    };
    
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            />
        </Form.Group>
        <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
        </Form.Group>
        <Form.Group>
            <Form.Label>State</Form.Label>
            <Form.Control
            type="text"
            placeholder="Enter state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            />
        </Form.Group>
        <Form.Group>
            <Form.Label>Zip</Form.Label>
            <Form.Control
            type="text"
            placeholder="Enter zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            />
        </Form.Group>
        <Form.Group>
            <Form.Label>Search Radius (miles)</Form.Label>
            <Form.Control
            type="number"
            placeholder="Enter search radius"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    );
    }