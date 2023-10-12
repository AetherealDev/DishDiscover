import { gql } from '@apollo/client';


export const QUERY_ME = gql`
query Me {
  me {
    _id
    email
    restaurantCount
    savedRestaurants {
      name
    rating
    place_id
    vicinity
    user_ratings_total
    }
  }, 
}
`
export const QUERY_RESTAURANTS = gql`
query SearchRestaurants($term: String!) {
  searchRestaurants(term: $term) {
    name
    rating
    place_id
    vicinity
    user_ratings_total
  }
}
`