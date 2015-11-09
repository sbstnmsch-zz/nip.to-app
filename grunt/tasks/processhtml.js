module.exports = {
  app: {
    files: [
      {
        expand: true,
        cwd: '<%= paths.src.templates %>',
        src: '**/*.html',
        dest: '<%= paths.dist.templates %>',
        ext: '.html.processhtml.tmp',
        flatten: false
      }
    ],
    options: {
      includeBase: '<%= paths.dist.default %>',
      process: true
    }
  }
};
