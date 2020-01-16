const path = require('path')
const fs = require('fs-extra')
const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(__dirname, '../config', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  on('file:preprocessor', cypressTypeScriptPreprocessor)

  // accept a configFile value or use development by default
  const file = config.env.configFile || 'development'

  return getConfigurationByFile(file)
}
