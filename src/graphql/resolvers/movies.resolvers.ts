import { ApolloError } from 'apollo-server-core';
import { Movies } from '../../service/movies.service';
import {
  MutationAddMovieArgs,
  MutationDeleteMovieArgs,
  MutationUpdateMovieArgs,
  QueryFindOneMovieArgs,
} from '../../generated/graphql';

const moviesService = new Movies();

export const moviesResolvers = {
  Query: {
    findAllMovies: async () => {
      try {
        const response = await moviesService.findAllMovies();
        return response;
      } catch (error) {
        throw new ApolloError(String(error));
      }
    },

    findOneMovie: async (parent: undefined, { _id }: QueryFindOneMovieArgs) => {
      try {
        const response = await moviesService.findOneMovie(_id);
        return response;
      } catch (error) {
        throw new ApolloError(String(error));
      }
    },
  },

  Mutation: {
    addMovie: async (parent: undefined, { input }: MutationAddMovieArgs) => {
      try {
        const response = await moviesService.createMovie(input);
        return response;
      } catch (error) {
        throw new ApolloError(String(error));
      }
    },

    updateMovie: async (
      parent: undefined,
      { _id, input }: MutationUpdateMovieArgs
    ) => {
      try {
        const response = await moviesService.updateMovie(_id, input);
        return response;
      } catch (error) {
        throw new ApolloError(String(error));
      }
    },

    deleteMovie: async (
      parent: undefined,
      { _id }: MutationDeleteMovieArgs
    ) => {
      try {
        const response = await moviesService.deleteMovie(_id);
        return response;
      } catch (error) {
        throw new ApolloError(String(error));
      }
    },
  },
};
