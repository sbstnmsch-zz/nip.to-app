import test from 'tape';
import {WebApp} from './web-app';
import WindowMock from 'window-mock';
import {name} from '../../../package.json';

test(`${name}: util/web-app - API`, (t) => {
  let
    windowMock = new WindowMock(),
    webApp = new WebApp(windowMock);

  t.equal(typeof webApp.bind, 'function', 'should have a bind() method');
  t.equal(typeof webApp.register, 'function', 'should have a register() method');
  t.equal(typeof webApp.run, 'function', 'should have a run() method');
  t.equal(typeof webApp.start, 'function', 'should have a start() method');
  t.equal(typeof webApp.go, 'function', 'should have a go() method');
  t.equal(typeof webApp.load, 'function', 'should have a load() method');

  t.end();
});

test(`${name}: util/web-app - Web-App naming`, (t) => {
    let
      windowMock = new WindowMock(),
      webApp;

    webApp = new WebApp(windowMock);
    t.equal(webApp.name, 'webapp', 'should name itself `webapp`');

    webApp = new WebApp(windowMock, 'test');
    t.equal(webApp.name, 'test', 'should accept custom names');

    t.end();
});

test(`${name}: util/web-app - Web-App routing`, (t) => {
    let
      windowMock = new WindowMock(),
      webApp = new WebApp(windowMock);

    // TODO

    t.end();
});
