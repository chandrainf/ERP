import Roles from 'security/roles';
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
          roles.viewer,
        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [
          roles.owner,
          roles.auditLogViewer,
          roles.viewer,
        ],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.owner],
      },
      satuanImport: {
        id: 'satuanImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
      },
      satuanCreate: {
        id: 'satuanCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['satuan'],
      },
      satuanEdit: {
        id: 'satuanEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['satuan'],
      },
      satuanDestroy: {
        id: 'satuanDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['satuan'],
      },
      satuanRead: {
        id: 'satuanRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
      },
      satuanAutocomplete: {
        id: 'satuanAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
      },
      supplierImport: {
        id: 'supplierImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
      },
      supplierCreate: {
        id: 'supplierCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['supplier'],
      },
      supplierEdit: {
        id: 'supplierEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['supplier'],
      },
      supplierDestroy: {
        id: 'supplierDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['supplier'],
      },
      supplierRead: {
        id: 'supplierRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
      },
      supplierAutocomplete: {
        id: 'supplierAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
      },
      statusAlatImport: {
        id: 'statusAlatImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
      },
      statusAlatCreate: {
        id: 'statusAlatCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['statusAlat'],
      },
      statusAlatEdit: {
        id: 'statusAlatEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['statusAlat'],
      },
      statusAlatDestroy: {
        id: 'statusAlatDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['statusAlat'],
      },
      statusAlatRead: {
        id: 'statusAlatRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
      },
      statusAlatAutocomplete: {
        id: 'statusAlatAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
      },
      proyekImport: {
        id: 'proyekImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
      },
      proyekCreate: {
        id: 'proyekCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['proyek'],
      },
      proyekEdit: {
        id: 'proyekEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['proyek'],
      },
      proyekDestroy: {
        id: 'proyekDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['proyek'],
      },
      proyekRead: {
        id: 'proyekRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
      },
      proyekAutocomplete: {
        id: 'proyekAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
      },
      mekanikImport: {
        id: 'mekanikImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
      },
      mekanikCreate: {
        id: 'mekanikCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['mekanik'],
      },
      mekanikEdit: {
        id: 'mekanikEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['mekanik'],
      },
      mekanikDestroy: {
        id: 'mekanikDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['mekanik'],
      },
      mekanikRead: {
        id: 'mekanikRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
      },
      mekanikAutocomplete: {
        id: 'mekanikAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
      },
      sparepartImport: {
        id: 'sparepartImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
      },
      sparepartCreate: {
        id: 'sparepartCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['sparepart'],
      },
      sparepartEdit: {
        id: 'sparepartEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['sparepart'],
      },
      sparepartDestroy: {
        id: 'sparepartDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['sparepart'],
      },
      sparepartRead: {
        id: 'sparepartRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
      },
      sparepartAutocomplete: {
        id: 'sparepartAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
      },
      daftarAlatImport: {
        id: 'daftarAlatImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
      },
      daftarAlatCreate: {
        id: 'daftarAlatCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['daftarAlat'],
      },
      daftarAlatEdit: {
        id: 'daftarAlatEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['daftarAlat'],
      },
      daftarAlatDestroy: {
        id: 'daftarAlatDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['daftarAlat'],
      },
      daftarAlatRead: {
        id: 'daftarAlatRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
      },
      daftarAlatAutocomplete: {
        id: 'daftarAlatAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.inventoryEditor,
        ],
      },
      keluhanImport: {
        id: 'keluhanImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
      },
      keluhanCreate: {
        id: 'keluhanCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['keluhan'],
      },
      keluhanEdit: {
        id: 'keluhanEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['keluhan'],
      },
      keluhanDestroy: {
        id: 'keluhanDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['keluhan'],
      },
      keluhanRead: {
        id: 'keluhanRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
      },
      keluhanAutocomplete: {
        id: 'keluhanAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
      },
      permintaanPerbaikanImport: {
        id: 'permintaanPerbaikanImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
      },
      permintaanPerbaikanCreate: {
        id: 'permintaanPerbaikanCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['permintaanPerbaikan'],
      },
      permintaanPerbaikanEdit: {
        id: 'permintaanPerbaikanEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['permintaanPerbaikan'],
      },
      permintaanPerbaikanDestroy: {
        id: 'permintaanPerbaikanDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['permintaanPerbaikan'],
      },
      permintaanPerbaikanRead: {
        id: 'permintaanPerbaikanRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
      },
      permintaanPerbaikanAutocomplete: {
        id: 'permintaanPerbaikanAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
      },
      perbaikanImport: {
        id: 'perbaikanImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
      },
      perbaikanCreate: {
        id: 'perbaikanCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['perbaikan'],
      },
      perbaikanEdit: {
        id: 'perbaikanEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['perbaikan'],
      },
      perbaikanDestroy: {
        id: 'perbaikanDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['perbaikan'],
      },
      perbaikanRead: {
        id: 'perbaikanRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
      },
      perbaikanAutocomplete: {
        id: 'perbaikanAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
      },
      kasMasukImport: {
        id: 'kasMasukImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
      },
      kasMasukCreate: {
        id: 'kasMasukCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['kasMasuk'],
      },
      kasMasukEdit: {
        id: 'kasMasukEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['kasMasuk'],
      },
      kasMasukDestroy: {
        id: 'kasMasukDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['kasMasuk'],
      },
      kasMasukRead: {
        id: 'kasMasukRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
      },
      kasMasukAutocomplete: {
        id: 'kasMasukAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
      },
      karyawanImport: {
        id: 'karyawanImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
      },
      karyawanCreate: {
        id: 'karyawanCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['karyawan'],
      },
      karyawanEdit: {
        id: 'karyawanEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['karyawan'],
      },
      karyawanDestroy: {
        id: 'karyawanDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['karyawan'],
      },
      karyawanRead: {
        id: 'karyawanRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
      },
      karyawanAutocomplete: {
        id: 'karyawanAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
      },
      kasKeluarImport: {
        id: 'kasKeluarImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
      },
      kasKeluarCreate: {
        id: 'kasKeluarCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['kasKeluar'],
      },
      kasKeluarEdit: {
        id: 'kasKeluarEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['kasKeluar'],
      },
      kasKeluarDestroy: {
        id: 'kasKeluarDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['kasKeluar'],
      },
      kasKeluarRead: {
        id: 'kasKeluarRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
      },
      kasKeluarAutocomplete: {
        id: 'kasKeluarAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
      },
      gajiImport: {
        id: 'gajiImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
      },
      gajiCreate: {
        id: 'gajiCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['gaji'],
      },
      gajiEdit: {
        id: 'gajiEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['gaji'],
      },
      gajiDestroy: {
        id: 'gajiDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['gaji'],
      },
      gajiRead: {
        id: 'gajiRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
      },
      gajiAutocomplete: {
        id: 'gajiAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
      },
      pembelianImport: {
        id: 'pembelianImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
      },
      pembelianCreate: {
        id: 'pembelianCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['pembelian'],
      },
      pembelianEdit: {
        id: 'pembelianEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['pembelian'],
      },
      pembelianDestroy: {
        id: 'pembelianDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
        allowedStorageFolders: ['pembelian'],
      },
      pembelianRead: {
        id: 'pembelianRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
      },
      pembelianAutocomplete: {
        id: 'pembelianAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.InventoryEditor,
        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
