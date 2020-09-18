const schema = `
  input SparepartInput {
    suppliers : [ String! ]
    partNumber: String!
    item: String!
    merk: String
    satuan: [ String! ]
    harga: Int
    jumlah: Int
    foto: [ FileInput! ] 
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
