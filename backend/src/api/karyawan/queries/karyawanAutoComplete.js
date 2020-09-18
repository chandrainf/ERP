const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const KaryawanService = require('../../../services/karyawanService');

const schema = `
  karyawanAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  karyawanAutocomplete: async (
    root,
    args,
    context,
    info,
  ) => {
    new PermissionChecker(context).validateHas(
      permissions.karyawanAutocomplete,
    );

    return new KaryawanService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
