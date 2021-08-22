import {getMovies, getMovie} from "./db.js";

const resolvers = {
    Query: {
        movies: (parent, {limit, rating}) => getMovies(limit, rating),
    },
    Mutation: {
        getMovie: (parent, {id}) => getMovie(id),
    }
};

export default resolvers;