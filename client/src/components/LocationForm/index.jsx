import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { states } from '../../utils/states';

const LocationForm = ({ onSubmit }) => {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ address, city, state, zip });
    };
    
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                type="text"
                placeholder="1234 Main St"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                />
            </Form.Group>
            <Row>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group>
                        <Form.Label>State</Form.Label>
                        <Form.Control
                        as="select"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        >
                            <option>Choose...</option>
                            {states.map((state) => (
                                <option key={state.abbreviation}>{state.name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group>
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter zip"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    );
}

export default LocationForm;
