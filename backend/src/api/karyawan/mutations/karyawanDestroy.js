const KaryawanService = require('../../../services/karyawanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  karyawanDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  karyawanDestroy: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.karyawanDestroy,
    );

    await new KaryawanService(context).destroyAll(args.ids);

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
