import { ApolloClient, gql } from "@apollo/client";

const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql",
});
