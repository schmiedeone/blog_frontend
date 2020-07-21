import gql from "graphql-tag";

const CATEGORY_ARTICLES_QUERY = gql`
  query Category($id: ID!) {
    category(id: $id) {
      name
      description
      image {
        url
      }
      articles(sort: "published_at:DESC") {
        id
        title
        content
        image {
          url
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
