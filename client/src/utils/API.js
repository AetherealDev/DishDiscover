import axios from 'axios';

export const getNearbyRestaurants = async () => {
    const params = {
        location: '40.7128,-74.0060',
        radius: 500,
        type: 'restaurant',
        key: 'YOUR_API_KEY_HERE'
    };

    const response = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', { params });
    return response.data;
};