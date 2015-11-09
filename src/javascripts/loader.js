window.app = {
  config: (function() {
    try {
      return require('../../nipto.json');
    } catch (e) {
      window.console.warn('Missing custom config nipto.json');
      return require('../config/nipto-default.json');
    }
  })()
};
window.onload = () => {
  /* Lazy load app */
  let sct = window.document.createElement('script');
  sct.type = 'text/javascript';
  sct.async = true;
  sct.src = 'assets/javascripts/nip.to-app.min.js';
  (window.document.getElementsByTagName('head')[0]).appendChild(sct);
};
