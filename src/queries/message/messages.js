import gql from "graphql-tag";

const MESSAGE_QUERY = gql`
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

export default MESSAGE_QUERY