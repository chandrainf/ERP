import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import StringField from 'modules/shared/fields/stringField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';
import DateRangeField from 'modules/shared/fields/dateRangeField';
import DateField from 'modules/shared/fields/dateField';

function label(name) {
  return i18n(`entities.gaji.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  periode: new DateRangeField('periode', label('periode')),
  tanggal: new DateField('tanggal', label('tanggal'), {}),
  proyeks: new RelationToOneField(
    'proyeks',
    label('proyeks'),
    {},
  ),
  karyawans: new RelationToOneField(
    'karyawans',
    label('karyawans'),
    {},
  ),
  totalGaji: new StringField(
    'totalGaji',
    label('totalGaji'),
    {},
  ),
  catatan: new StringField('catatan', label('catatan'), {}),

  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
};

export default {
  fields,
};
