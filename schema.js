const { gql } = require("apollo-server");
exports.typeDefs = gql`
  type Query {
    movies: [Movie!]!
    movie(id: ID!): Movie
  }
  type Movie {
    id: ID!
    title: String!
    year: Int!
    cast: [String!]!
    genres: [String!]!
  }
`;
