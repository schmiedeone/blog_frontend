import gql from "graphql-tag";

const CATEGORY_ARTICLES_SLUG_QUERY = gql`
  query Categories($slug: String!) {
    categories(where: {slug: $slug}) {
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
        author {
          id
          slug
          name
        }
      }
    }
  }
`;

export default CATEGORY_ARTICLES_SLUG_QUERY;
