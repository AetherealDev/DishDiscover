const typeDefs = `

type User {
  _id: ID
  username: String
  email: String
  restaurantCount: Int
  savedRestaurants: [Restaurant]
}

type Restaurant {
    restaurantId: String 
    image: String
    name: String
    address: String
    rating: Float
}

input RestaurantInput {
    restaurantId: String 
    image: String
    name: String
    address: String
    rating: Float
}

type GoogleRestaurant {
    place_id: String
    name: String
    vicinity: String
    rating: Float
    user_ratings_total: Int
}

type Auth {
  token: ID!
  user: User
}

type Query {
  me: User
  searchRestaurants(term: String!): [GoogleRestaurant]
}

type Mutation {
  loginUser(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveRestaurant(input: RestaurantInput): User
  removeRestaurant(restaurantId: String!): User
}

`

module.exports = typeDefs;