const typeDefs = `

type User {
  _id: ID
  username: String
  email: String
  restaurantCount: Int
  savedRestaurants: [Book]
}

type Restraunt{
    restaurantId: String
    name: String
    image: String
    url: String
    location: String
    price: String
    rating: String
    phone: String
    review_count: String
    categories: String
}

input RestaurantInput {
    restaurantId: String
    name: String
    image: String
    url: String
    location: String
    price: String
    rating: String
    phone: String
    review_count: String
    categories: String
}

type Auth {
  token: ID!
  user: User
}

type Query {
  me: User
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveRestaurant(input: RestaurantInput): User
  removeRestaurant(restaurantId: String!): User
}

`