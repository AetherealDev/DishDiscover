import { gql } from '@apollo/client';


export const QUERY_ME = gql`
query Me {
  me {
    _id
    email
    restaurantCount
    savedRestaurants {
      name
      geometry {
        location {
          lat
          lng
        }
      }
    rating
    place_id
    vicinity
    user_ratings_total
    }
  }, 
}
`

export const QUERY_SAVED_RESTAURANTS = gql`
query getSavedRestaurants {
    savedRestaurants {
      name
       geometry {
        location {
          lat
          lng
        }
      }
    }
  
}
`

export const QUERY_RESTAURANTS = gql`
query SearchRestaurants($term: String!, $location: LocationInput!) {
  searchRestaurants(term: $term, location: $location) {
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
`