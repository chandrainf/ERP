import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import StringField from 'modules/shared/fields/stringField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateField from 'modules/shared/fields/dateField';
import EnumeratorField from 'modules/shared/fields/enumeratorField';
import DateRangeField from 'modules/shared/fields/dateRangeField';

function label(name) {
  return i18n(`entities.kasKeluar.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(
    `entities.kasKeluar.enumerators.${name}.${value}`,
  );
}

const fields = {
  id: new IdField('id', label('id')),
  nama: new StringField('nama', label('nama'), {
    required: true,
    min: 2,
    max: 255,
  }),
  tanggal: new DateField('tanggal', label('tanggal')),
  jenisKas: new EnumeratorField(
    'jenisKas',
    label('jenisKas'),
    [
      {
        id: 'BIAYA',
        label: enumeratorLabel('jenisKas', 'BIAYA'),
      },
      {
        id: 'HUTANG',
        label: enumeratorLabel('jenisKas', 'HUTANG'),
      },
      {
        id: 'SEWA',
        label: enumeratorLabel('jenisKas', 'SEWA'),
      },
      {
        id: 'PENJUALAN',
        label: enumeratorLabel('jenisKas', 'PENJUALAN'),
      },
      {
        id: 'LAINNYA',
        label: enumeratorLabel('jenisKas', 'LAINNYA'),
      },
    ],
    {},
  ),
  jumlah: new StringField('jumlah', label('jumlah'), {}),
  catatan: new StringField('catatan', label('catatan'), {}),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  tanggalRange: new DateRangeField(
    'tanggalRange',
    label('tanggalRange'),
  ),
};

export default {
  fields,
};
