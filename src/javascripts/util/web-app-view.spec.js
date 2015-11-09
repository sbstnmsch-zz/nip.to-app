import test from 'tape';
import {WebAppView} from './web-app-view';
import WindowMock from 'window-mock';
import {name} from '../../../package.json';

let
  appMock = {
    name: 'test',
    window: new WindowMock()
  },
  webAppView;

test(`${name}: util/web-app-view - API`, (t) => {
    webAppView = new WebAppView(appMock);

    t.equal(typeof webAppView.init, 'function', 'should have a init() method');
    t.equal(typeof webAppView.destroy, 'function', 'should have a destroy() method');
    t.equal(typeof webAppView.addClass, 'function', 'should have a addClass() method');
    t.equal(typeof webAppView.addAnimationClass, 'function', 'should have a addAnimationClass() method');
    t.equal(typeof webAppView.removeClass, 'function', 'should have a removeClass() method');
    t.equal(typeof webAppView.createElement, 'function', 'should have a createElement() method');
    t.equal(typeof webAppView.clear, 'function', 'should have a clear() method');
    t.equal(typeof webAppView.add, 'function', 'should have a add() method');
    t.equal(typeof webAppView.show, 'function', 'should have a show() method');

    t.end();
});

test(`${name}: util/web-app-view - Initialization`, (t) => {
    webAppView = new WebAppView(appMock);

    t.equal(webAppView.window._test, 'Window', 'should have a reference to window');
    t.equal(webAppView.view._test, 'Node', 'should have a reference to dom-view');
    t.equal(webAppView.fragment._test, 'Fragment', 'should have a dom-fragment');

    t.end();
});

test(`${name}: util/web-app-view - Class house-keeping`, (t) => {
    webAppView = new WebAppView(appMock);

    webAppView.addClass('test');
    t.equal(webAppView.view.classList.toString(), 'test', 'should add css-class');

    webAppView.addAnimationClass('testAnimation');
    t.equal(webAppView.view.classList.toString(), 'test,testAnimation', 'should add css-animation-class via animation frame');

    webAppView.addClass('remove');
    webAppView.removeClass('remove');
    t.equal(webAppView.view.classList.toString(), 'test,testAnimation', 'should remove css-class');

    t.end();
});

test(`${name}: util/web-app-view - Node house-keeping`, (t) => {
    webAppView = new WebAppView(appMock);

    t.equal(webAppView.createElement('test')._test, 'Node', 'should create element node');

    webAppView.add('node');
    t.equal(webAppView.fragment.children.length, 1, 'should add node');

    webAppView.clear();
    t.equal(webAppView.view.children.length, 0, 'should clear all nodes');

    t.end();
});

test(`${name}: util/web-app-view - View initialization`, (t) => {
    webAppView = new WebAppView(appMock);

    webAppView.clear();

    webAppView.show();

    t.equal(webAppView.view.children.length, 1, 'should clear and add fragment');

    t.end();
});
