/* globals module */
module.exports = {
  options: {
    configFile: 'src/config/eslint.json'
  },
  target: [
    '<%= paths.src.javascripts %>**/*.js'
  ]
};
