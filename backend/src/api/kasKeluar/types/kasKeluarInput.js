const schema = `
  input KasKeluarInput {
    id: String
    tanggal: String
    jenisKas: KasKeluarJenisKasEnum!
    jumlah: String
    catatan: String
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
