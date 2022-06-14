import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type LoginUser = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MovieInput = {
  age?: InputMaybe<Scalars['Int']>;
  category?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Movies = {
  __typename?: 'Movies';
  _id?: Maybe<Scalars['ID']>;
  age?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addMovie: Scalars['String'];
  addUser: Scalars['String'];
  deleteMovie: Scalars['String'];
  deleteUser: Scalars['String'];
  updateMovie: Scalars['String'];
  updateUser: Scalars['String'];
};


export type MutationAddMovieArgs = {
  input: MovieInput;
};


export type MutationAddUserArgs = {
  input: UserInput;
};


export type MutationDeleteMovieArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  _id: Scalars['ID'];
};


export type MutationUpdateMovieArgs = {
  _id: Scalars['ID'];
  input: MovieInput;
};


export type MutationUpdateUserArgs = {
  _id: Scalars['ID'];
  input: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  LoginUser?: Maybe<Token>;
  findAllMovies?: Maybe<Array<Maybe<Movies>>>;
  findAllUsers?: Maybe<Array<Maybe<Users>>>;
  findOneMovie?: Maybe<Movies>;
  findOneUser?: Maybe<Users>;
};


export type QueryLoginUserArgs = {
  input: LoginUser;
};


export type QueryFindOneMovieArgs = {
  _id: Scalars['ID'];
};


export type QueryFindOneUserArgs = {
  _id: Scalars['ID'];
};

export type Token = {
  __typename?: 'Token';
  token?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  email: Scalars['String'];
  lastname: Scalars['String'];
  name: Scalars['String'];
};

export type UserInput = {
  email: Scalars['String'];
  lastname: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Users = {
  __typename?: 'Users';
  _id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LoginUser: LoginUser;
  MovieInput: MovieInput;
  Movies: ResolverTypeWrapper<Movies>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Token: ResolverTypeWrapper<Token>;
  UpdateUserInput: UpdateUserInput;
  UserInput: UserInput;
  Users: ResolverTypeWrapper<Users>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  LoginUser: LoginUser;
  MovieInput: MovieInput;
  Movies: Movies;
  Mutation: {};
  Query: {};
  String: Scalars['String'];
  Token: Token;
  UpdateUserInput: UpdateUserInput;
  UserInput: UserInput;
  Users: Users;
};

export type MoviesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movies'] = ResolversParentTypes['Movies']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addMovie?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationAddMovieArgs, 'input'>>;
  addUser?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationAddUserArgs, 'input'>>;
  deleteMovie?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationDeleteMovieArgs, '_id'>>;
  deleteUser?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, '_id'>>;
  updateMovie?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationUpdateMovieArgs, '_id' | 'input'>>;
  updateUser?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, '_id' | 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  LoginUser?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QueryLoginUserArgs, 'input'>>;
  findAllMovies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Movies']>>>, ParentType, ContextType>;
  findAllUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Users']>>>, ParentType, ContextType>;
  findOneMovie?: Resolver<Maybe<ResolversTypes['Movies']>, ParentType, ContextType, RequireFields<QueryFindOneMovieArgs, '_id'>>;
  findOneUser?: Resolver<Maybe<ResolversTypes['Users']>, ParentType, ContextType, RequireFields<QueryFindOneUserArgs, '_id'>>;
};

export type TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = {
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['Users'] = ResolversParentTypes['Users']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Movies?: MoviesResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  Users?: UsersResolvers<ContextType>;
};

