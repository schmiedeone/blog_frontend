import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles(sort: "published_at:DESC", start: 1) {
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

export default ARTICLES_QUERY;
