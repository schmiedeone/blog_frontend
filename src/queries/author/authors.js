import gql from "graphql-tag";

const AUTHORS_QUERY = gql`
  query Authors {
    authors{
      id
      slug
      name
      image {
        url
      }
    }
  }
`;

export default AUTHORS_QUERY