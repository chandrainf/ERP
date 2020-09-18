const schema = `
  input KasMasukInput {
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
