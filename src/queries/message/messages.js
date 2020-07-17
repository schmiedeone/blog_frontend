import gql from "graphql-tag";

const MESSAGES_QUERY = gql`
query Messages($id: ID!) {
  message(id: $id) {
    name
    description
    image {
      url
    }
  }
}
`;

export default MESSAGES_QUERY