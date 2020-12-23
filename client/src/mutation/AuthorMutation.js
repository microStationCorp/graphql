import { gql } from "@apollo/client";

const ADD_AUTHOR_MUTATION = gql`
  mutation ADD_AUTHOR_MUTATION($name: String!, $age: Int!) {
    addAuthor(name: $name, age: $age) {
      id
    }
  }
`;

export { ADD_AUTHOR_MUTATION };
