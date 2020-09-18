const schema = `
  type KasMasuk {
    id: String!
    tanggal: String
    jenisKas: KasMasukJenisKasEnum
    jumlah: Int
    catatan: String
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
