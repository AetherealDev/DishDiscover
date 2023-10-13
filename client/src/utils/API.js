import axios from 'axios';

export const getNearbyRestaurants = async () => {
    const params = {
        location: '40.7128,-74.0060',
        radius: 500,
        type: 'restaurant',
        key: 'AIzaSyBjVENG2N3Pkgwg-R90W7f39F1p8ZGlFMQ'
    };

    const response = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', { params });
    console.log(response.data);
    return response.data;
};