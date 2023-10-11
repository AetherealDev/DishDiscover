const nearbySearch = async (lat, lon) => {
    // 37.7749° N, 122.4194° W for testing purposes
    lat = lat || 39.983334;
    lon = lon || -82.983330;
    
    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=500&type=restaurant&key=AIzaSyBjVENG2N3Pkgwg-R90W7f39F1p8ZGlFMQ`);
        const data = await response.json();
        console.log(data.results);
        return data;
    } catch (error) {
        console.error(error);
    }
}

module.exports = nearbySearch;
