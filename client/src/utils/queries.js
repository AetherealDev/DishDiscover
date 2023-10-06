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
  }
}
`