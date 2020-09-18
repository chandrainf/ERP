const KaryawanService = require('../../../services/karyawanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  karyawanList(filter: KaryawanFilterInput, limit: Int, offset: Int, orderBy: KaryawanOrderByEnum): KaryawanPage!
`;

const resolver = {
  karyawanList: async (root, args, context, info) => {
    new PermissionChecker(context).validateHas(
      permissions.karyawanRead,
    );

    return new KaryawanService(context).findAndCountAll({
      ...args,
      requestedAttributes: graphqlSelectRequestedAttributes(
        info,
        'rows',
      ),
    });
  },
};

exports.schema = schema;
exports.resolver = resolver;
