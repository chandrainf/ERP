import list from 'modules/gaji/list/gajiListReducers';
import form from 'modules/gaji/form/gajiFormReducers';
import view from 'modules/gaji/view/gajiViewReducers';
import destroy from 'modules/gaji/destroy/gajiDestroyReducers';
import importerReducer from 'modules/gaji/importer/gajiImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
