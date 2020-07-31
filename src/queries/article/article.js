import gql from "graphql-tag";

const ARTICLE_SLUG_QUERY = gql`
  query Articles($slug: String!) {
    articles(where: {slug: $slug}) {
      id
      slug
      title
      content
      image {
        url
      }
      category {
        id
        slug
        name
      }
      author {
        id
        slug
        name
      }
      published_at
    }
  }
`;

export default ARTICLE_SLUG_QUERY;
