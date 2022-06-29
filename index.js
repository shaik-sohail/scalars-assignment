const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } = require("./schema");
const { movies } = require("./db");
const resolvers = {
  Query: {
    movies: (parent, args, context) => {
      return movies;
    },
    movie: (parent, args, context) => {
      const index = movies.findIndex((movie) => movie.id === args.id);
      return index !== -1 ? movies[index] : null;
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
