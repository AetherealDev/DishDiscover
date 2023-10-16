import React, { useState } from 'react';
import { Form, Row, Col, Dropdown } from 'react-bootstrap';
import { states } from '../../utils/states';

const LocationForm = ({city, state, address, onAddressChange, onCityChange, onStateChange}) => {

    
    return (
        <Form>
            <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                type="text"
                placeholder="1234 Main St"
                value={address}
                onChange={(e) => onAddressChange(e.target.value)}
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
                        onChange={(e) => onCityChange(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>State</Form.Label>
                        <Form.Control
                        as="select"
                        value={state}
                        onChange={(e) => onStateChange(e.target.value)}
                        >
                            <option>Choose...</option>
                            {states.map((state) => (
                                <option key={state.abbreviation}>{state.name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    );
}

export default LocationForm;
