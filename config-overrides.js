const { 
  override,
  addBabelPlugins,
  removeModuleScopePlugin,
} = require('customize-cra');

module.exports = override(
  ...addBabelPlugins(
    "babel-plugin-styled-components",
  ),
  removeModuleScopePlugin(),
);