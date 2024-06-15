/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSignup = /* GraphQL */ `
  mutation CreateSignup(
    $input: CreateSignupInput!
    $condition: ModelSignupConditionInput
  ) {
    createSignup(input: $input, condition: $condition) {
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
export const updateSignup = /* GraphQL */ `
  mutation UpdateSignup(
    $input: UpdateSignupInput!
    $condition: ModelSignupConditionInput
  ) {
    updateSignup(input: $input, condition: $condition) {
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
export const deleteSignup = /* GraphQL */ `
  mutation DeleteSignup(
    $input: DeleteSignupInput!
    $condition: ModelSignupConditionInput
  ) {
    deleteSignup(input: $input, condition: $condition) {
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
