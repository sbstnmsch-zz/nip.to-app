import WebAppApiAdapter from './web-app-api-adapter';
import {Platform} from './platform';
import {PrefixedLocalStorage} from './prefixed-local-storage';
import {Fingerprint} from './fingerprint';
import {RouteFactory} from './route-factory';

export class WebApp {

  constructor(
    _window,
    _name = 'webapp') {

    let
      routeFactory = new RouteFactory(_window),
      cache = _window.applicationCache;

    /* Reload after update */
    cache.addEventListener('updateready', () => {
      if (cache.status === cache.UPDATEREADY) {
        cache.swapCache();
        _window.location.reload();
      }
    }, false);

    this.name = _name;
    this.platform = new Platform(_window);
    this.routes = {};
    this.route = null;
    this.window = _window;
    this.localStorage = new PrefixedLocalStorage(this.window, this.name);
    this.api = new WebAppApiAdapter(this);

    // @see home-screen-determination.md
    if (!routeFactory.uid) {
      let uidFromStorage = this.localStorage.get('uid');

      if (uidFromStorage) {
        routeFactory.uid = uidFromStorage;
        this.window.location.hash = routeFactory.hash;
        this.api.open();
      } else {
        // new user
        let newUid = new Fingerprint().toString();
        this.localStorage.set('uid', newUid);
        routeFactory.uid = newUid;
        this.window.location.hash = routeFactory.hash;
        this.api.register();
      }
    } else {
      let uidFromStorage = this.localStorage.get('uid');
      if (uidFromStorage) {
        // do nothing
        this.api.open();
      } else {
        // app installed to homescreen
        this.localStorage.set('uid', routeFactory.uid);
        this.api.install();
      }
    }

    return this;
  }

  bind(selector) {
    let
      bindItems = document.querySelectorAll(selector),
      numberOfBoundItems = bindItems.length,
      goFuncy = (event) => {
        this.go(event, this);
      };

    // Bind go() to ui-elements
    for (; numberOfBoundItems--;) {
      bindItems[numberOfBoundItems].ontouchstart = goFuncy;
      bindItems[numberOfBoundItems].onclick = goFuncy;
    }
    return this;
  }

  register(route, controller) {
    this.routes[route] = new controller(this);
    return this;
  }

  run() {
    if (Object.keys(this.routes).length) {
      return this.go(null, this);
    } else {
      console.warn('No routes defined');
    }
    return this;
  }

  start(controller, _this = this) {
    if (_this.route) {
      _this.route.destroy(_this);
    }
    _this.route = controller;
    _this.route
      .init(_this)
      .run(_this);
  }

  go(event, _this = this) {
    let
      currentAction,
      routeFactory = new RouteFactory(_this.window);

    if (event) {
      // User clicked on navigation
      event.preventDefault();
      currentAction = event.target.hash.replace(/^#*/, '');;
      _this.api.touch(currentAction);
    } else {
      // Freshly opened via shared link
      // or fresh user
      currentAction = routeFactory.action || Object.keys(_this.routes)[0];
    }

    if (currentAction in _this.routes) {
      _this.start(_this.routes[currentAction], _this);
    } else {
      console.warn(`${currentAction}-route is not registered`);
    }
    routeFactory.action = ''; // Reset for root bookmarking
    _this.window.location.hash = routeFactory.hash;
    return _this;
  }

  load(stylesheet) {
    // Crossbrowser style.onload hack
    // http://viget.com/inspire/js-201-run-a-function-when-a-stylesheet-finishes-loading
    return new Promise((resolve, reject) => {
      let
        _document = this.window.document,
        _head = _document.getElementsByTagName('head')[0],
        _body = _document.body,
        _css = _document.createElement('link'),
        _img = _document.createElement('img');

      _css.href = stylesheet;
      _css.rel = 'stylesheet';
      _head.appendChild(_css);

      _img.onerror = () => {
        _body.removeChild(_img);
        resolve(this);
      }

      _body.appendChild(_img);
      _img.src = stylesheet;
    });
  }
}
