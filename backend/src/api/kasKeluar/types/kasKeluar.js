const schema = `
  type KasKeluar {
    id: String!
    tanggal: String
    jenisKas: KasKeluarJenisKasEnum
    jumlah: Int
    catatan: String
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
