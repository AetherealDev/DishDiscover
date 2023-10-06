const { Schema } = require('mongoose');

const Restaurant = new Schema({
    restaurantId: { // saved restaurant id from GooglePlaces
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    address: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
        type: Number,
    },
  });

module.exports = Restaurant;