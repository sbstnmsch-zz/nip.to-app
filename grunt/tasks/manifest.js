module.exports = {
  app: {
    options: {
      basePath: "dist/",
      network: ["http://*"],
      //fallback: ["/ /offline.html"],
      timestamp: true
    },
    src: [
      "assets/stylesheets/**/*.css",
      "assets/javascripts/**/*.js",
      "assets/icons/**/*.png",
    ],
    dest: "<%= paths.dist.default %>/nip.to.appcache"
  }
};
