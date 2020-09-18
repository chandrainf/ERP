import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class KaryawanService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation KARYAWAN_UPDATE(
          $id: String!
          $data: KaryawanInput!
        ) {
          karyawanUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.karyawanUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation KARYAWAN_DESTROY($ids: [String!]!) {
          karyawanDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.karyawanDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation KARYAWAN_CREATE($data: KaryawanInput!) {
          karyawanCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.karyawanCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation KARYAWAN_IMPORT(
          $data: KaryawanInput!
          $importHash: String!
        ) {
          karyawanImport(
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

    return response.data.karyawanImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query KARYAWAN_FIND($id: String!) {
          karyawanFind(id: $id) {
            id
            karyawan
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data.karyawanFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query KARYAWAN_LIST(
          $filter: KaryawanFilterInput
          $orderBy: KaryawanOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          karyawanList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              karyawan
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

    return response.data.karyawanList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query KARYAWAN_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          karyawanAutocomplete(
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

    return response.data.karyawanAutocomplete;
  }
}
