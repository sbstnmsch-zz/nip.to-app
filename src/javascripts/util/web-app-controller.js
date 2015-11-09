export class WebAppController {

  constructor() {
  }

  getView() {
    if (this.view) {
      return this.view;
    } else {
      return {
        init: () => {},
        destroy: () => {}
      }
    }
  }

  getApp() {
    return this.app;
  }

  init(app) {
    this.app = app;
    this.getView().init(this);
    return this;
  }

  run(app) {
    console.warn('No run(app) method defined');
  }

  destroy(app) {
    this.getView().destroy(this);
  }
}
