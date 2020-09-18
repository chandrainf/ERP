import list from 'modules/karyawan/list/karyawanListReducers';
import form from 'modules/karyawan/form/karyawanFormReducers';
import view from 'modules/karyawan/view/karyawanViewReducers';
import destroy from 'modules/karyawan/destroy/karyawanDestroyReducers';
import importerReducer from 'modules/karyawan/importer/karyawanImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
