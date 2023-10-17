import React, { useState } from 'react';
import { Form, Row, Col, Dropdown } from 'react-bootstrap';
import { states } from '../../utils/states';
import { usePlacesWidget } from "react-google-autocomplete";


const LocationForm = ({address, onAddressChange, onLocationChange}) => {

    const country = "us";
    const { ref, autocompleteRef } = usePlacesWidget({
        apiKey:"AIzaSyBjVENG2N3Pkgwg-R90W7f39F1p8ZGlFMQ",
        onPlaceSelected: (place) => { 
            const loc = {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            }
            console.log(loc);
            onLocationChange(loc);
            onAddressChange(place.formatted_address);

        },
        inputAutocompleteValue: "country",
        options: {
          componentRestrictions: { country },
        },
    });

    return (
        <Form>
            <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Columbus, Ohio"
                    value={address}
                    onChange={(e) => onAddressChange(e.target.value)}
                    ref={ref} 
                />
            </Form.Group>
        </Form>
    );
}

export default LocationForm;
