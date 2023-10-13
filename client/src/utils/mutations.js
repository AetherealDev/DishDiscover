import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      restaurantCount
      savedRestaurants {
        name
    rating
    place_id
    vicinity
    user_ratings_total
      }
    }
  }
}
`

export const LOGIN_USER = gql`
mutation LoginUser($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      restaurantCount
      savedRestaurants {
        name
    rating
    place_id
    vicinity
    user_ratings_total
      }
    }
  }
}
`

export const REMOVE_RESTAURANT = gql`
mutation RemoveRestaurant($restaurantId: String!) {
  removeRestaurant(restaurantId: $restaurantId) {
    _id
    username
    email
    restaurantCount
    savedRestaurants {
      name
    rating
    place_id
    vicinity
    user_ratings_total
    }
  }
}
`

export const SAVE_RESTAURANT = gql`
mutation SaveRestaurant($input: RestaurantInput) {
  saveRestaurant(input: $input) {
    _id
    restaurantCount
    email
    username
    savedRestaurants {
      place_id
      name
      vicinity
      rating
      user_ratings_total
      geometry {
        location {
          lat
          lng
        }
        viewport {
          northeast {
            lat
            lng
          }
          southwest {
            lat
            lng
          }
        }
      }
    }
  }
}
`

