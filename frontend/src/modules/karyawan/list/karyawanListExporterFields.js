import model from 'modules/karyawan/karyawanModel';

const { fields } = model;

export default [
  fields.id,
  fields.karyawan,
  fields.createdAt,
  fields.updatedAt,
];
