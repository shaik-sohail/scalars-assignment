exports.resolvers = {
  Query: {
    movies: (parent, args, { movies }) => {
      return movies;
    },
    movie: (parent, { id }, { movies }) => {
      const index = movies.findIndex((movie) => movie.id === id);
      return index !== -1 ? movies[index] : null;
    },
  },
};
