import model from 'modules/sparepart/sparepartModel';

const { fields } = model;

export default [
  fields.suppliers,
  fields.partNumber,
  fields.item,
  fields.merk,
  fields.satuan,
  fields.harga,
  fields.jumlah,
  fields.foto,
];
