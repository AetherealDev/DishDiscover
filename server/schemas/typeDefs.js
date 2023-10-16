const typeDefs = `


input GeometryInput {
  location: LocationInput
  viewport: ViewportInput
}

input LocationInput {
  lat: Float
  lng: Float
}

input ViewportInput {
  northeast: LocationInput
  southwest: LocationInput
}


input RestaurantInput {
  place_id: String
  name: String
  vicinity: String
  rating: Float
  user_ratings_total: Int
  geometry: GeometryInput
}


type User {
  _id: ID
  username: String
  email: String
  restaurantCount: Int
  savedRestaurants: [GoogleRestaurant]
}

type Geometry {
  location: Location
  viewport: Viewport
}

type Location {
  lat: Float
  lng: Float
}

type Viewport {
  northeast: Location
  southwest: Location
}

type GoogleRestaurant {
    place_id: String
    name: String
    vicinity: String
    rating: Float
    user_ratings_total: Int
    geometry: Geometry
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

