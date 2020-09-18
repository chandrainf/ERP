const KaryawanService = require('../../../services/karyawanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  karyawanFind(id: String!): Karyawan!
`;

const resolver = {
  karyawanFind: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.karyawanRead,
    );

    return new KaryawanService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
