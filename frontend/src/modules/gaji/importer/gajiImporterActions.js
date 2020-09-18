import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/gaji/importer/gajiImporterSelectors';
import GajiService from 'modules/gaji/gajiService';
import fields from 'modules/gaji/importer/gajiImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'GAJI_IMPORTER',
  selectors,
  GajiService.import,
  fields,
  i18n('entities.gaji.importer.fileName'),
);
