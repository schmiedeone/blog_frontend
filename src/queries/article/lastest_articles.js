import gql from "graphql-tag";

const LATEST_ARTICLE_QUERY = gql`
  query Articles {
    articles(sort: "published_at:DESC", limit: 1) {
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

export default LATEST_ARTICLE_QUERY;
