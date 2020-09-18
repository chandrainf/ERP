import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/pembelian/importer/pembelianImporterSelectors';
import PembelianService from 'modules/pembelian/pembelianService';
import fields from 'modules/pembelian/importer/pembelianImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'PEMBELIAN_IMPORTER',
  selectors,
  PembelianService.import,
  fields,
  i18n('entities.pembelian.importer.fileName'),
);
