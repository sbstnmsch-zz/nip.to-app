
// API Mock

export default class WebAppApiAdapter {

  constructor(app) {
    this.app = app;
    return this;
  }

  register() {
    console.log('register');
    this.open();
  }

  install() {
    console.log('install');
    this.open();
  }

  open() {
    console.log('open');
  }

  touch(element) {
    console.log(`touch ${element}`);
  }

  error(msg) {
    console.log(`error: ${msg}`);
  }
}
