/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSignup = /* GraphQL */ `
  query GetSignup($id: ID!) {
    getSignup(id: $id) {
      id
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listSignups = /* GraphQL */ `
  query ListSignups(
    $filter: ModelSignupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSignups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncSignups = /* GraphQL */ `
  query SyncSignups(
    $filter: ModelSignupFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSignups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
