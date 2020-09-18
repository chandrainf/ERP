import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class PembelianService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PEMBELIAN_UPDATE(
          $id: String!
          $data: PembelianInput!
        ) {
          pembelianUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.pembelianUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PEMBELIAN_DESTROY($ids: [String!]!) {
          pembelianDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.pembelianDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PEMBELIAN_CREATE($data: PembelianInput!) {
          pembelianCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.pembelianCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PEMBELIAN_IMPORT(
          $data: PembelianInput!
          $importHash: String!
        ) {
          pembelianImport(
            data: $data
            importHash: $importHash
          )
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.pembelianImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query PEMBELIAN_FIND($id: String!) {
          pembelianFind(id: $id) {
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

    return response.data.pembelianFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query PEMBELIAN_LIST(
          $filter: PembelianFilterInput
          $orderBy: PembelianOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          pembelianList(
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

    return response.data.pembelianList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query PEMBELIAN_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          pembelianAutocomplete(
            query: $query
            limit: $limit
          ) {
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

    return response.data.pembelianAutocomplete;
  }
}
