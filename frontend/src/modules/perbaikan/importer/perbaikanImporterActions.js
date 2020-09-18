import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/perbaikan/importer/perbaikanImporterSelectors';
import PerbaikanService from 'modules/perbaikan/perbaikanService';
import fields from 'modules/perbaikan/importer/perbaikanImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'SATUAN_IMPORTER',
  selectors,
  PerbaikanService.import,
  fields,
  i18n('entities.perbaikan.importer.fileName'),
);
