import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class PerbaikanService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PERBAIKAN_UPDATE(
          $id: String!
          $data: PerbaikanInput!
        ) {
          perbaikanUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.perbaikanUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PERBAIKAN_DESTROY($ids: [String!]!) {
          perbaikanDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.perbaikanDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PERBAIKAN_CREATE($data: PerbaikanInput!) {
          perbaikanCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.perbaikanCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PERBAIKAN_IMPORT(
          $data: PerbaikanInput!
          $importHash: String!
        ) {
          perbaikanImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.perbaikanImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query PERBAIKAN_FIND($id: String!) {
          perbaikanFind(id: $id) {
            id
            nama
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data.perbaikanFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query PERBAIKAN_LIST(
          $filter: PerbaikanFilterInput
          $orderBy: PerbaikanOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          perbaikanList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              nama
              updatedAt
              createdAt
            }
          }
        }
      `,

      variables: {
        filter,
        orderBy,
        limit,
        offset,
      },
    });

    return response.data.perbaikanList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query PERBAIKAN_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          perbaikanAutocomplete(query: $query, limit: $limit) {
            id
            label
          }
        }
      `,

      variables: {
        query,
        limit,
      },
    });

    return response.data.perbaikanAutocomplete;
  }
}
