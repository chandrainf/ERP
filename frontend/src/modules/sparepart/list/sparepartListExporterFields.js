import model from 'modules/sparepart/sparepartModel';

const { fields } = model;

export default [
  fields.id,
  fields.suppliers,
  fields.partNumber,
  fields.item,
  fields.merk,
  fields.satuan,
  fields.harga,
  fields.jumlah,
  fields.foto,
  fields.createdAt,
  fields.updatedAt,
];
