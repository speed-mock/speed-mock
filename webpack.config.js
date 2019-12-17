const path = require('path')
const paths = require('./config/paths')
module.exports = {
  alias: {
    $modules: path.join(paths.appSrc, 'modules'),
    $client: path.join(paths.appSrc, 'client'),
    $components: path.join(paths.appSrc, 'components'),
    $fetch: path.join(paths.appSrc, 'utils/request')
  }
}
