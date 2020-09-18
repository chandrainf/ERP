const schema = `
  input SparepartFilterInput {
    partNumber: String
    item: String
    merk: String
    harga: Int
    jumlah: Int 
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
