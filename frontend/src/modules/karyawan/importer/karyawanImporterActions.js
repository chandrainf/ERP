import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/karyawan/importer/karyawanImporterSelectors';
import KaryawanService from 'modules/karyawan/karyawanService';
import fields from 'modules/karyawan/importer/karyawanImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'KARYAWAN_IMPORTER',
  selectors,
  KaryawanService.import,
  fields,
  i18n('entities.karyawan.importer.fileName'),
);
