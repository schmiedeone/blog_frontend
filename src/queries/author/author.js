import gql from "graphql-tag";

const AUTHOR_QUERY = gql`
  query Authors($id: ID!) {
    author(id: $id) {
      id
      name
      image {
        url
      }
      description
    }
  }
`;

export default AUTHOR_QUERY;
