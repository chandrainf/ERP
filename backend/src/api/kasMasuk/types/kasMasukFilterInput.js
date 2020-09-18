const schema = `
  input KasMasukFilterInput {
    jenisKas: KasKeluarJenisKasEnum
    jumlah: String
    catatan: String
    tanggalRange: [ String ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
