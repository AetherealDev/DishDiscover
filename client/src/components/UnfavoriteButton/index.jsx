import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_RESTAURANT} from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import { Button } from 'react-bootstrap';


const UnfavoriteButton = ({ restaurantId }) => {

    const [removeRestaurant] = useMutation(REMOVE_RESTAURANT, {
        update(cache, { data: { removeRestaurant } }) {
        try {
            cache.writeQuery({
            query: QUERY_ME,
            data: { me: removeRestaurant },
            });
        } catch (e) {
            console.error(e);
        }
        },
    });
    
    const handleRemoveRestaurant = async (restaurantId) => {
        try {
        const { data } = await removeRestaurant({
            variables: { restaurantId },
        });
        } catch (err) {
        console.error(err);
        }
    };
    
    return (
        <Button
        className="btn-block btn-danger"
        onClick={() => handleRemoveRestaurant(restaurantId)}
        >
        Remove this Restaurant
        </Button>
    );
    }

    export default UnfavoriteButton;