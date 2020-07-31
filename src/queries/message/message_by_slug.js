import gql from "graphql-tag";

const MESSAGES_SLUG_QUERY = gql`
query Messages($slug: String!) {
  messages(where: {slug: $slug}) {
    name
    description
    image {
      url
    }
  }
}
`;

export default MESSAGES_SLUG_QUERY