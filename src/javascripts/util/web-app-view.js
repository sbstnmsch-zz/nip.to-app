export class WebAppView {

  constructor(app) {
    this.window = app.window;
    this.view = this.window.document.querySelector(`.${app.name}-content`),
    this.fragment = this.window.document.createDocumentFragment();
  }

  init() {
    return this;
  }

  destroy() {
    return this;
  }

  addClass(_class) {
    this.view.classList.add(_class);
    return this;
  }

  addAnimationClass(_class) {
    let
      _view = this.view,
      _window = this.window;
    this.window.setTimeout(
      function() {
        _window.requestAnimationFrame(
          function() {
            _view.classList.add(_class);
          }
        );
      }
    );
  }

  removeClass(_class) {
    this.view.classList.remove(_class);
    return this;
  }

  createElement(elem) {
    return this.window.document.createElement(elem);
  }

  clear() {
    let _firstChild;
    while(_firstChild = this.view.firstChild) {
      this.view.removeChild(_firstChild);
    }
    return this;
  }

  add(_node) {
    this.fragment.appendChild(_node);
    return this;
  };

  show() {
    this.clear();
    this.view.appendChild(this.fragment);
    return this;
  };
}
