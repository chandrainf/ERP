const KaryawanService = require('../../../services/karyawanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  karyawanCreate(data: KaryawanInput!): Karyawan!
`;

const resolver = {
  karyawanCreate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.karyawanCreate,
    );

    return new KaryawanService(context).create(args.data);
  },
};

exports.schema = schema;
exports.resolver = resolver;
