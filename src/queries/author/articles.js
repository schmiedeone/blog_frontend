import gql from "graphql-tag";

const AUTHOR_ARTICLES_QUERY = gql`
  query Author($id: ID!) {
    author(id: $id) {
      name
      description
      image {
        url
      }
      articles {
        id
        title
        content
        image {
          url
        }
        category {
          id
          name
        }
      }
    }
  }
`;

export default AUTHOR_ARTICLES_QUERY;