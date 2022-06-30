const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } = require("./schema");
const { movies } = require("./db");
const { resolvers } = require("./resolvers/Query");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    movies,
  },
});
server.listen().then(({ url }) => {
  console.log("Listening at : " + url);
});
