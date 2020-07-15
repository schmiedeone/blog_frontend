import gql from "graphql-tag";

const AUTHORS_QUERY = gql`
  query Authors {
    authors{
      id
      name
    }
  }
`;

export default AUTHORS_QUERY