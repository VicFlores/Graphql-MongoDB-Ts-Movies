import { ApolloError } from 'apollo-server-core';
import Users from '../../service/users.service';

import {
  MutationAddUserArgs,
  MutationDeleteUserArgs,
  MutationUpdateUserArgs,
  QueryFindOneUserArgs,
  QueryLoginUserArgs,
} from '../../generated/graphql';
import { TContext } from '../../utils/TContext';
import { verifyAuth } from '../../utils/auth';

const userService = new Users();

export const usersResolvers = {
  Query: {
    findAllUsers: async (
      parents: undefined,
      args: undefined,
      context: TContext
    ) => {
      await verifyAuth(context.token);
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

    LoginUser: async (parent: undefined, { input }: QueryLoginUserArgs) => {
      try {
        const response = await userService.loginUser(input);
        return { token: response };
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
  },
};
