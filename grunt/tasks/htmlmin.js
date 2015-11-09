module.exports = {
  app: {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    files: [
      {
        expand: true,
        cwd: '<%= paths.dist.templates %>',
        src: '**/*.html.processhtml.tmp',
        dest: '<%= paths.dist.templates %>',
        ext: '.html',
        flatten: true
      }
    ]
  }
};
