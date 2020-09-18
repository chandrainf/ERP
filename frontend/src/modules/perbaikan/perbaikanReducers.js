import list from 'modules/perbaikan/list/perbaikanListReducers';
import form from 'modules/perbaikan/form/perbaikanFormReducers';
import view from 'modules/perbaikan/view/perbaikanViewReducers';
import destroy from 'modules/perbaikan/destroy/perbaikanDestroyReducers';
import importerReducer from 'modules/perbaikan/importer/perbaikanImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
