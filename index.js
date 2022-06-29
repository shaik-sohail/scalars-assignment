const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } = require("./schema");
const { movies } = require("./db");
const resolvers = {
  Query: {
    movies: (parent, args, context) => {
      return movies;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.listen().then(({ url }) => {
  console.log("Listening at : " + url);
});
