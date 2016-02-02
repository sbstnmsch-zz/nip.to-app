var
    _postcssNextProcessor = require('postcss-cssnext')(),
    _postcssCustomPropertiesProcessor = require('postcss-custom-properties')(),
    _postcssCustomMediaProcessor = require('postcss-custom-media')(),
    _postcssImportProcessor = require('postcss-import')(),
    _postcssNestedProcessor = require('postcss-nested')(),
    _postcssMixinsProcessor = require('postcss-mixins')(),
    _postcssBemProcessor = require('postcss-bem')({
      defaultNamespace: 'nipto',
      style: 'suit'
    }),
    _postcssSvgProcessor = require('postcss-svg')({
      paths: ['src/images'],
      ei: { "defaults": "[fill]: white" }
    }),
    _postcssSvgoProcessor = require('postcss-svgo')(),
    _autoprefixerProcessor = require('autoprefixer')({
      browsers: [
        '> 2%',
        'Android 4',
        'last 3 iOS versions',
        'last 5 Chrome versions',
        'last 5 ChromeAndroid versions',
        'last 2 ExplorerMobile versions',
        'last 2 FirefoxAndroid versions'
      ]
    }),
    _cssPreProcessors = [
      _postcssImportProcessor,
      _postcssMixinsProcessor,
      _postcssBemProcessor,
      _postcssSvgProcessor,
      _postcssSvgoProcessor,
      _postcssNestedProcessor,
      _autoprefixerProcessor
    ],
    _cssPostProcessors = [
      _postcssCustomPropertiesProcessor,
      _postcssCustomMediaProcessor,
      _postcssNextProcessor
    ],
    _cssNanoCriticalProcessor = require('cssnano')({
			reduceIdents: false
    }),
    _cssNanoProcessor = require('cssnano')();

module.exports = {
  critical: {
    options: {
      map: false,
      processors:
        [].concat(_cssPreProcessors)
          .concat(_cssNanoCriticalProcessor)
          .concat(_cssPostProcessors)
    },
    files: {
      '<%= paths.dist.stylesheets %>/nip.to-app.critical.inline.min.css':
        '<%= paths.src.stylesheets %>/critical.css'
    }
  },
  external: {
    options: {
      map: false,
      processors:
        [].concat(_cssPreProcessors)
          .concat(_cssNanoProcessor)
          .concat(_cssPostProcessors)
    },
    files: {
      '<%= paths.dist.stylesheets %>/nip.to-app.min.css':
        '<%= paths.src.stylesheets %>/index.css'
    }
  }
};
