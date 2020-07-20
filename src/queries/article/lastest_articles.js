import gql from "graphql-tag";

const LATEST_ARTICLES_QUERY = gql`
  query Articles {
    articles(sort: "published_at:DESC", limit: 2) {
      id
      title
      category {
        id
        name
      }
      author {
        id
        name
      }
      image {
        url
      }
    }
  }
`;

export default LATEST_ARTICLES_QUERY;
