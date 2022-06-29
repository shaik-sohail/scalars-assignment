const { gql } = require("apollo-server");
exports.typeDefs = gql`
  type Query {
    movies: [Movie!]!
  }
  type Movie {
    title: String!
    year: Int!
    cast: [String!]!
    genres: [String!]!
  }
`;
