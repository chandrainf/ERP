import model from 'modules/kasKeluar/kasKeluarModel';

const { fields } = model;

export default [
  fields.id,
  fields.tanggal,
  fields.jenisKas,
  fields.jumlah,
  fields.catatan,
  fields.createdAt,
  fields.updatedAt,
];
