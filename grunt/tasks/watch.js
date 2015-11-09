module.exports = {
  app: {
    files: [
      '<%= paths.src.config %>/**/*',
      '<%= paths.src.images %>/**/*.svg',
      '<%= paths.src.javascripts %>/**/*.js',
      '<%= paths.src.stylesheets %>/**/*.css',
      '<%= paths.src.templates %>/**/*.html'
    ],
    tasks: ['app']
  }
};
