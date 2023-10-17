const nearbySearch = async (term, location) => {
    try {
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=5000&type=restaurant&keyword=${term}&key=AIzaSyBjVENG2N3Pkgwg-R90W7f39F1p8ZGlFMQ`;
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
       // console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

module.exports = nearbySearch;
