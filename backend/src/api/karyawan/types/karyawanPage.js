const schema = `
  type KaryawanPage {
    rows: [Karyawan!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
