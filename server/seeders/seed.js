const db = require('../config/connection');
const { User, Restaurant } = require('../models');
const userSeeds = require('./userSeeds.json');
const restaurantSeeds = require('./restaurantSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('restaurant', 'restaurants');
    await cleanDB('User', 'users');

    const users = await User.create(userSeeds);
    const restaurants = await Restaurant.create(restaurantSeeds);


  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
