import gql from "graphql-tag";

const AUTHOR_ARTICLES_QUERY = gql`
  query Author($id: ID!) {
    author(id: $id) {
      name
      description
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
        author {
          id
          name
        }
      }
    }
  }
`;

export default AUTHOR_ARTICLES_QUERY;