import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class GajiService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation GAJI_UPDATE(
          $id: String!
          $data: GajiInput!
        ) {
          gajiUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.gajiUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation GAJI_DESTROY($ids: [String!]!) {
          gajiDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.gajiDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation GAJI_CREATE($data: GajiInput!) {
          gajiCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.gajiCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation GAJI_IMPORT(
          $data: GajiInput!
          $importHash: String!
        ) {
          gajiImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.gajiImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query GAJI_FIND($id: String!) {
          gajiFind(id: $id) {
            id
            proyeks {
              id
              namaProyek
            }
            karyawans {
              id
              namaKaryawan
            }
            totalGaji
            catatan
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data.gajiFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query GAJI_LIST(
          $filter: GajiFilterInput
          $orderBy: GajiOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          gajiList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              proyeks {
                id
                namaProyek
              }
              karyawans {
                id
                namaKaryawan
              }
              totalGaji
              catatan
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

    return response.data.gajiList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query GAJI_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          gajiAutocomplete(query: $query, limit: $limit) {
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

    return response.data.gajiAutocomplete;
  }
}
