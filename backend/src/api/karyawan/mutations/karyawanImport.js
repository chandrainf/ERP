const KaryawanService = require('../../../services/karyawanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  karyawanImport(data: KaryawanInput!, importHash: String!): Boolean
`;

const resolver = {
  karyawanImport: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.karyawanImport,
    );

    await new KaryawanService(context).import(
      args.data,
      args.importHash,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
