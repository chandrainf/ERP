const KaryawanService = require('../../../services/karyawanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  karyawanUpdate(id: String!, data: KaryawanInput!): Karyawan!
`;

const resolver = {
  karyawanUpdate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.karyawanEdit,
    );

    return new KaryawanService(context).update(
      args.id,
      args.data,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
