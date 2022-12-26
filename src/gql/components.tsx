import { gql } from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Business = {
  __typename?: 'Business';
  id: Scalars['ID'];
  name: Scalars['String'];
  owner?: Maybe<UserResponse>;
};

export type Client = {
  __typename?: 'Client';
  id: Scalars['String'];
};

export type ClientTypeResponse = {
  __typename?: 'ClientTypeResponse';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CreateBusiness = {
  name: Scalars['String'];
};

export type CreateClient = {
  address: Scalars['String'];
  email: Scalars['String'];
  identifier: Scalars['String'];
  lastName: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  type: Scalars['ID'];
};

export type CreateClientType = {
  name: Scalars['String'];
};

export type CreateItem = {
  description?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<Scalars['String']>;
  images: Array<Scalars['String']>;
  status: ItemStatus;
  title?: InputMaybe<Scalars['String']>;
};

export type Item = {
  __typename?: 'Item';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  identifier?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Scalars['String']>>;
  status?: Maybe<ItemStatus>;
  title?: Maybe<Scalars['String']>;
};

/** Status  */
export enum ItemStatus {
  Draft = 'DRAFT',
  Proposed = 'PROPOSED',
  Published = 'PUBLISHED',
  Rejected = 'REJECTED'
}

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String'];
  user: Register;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBusiness: Business;
  createClient: Client;
  createClientType: ClientTypeResponse;
  createItem: Item;
  createTenant: Tenant;
  login: LoginResponse;
  register: Register;
};


export type MutationCreateBusinessArgs = {
  business: CreateBusiness;
};


export type MutationCreateClientArgs = {
  client: CreateClient;
};


export type MutationCreateClientTypeArgs = {
  clientType: CreateClientType;
};


export type MutationCreateItemArgs = {
  item: CreateItem;
};


export type MutationLoginArgs = {
  user: RegisterUser;
};


export type MutationRegisterArgs = {
  user: RegisterUser;
};

export type Query = {
  __typename?: 'Query';
  business: Array<Business>;
  clientTypes: Array<ClientTypeResponse>;
  clients: Array<Client>;
  items: Array<Item>;
  tenant: Tenant;
};

export type Register = {
  __typename?: 'Register';
  email: Scalars['String'];
  id: Scalars['ID'];
};

export type RegisterUser = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Tenant = {
  __typename?: 'Tenant';
  business?: Maybe<Array<Business>>;
  id: Scalars['ID'];
  owner: UserResponse;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};
