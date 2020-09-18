import { connectRouter } from 'connected-react-router';
import layout from 'modules/layout/layoutReducers';
import auth from 'modules/auth/authReducers';
import iam from 'modules/iam/iamReducers';
import auditLog from 'modules/auditLog/auditLogReducers';
import settings from 'modules/settings/settingsReducers';
import satuan from 'modules/satuan/satuanReducers';
import supplier from 'modules/supplier/supplierReducers';
import proyek from 'modules/proyek/proyekReducers';
import mekanik from 'modules/mekanik/mekanikReducers';
import statusAlat from 'modules/statusAlat/statusAlatReducers';
import daftarAlat from 'modules/daftarAlat/daftarAlatReducers';
import sparepart from 'modules/sparepart/sparepartReducers';
import keluhan from 'modules/keluhan/keluhanReducers';
import permintaanPerbaikan from 'modules/permintaanPerbaikan/permintaanPerbaikanReducers';
import perbaikan from 'modules/perbaikan/perbaikanReducers';
import deklarasi from 'modules/deklarasi/deklarasiReducers';
import kasMasuk from 'modules/kasMasuk/kasMasukReducers';
import kasKeluar from 'modules/kasKeluar/kasKeluarReducers';
import gaji from 'modules/gaji/gajiReducers';
import karyawan from 'modules/karyawan/karyawanReducers';
import pembelian from 'modules/pembelian/pembelianReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    iam,
    auditLog,
    settings,
    satuan,
    supplier,
    proyek,
    mekanik,
    statusAlat,
    daftarAlat,
    sparepart,
    keluhan,
    permintaanPerbaikan,
    deklarasi,
    kasMasuk,
    kasKeluar,
    gaji,
    perbaikan,
    karyawan,
    pembelian,
  });
