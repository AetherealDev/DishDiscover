import { gql } from '@apollo/client';


export const QUERY_ME = gql`
query Me {
  me {
    _id
    email
    restaurantCount
    savedRestaurants {
      restaurantId
      address
      image
      name
      rating
    }
  }, 
}
`
export const QUERY_RESTAURANTS = gql`
query SearchRestaurants($location: String!) {
  searchRestaurants(location: $location) {
    place_id
    name
    vicinity
    rating
    user_ratings_total
  }
}
`