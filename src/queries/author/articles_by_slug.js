import gql from "graphql-tag";

const AUTHOR_ARTICLES_SLUG_QUERY = gql`
  query Authors($slug: String!) {
    authors(where: {slug: $slug}) {
      name
      description
      image {
        url
      }
      articles(sort: "published_at:DESC") {
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
      }
    }
  }
`;

export default AUTHOR_ARTICLES_SLUG_QUERY;
