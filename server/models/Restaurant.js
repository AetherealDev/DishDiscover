const { Schema } = require('mongoose');

const Restaurant = new Schema({
    place_id: { // saved restaurant id from GooglePlaces
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    vicinity: {
      type: String,
    },
    rating: {
      type: Number, // rating from GooglePlaces
      required: true,
    },
    user_ratings_total: {
        type: Number,
    },
  });

module.exports = Restaurant;