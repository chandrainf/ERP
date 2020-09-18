const schema = `
  enum MekanikOrderByEnum {
    id_ASC
    id_DESC
    karyawan_ASC
    karyawan_DESC
    createdAt_ASC
    createdAt_DESC
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
