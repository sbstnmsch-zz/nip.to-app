import test from 'tape';
import {WebAppController} from './web-app-controller';
import {name} from '../../../package.json';

let
  viewMock = {
    init: function() { this.result = 'init'; },
    destroy: function() { this.result = 'destroy'; }
  };

test(`${name}: util/web-app-controller - API`, (t) => {
    let
      webAppController = new WebAppController();

    t.equal(typeof webAppController.getView, 'function', 'should have a getView() method');
    t.equal(typeof webAppController.init, 'function', 'should have a init() method');
    t.equal(typeof webAppController.run, 'function', 'should have a run() method');
    t.equal(typeof webAppController.destroy, 'function', 'should have a destroy() method');

    t.end();
});

test(`${name}: util/web-app-controller - Initialization`, (t) => {
    let
      webAppController = new WebAppController();

    webAppController.view = viewMock;
    webAppController.init({ name: 'test' });

    t.equal(webAppController.app.name, 'test', 'should have a reference to app`');
    t.equal(webAppController.view.result, 'init', 'should init view`');

    t.end();
});

test(`${name}: util/web-app-controller - Initialization without view`, (t) => {
    let
      webAppController = new WebAppController();

    webAppController.init({});

    t.equal(webAppController.getView().result, undefined, 'should not crash on empty view`');

    t.end();
});

test(`${name}: util/web-app-controller - Degeneration`, (t) => {
    let
      webAppController = new WebAppController();

    webAppController.view = viewMock;
    webAppController.destroy();

    t.equal(webAppController.view.result, 'destroy', 'should destroy view`');

    t.end();
});
