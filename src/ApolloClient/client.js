import { ApolloClient, ApolloLink, InMemoryCache, HttpLink, concat } from "@apollo/client";


const httpLink = new HttpLink({
  //uri: process.env.REACT_APP_GRAPHQL_SERVER
  uri: "http://localhost:9001/graphql"
});

// const authMiddleware = new ApolloLink((operation, forward) => {
//   let jwtToken = `${cookies.get('tokenHead')}.${cookies.get('tokenSig')}`
//   // add the authorization to the headers
//   operation.setContext(({ headers = {} }) => ({
//     headers: {
//       ...headers,
//       Authorization: `Bearer ${jwtToken}` || null,
//     }
//   }));

//   return forward(operation);
// })

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});