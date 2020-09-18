const schema = `
  type Karyawan {
    id: String!
    karyawan: String!
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
