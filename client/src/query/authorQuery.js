import { gql } from "@apollo/client";

export const GET_ALL_AUTHORS = gql`
  query GET_ALL_AUTHORS {
    authors {
      name
      age
      id
    }
  }
`;
