const { Schema } = require('mongoose');

const locationSchema = new Schema({
    lat: Number,
    lng: Number
  });

  const viewportSchema = new Schema({
    northeast: Object,
    southwest: Object
  });
  
  const geometrySchema = new Schema({
    location: locationSchema,
    viewport: viewportSchema
  });
  
  const photoSchema = new Schema({
    height: Number,
    html_attributions: [String],
    photo_reference: String,
    width: Number
  });

  const plusCodeSchema = new Schema({
    compound_code: String,
    global_code: String
  });
  
const restaurantSchema = new Schema({
    business_status: String,
    geometry: geometrySchema,
    icon: String,
    icon_background_color: String,
    icon_mask_base_uri: String,
    name: String,
    opening_hours: { open_now: Boolean },
    photos: [photoSchema],
    place_id: String,
    plus_code: plusCodeSchema,
    rating: Number,
    reference: String,
    scope: String,
    types: [String],
    user_ratings_total: Number,
    vicinity: String
  });
  