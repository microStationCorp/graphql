import { gql } from "@apollo/client";

const ADD_BOOK_MUTATION = gql`
  mutation ADD_BOOK_MUTATION($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

export {ADD_BOOK_MUTATION}