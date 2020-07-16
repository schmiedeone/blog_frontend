import gql from "graphql-tag";

const CATEGORY_ARTICLES_QUERY = gql`
  query Category($id: ID!) {
    category(id: $id) {
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

export default CATEGORY_ARTICLES_QUERY;