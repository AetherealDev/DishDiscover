const { Schema, model } = require('mongoose');

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
    },
    url: {
      type: String,
    },
    location: {
      type: String,
    },
    price: {
      type: String,
    },
    rating: {
      type: String,
    },
    phone: {
      type: String,
    },
    review_count: {
      type: String,
    },
    categories: {
      type: String,
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);



const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;
