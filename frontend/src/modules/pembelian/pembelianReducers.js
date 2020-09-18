import list from 'modules/pembelian/list/pembelianListReducers';
import form from 'modules/pembelian/form/pembelianFormReducers';
import view from 'modules/pembelian/view/pembelianViewReducers';
import destroy from 'modules/pembelian/destroy/pembelianDestroyReducers';
import importerReducer from 'modules/pembelian/importer/pembelianImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
