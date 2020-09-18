const schema = `
  type Sparepart {
    id: String!
    suppliers: [ Supplier! ]
    partNumber: String
    item: String
    merk: String
    satuan: [ Satuan! ]
    harga: Int
    jumlah: Int
    foto: [ File! ] 
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
