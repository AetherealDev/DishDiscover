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
        restaurantId
        image
        name
        address
        rating
      }
    }
  }
}
`

export const LOGIN_USER = gql`
mutation LoginUser($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      restaurantCount
      savedRestaurants {
        restaurantId
        image
        name
        address
        rating
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
      restaurantId
      image
      name
      address
      rating
    }
  }
}
`

export const SAVE_RESTAURANT = gql`
mutation SaveRestaurant($input: RestaurantInput!) {
  saveRestaurant(input: $input) {
    _id
    username
    email
    restaurantCount
    savedRestaurants {
      restaurantId
      image
      name
      address
      rating
    }
  }
}
`

