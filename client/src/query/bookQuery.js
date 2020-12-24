import { gql } from "@apollo/client";

export const GET_ALL_BOOKS = gql`
  query GET_ALL_BOOKS {
    books {
      name
      genre
      id
      author {
        name
      }
    }
  }
`;
