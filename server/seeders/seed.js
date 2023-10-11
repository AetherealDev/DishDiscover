const db = require('../config/connection');
const { User, Restaurant } = require('../models');
const userSeeds = require('./userSeeds.json');
const restaurantSeeds = require('./restaurantSeeds.json');

db.once('open', async () => {
  try {

   // delete all existing data
    await User.deleteMany({});


    const users = await User.create(userSeeds);


  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
