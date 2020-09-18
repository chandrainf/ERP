const schema = `
  input KasKeluarFilterInput {
    jumlah: String
    catatan: String
    tanggalRange: [ String ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
