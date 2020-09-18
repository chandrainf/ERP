import model from 'modules/kasKeluar/kasKeluarModel';

const { fields } = model;

export default [
  fields.tanggal,
  fields.jenisKas,
  fields.jumlah,
  fields.catatan,
];
