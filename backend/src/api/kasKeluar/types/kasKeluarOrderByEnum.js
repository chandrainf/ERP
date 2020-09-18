const schema = `
  enum KasKeluarOrderByEnum {
    id_ASC
    id_DESC
    tanggal_ASC
    tanggal_DESC
    jenisKas_ASC
    jenisKas_DESC
    jumlah_ASC
    jumlah_DESC
    catatan_ASC
    catatan_DESC
    createdAt_ASC
    createdAt_DESC
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
