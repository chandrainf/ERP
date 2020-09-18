import model from 'modules/gaji/gajiModel';

const { fields } = model;

export default [
  fields.id,
  fields.karyawans,
  fields.periode,
  fields.tanggal,
  fields.karyawans,
  fields.proyeks,
  fields.totalGaji,
  fields.catatan,
  fields.createdAt,
  fields.updatedAt,
];
