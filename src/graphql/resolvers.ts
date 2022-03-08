import { ApolloError } from 'apollo-server-core';
import { Movies } from '../service/movies.service';
import Users from '../service/users.service';
import {
  MutationAddMovieArgs,
  MutationAddUserArgs,
  MutationDeleteMovieArgs,
  MutationDeleteUserArgs,
  MutationUpdateMovieArgs,
  MutationUpdateUserArgs,
  QueryFindOneMovieArgs,
  QueryFindOneUserArgs,
} from '../generated/graphql';

const userService = new Users();
const moviesService = new Movies();

export const resolvers = {
  Query: {
    findAllUsers: async () => {
      try {
        const response = await userService.findAllUsers();
        return response;
      } catch (error) {
        throw new ApolloError(String(error));
      }
    },

    findOneUser: async (parent: undefined, { _id }: QueryFindOneUserArgs) => {
      try {
        const response = await userService.findOneUser(_id);
        return response;
      } catch (error) {
        throw new ApolloError(String(error));
      }
    },

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
    addUser: async (parent: undefined, { input }: MutationAddUserArgs) => {
      try {
        const response = await userService.createUser(input);
        return response;
      } catch (error) {
        throw new ApolloError(String(error));
      }
    },

    updateUser: async (
      parent: undefined,
      { _id, input }: MutationUpdateUserArgs
    ) => {
      try {
        const response = await userService.updateUser(_id, input);
        return response;
      } catch (error) {
        throw new ApolloError(String(error));
      }
    },

    deleteUser: async (parent: undefined, { _id }: MutationDeleteUserArgs) => {
      try {
        const response = await userService.deleteUser(_id);
        return response;
      } catch (error) {
        throw new ApolloError(String(error));
      }
    },

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
