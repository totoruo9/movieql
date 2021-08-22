import {getMovies} from "./db.js";

const resolvers = {
    Query: {
        movies: (parent, {limit, rating}) => getMovies(limit, rating),
    },
};

export default resolvers;