/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */


// module.exports = (on, config) => {
//   on('task', require('@cypress/code-coverage/task'))
// }

module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config)
  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config
}
