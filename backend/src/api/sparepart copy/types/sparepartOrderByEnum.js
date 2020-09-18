const schema = `
  enum SparepartOrderByEnum {
    id_ASC
    id_DESC
    partNumber_ASC
    partNumber_DESC
    item_ASC
    item_DESC
    merk_ASC
    merk_DESC
    harga_ASC
    harga_DESC
    jumlah_ASC
    jumlah_DESC
    createdAt_ASC
    createdAt_DESC
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
