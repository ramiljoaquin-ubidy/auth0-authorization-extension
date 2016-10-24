import { getApi } from '../../../lib/apiaccess';

module.exports = () => ({
  method: 'GET',
  path: '/api/configuration/resource-server',
  config: {
    auth: {
      strategies: [ 'jwt' ],
      scope: [ 'read:resource-server' ]
    }
  },
  handler: (req, reply) => getApi(true)
    .then((api) => reply({ enabled: !!api.identifier, token_lifetime: api.token_lifetime }))
    .catch(err => reply.error(err))
});
